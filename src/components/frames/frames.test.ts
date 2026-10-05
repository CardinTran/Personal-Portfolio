import { describe, expect, it } from 'vitest';
import {
  type Camera,
  type Vec3,
  isWithinReach,
  project,
  unityToRobot,
  unprojectOnPlane,
} from './frames';

const camera: Camera = {
  yaw: (-35 * Math.PI) / 180,
  pitch: (28 * Math.PI) / 180,
  scale: 240,
  origin: { x: 200, y: 300 },
};
const origin: Vec3 = { x: 0, y: 0, z: 0 };

function expectClose(actual: Vec3, expected: Vec3) {
  expect(actual.x).toBeCloseTo(expected.x, 6);
  expect(actual.y).toBeCloseTo(expected.y, 6);
  expect(actual.z).toBeCloseTo(expected.z, 6);
}

describe('unityToRobot', () => {
  it('maps Unity axes onto the right-handed Z-up robot axes in millimetres', () => {
    expectClose(unityToRobot({ x: 0, y: 0, z: 1 }, origin), {
      x: 1000,
      y: 0,
      z: 0,
    });
    expectClose(unityToRobot({ x: 1, y: 0, z: 0 }, origin), {
      x: 0,
      y: -1000,
      z: 0,
    });
    expectClose(unityToRobot({ x: 0, y: 1, z: 0 }, origin), {
      x: 0,
      y: 0,
      z: 1000,
    });
  });

  it('flips handedness: the mapped basis has a triple product of -1', () => {
    const [a, b, c] = [
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 },
      { x: 0, y: 0, z: 1 },
    ].map((v) => unityToRobot(v, origin)) as [Vec3, Vec3, Vec3];
    const cross = {
      x: a.y * b.z - a.z * b.y,
      y: a.z * b.x - a.x * b.z,
      z: a.x * b.y - a.y * b.x,
    };
    const triple = cross.x * c.x + cross.y * c.y + cross.z * c.z;
    expect(triple / 1000 ** 3).toBeCloseTo(-1, 9);
  });

  it('measures relative to the robot base', () => {
    const base = { x: 0.5, y: 0, z: 0.2 };
    expectClose(unityToRobot(base, base), origin);
    expectClose(unityToRobot({ x: 0.9, y: 0.45, z: 0.6 }, base), {
      x: 400,
      y: -400,
      z: 450,
    });
  });
});

describe('project / unprojectOnPlane', () => {
  it('round-trips a point on a horizontal plane', () => {
    const p = { x: 0.73, y: 0.31, z: -0.42 };
    expectClose(unprojectOnPlane(project(p, camera), p.y, camera), p);
  });

  it('draws higher points higher on screen', () => {
    expect(project({ x: 0, y: 1, z: 0 }, camera).y).toBeLessThan(
      project(origin, camera).y,
    );
  });
});

describe('isWithinReach', () => {
  it('includes the boundary and excludes points beyond it', () => {
    expect(isWithinReach({ x: 900, y: 0, z: 0 }, 0.9)).toBe(true);
    expect(isWithinReach({ x: 600, y: 600, z: 400 }, 0.9)).toBe(false);
  });
});
