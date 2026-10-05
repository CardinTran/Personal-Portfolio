import { useEffect, useRef, useState, type PointerEvent } from 'react';
import {
  type Camera,
  type Vec3,
  isWithinReach,
  project,
  unityToRobot,
  unprojectOnPlane,
} from './frames';
import './FramesDiagram.css';

// Illustrative scene values, not robot specifications or project code.
const BASE: Vec3 = { x: 0.5, y: 0, z: 0.2 };
const REACH_M = 0.9;
const YAW = (-35 * Math.PI) / 180;
const PITCH = (28 * Math.PI) / 180;
/** Metres of scene visible across the canvas width. */
const SCENE_WIDTH_M = 2.5;
const AXIS_LENGTH_M = 0.32;
const GRID = { min: -0.75, maxX: 1.5, maxZ: 1, step: 0.25 };

const RANGES = {
  x: { min: -0.6, max: 1.6 },
  y: { min: 0, max: 1.2 },
  z: { min: -0.8, max: 1 },
} as const;
type Axis = keyof typeof RANGES;
const AXES = Object.keys(RANGES) as Axis[];

const UNITY_AXES: [string, Vec3][] = [
  ['x', { x: 1, y: 0, z: 0 }],
  ['y', { x: 0, y: 1, z: 0 }],
  ['z', { x: 0, y: 0, z: 1 }],
];
// Robot X forward, Y left, Z up, drawn in Unity scene coordinates.
const ROBOT_AXES: [string, Vec3][] = [
  ['X', { x: 0, y: 0, z: 1 }],
  ['Y', { x: -1, y: 0, z: 0 }],
  ['Z', { x: 0, y: 1, z: 0 }],
];

const clamp = (value: number, axis: Axis) =>
  Math.min(RANGES[axis].max, Math.max(RANGES[axis].min, value));

const signed = (n: number, digits: number) =>
  (n < 0 ? '−' : '+') + Math.abs(n).toFixed(digits);

function cameraFor(width: number, height: number): Camera {
  return {
    yaw: YAW,
    pitch: PITCH,
    scale: width / SCENE_WIDTH_M,
    origin: { x: width * 0.34, y: height * 0.66 },
  };
}

function draw(canvas: HTMLCanvasElement, target: Vec3) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const { width, height } = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const style = getComputedStyle(canvas);
  const color = (name: string) => style.getPropertyValue(name).trim();
  const rule = color('--rule');
  const ink = color('--ink');
  const virtual = color('--virtual');
  const physical = color('--physical');
  const camera = cameraFor(width, height);

  const line = (
    a: Vec3,
    b: Vec3,
    stroke: string,
    lineWidth = 1,
    dash: number[] = [],
  ) => {
    const p = project(a, camera);
    const q = project(b, camera);
    ctx.beginPath();
    ctx.setLineDash(dash);
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(q.x, q.y);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  const triad = (
    at: Vec3,
    axes: [string, Vec3][],
    stroke: string,
    lineWidth: number,
  ) => {
    ctx.font = `500 12px ${color('--mono')}`;
    ctx.fillStyle = stroke;
    for (const [name, d] of axes) {
      const end = {
        x: at.x + d.x * AXIS_LENGTH_M,
        y: at.y + d.y * AXIS_LENGTH_M,
        z: at.z + d.z * AXIS_LENGTH_M,
      };
      line(at, end, stroke, lineWidth);
      const s = project(end, camera);
      ctx.fillText(name, s.x + 4, s.y - 4);
    }
  };

  ctx.clearRect(0, 0, width, height);

  for (let v = GRID.min; v <= GRID.maxX + 1e-9; v += GRID.step) {
    line({ x: v, y: 0, z: GRID.min }, { x: v, y: 0, z: GRID.maxZ }, rule);
  }
  for (let v = GRID.min; v <= GRID.maxZ + 1e-9; v += GRID.step) {
    line({ x: GRID.min, y: 0, z: v }, { x: GRID.maxX, y: 0, z: v }, rule);
  }

  ctx.beginPath();
  ctx.setLineDash([3, 4]);
  for (let i = 0; i <= 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    const s = project(
      {
        x: BASE.x + REACH_M * Math.cos(a),
        y: 0,
        z: BASE.z + REACH_M * Math.sin(a),
      },
      camera,
    );
    if (i === 0) ctx.moveTo(s.x, s.y);
    else ctx.lineTo(s.x, s.y);
  }
  ctx.strokeStyle = physical;
  ctx.lineWidth = 1;
  ctx.stroke();

  const zero = { x: 0, y: 0, z: 0 };
  triad(zero, UNITY_AXES, virtual, 1.5);
  triad(BASE, ROBOT_AXES, physical, 2.5);

  line({ ...target, y: 0 }, target, ink, 1, [2, 3]);
  line(zero, target, virtual, 1, [4, 4]);
  line(BASE, target, physical, 1, [4, 4]);
  ctx.setLineDash([]);
  const s = project(target, camera);
  ctx.fillStyle = ink;
  ctx.fillRect(s.x - 5, s.y - 5, 10, 10);
}

export function FramesDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [target, setTarget] = useState<Vec3>({ x: 0.9, y: 0.45, z: 0.6 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const redraw = () => draw(canvas, target);
    redraw();
    const observer = new ResizeObserver(redraw);
    observer.observe(canvas);
    document.fonts.ready.then(redraw).catch(() => undefined);
    return () => observer.disconnect();
  }, [target]);

  const robot = unityToRobot(target, BASE);
  const withinReach = isWithinReach(robot, REACH_M);

  function moveTo(event: PointerEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const p = unprojectOnPlane(
      { x: event.clientX - rect.left, y: event.clientY - rect.top },
      target.y,
      cameraFor(rect.width, rect.height),
    );
    setTarget({ x: clamp(p.x, 'x'), y: target.y, z: clamp(p.z, 'z') });
  }

  return (
    <figure className="frames">
      <canvas
        ref={canvasRef}
        className="frames__canvas"
        role="img"
        aria-label="One target point drawn in two coordinate frames: a Unity world frame and a robot base frame offset beside it, with a dashed reach boundary."
        data-dragging={dragging || undefined}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
          moveTo(event);
        }}
        onPointerMove={(event) => dragging && moveTo(event)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      />
      <div className="frames__readout mono">
        <p className="frames__frame frames__frame--virtual">
          <b>Unity world · Y-up, left-handed · m</b>x {signed(target.x, 2)} y{' '}
          {signed(target.y, 2)} z {signed(target.z, 2)}
        </p>
        <p className="frames__frame frames__frame--physical">
          <b>Robot base · Z-up, right-handed · mm</b>X {signed(robot.x, 0)} Y{' '}
          {signed(robot.y, 0)} Z {signed(robot.z, 0)}
          <span data-outside={!withinReach || undefined}>
            {withinReach ? ' · within reach' : ' · outside reach'}
          </span>
        </p>
      </div>
      <div className="frames__controls mono">
        {AXES.map((axis) => (
          <label key={axis}>
            Unity {axis}
            <input
              type="range"
              min={RANGES[axis].min}
              max={RANGES[axis].max}
              step={0.01}
              value={target[axis]}
              aria-valuetext={`${target[axis].toFixed(2)} metres`}
              onChange={(event) =>
                setTarget({ ...target, [axis]: Number(event.target.value) })
              }
            />
          </label>
        ))}
      </div>
      <figcaption className="mono muted">
        Drag the target or use the sliders. One pose, two conventions: the
        translation problem at the centre of The Wanderer. Frames, base offset,
        and reach are illustrative, not project code or robot specifications.
      </figcaption>
    </figure>
  );
}
