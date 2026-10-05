/**
 * Geometry for the hero's two-frame illustration. Scene coordinates follow
 * Unity: left-handed, Y-up, metres. The robot frame follows the common
 * right-handed, Z-up convention (X forward, Y left) in millimetres. Values
 * are illustrative and are not taken from any project code.
 */

export interface Vec3 {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export interface Point {
  readonly x: number;
  readonly y: number;
}

/** Fixed oblique camera: yaw and pitch in radians, scale in px per metre. */
export interface Camera {
  readonly yaw: number;
  readonly pitch: number;
  readonly scale: number;
  readonly origin: Point;
}

export function project(p: Vec3, camera: Camera): Point {
  const { yaw, pitch, scale, origin } = camera;
  const across = p.x * Math.cos(yaw) - p.z * Math.sin(yaw);
  const depth = p.x * Math.sin(yaw) + p.z * Math.cos(yaw);
  return {
    x: origin.x + scale * across,
    y: origin.y - scale * (p.y * Math.cos(pitch) + depth * Math.sin(pitch)),
  };
}

/** Inverse of `project` for a screen point constrained to the plane at height `y`. */
export function unprojectOnPlane(
  screen: Point,
  y: number,
  camera: Camera,
): Vec3 {
  const { yaw, pitch, scale, origin } = camera;
  const across = (screen.x - origin.x) / scale;
  const depth =
    ((origin.y - screen.y) / scale - y * Math.cos(pitch)) / Math.sin(pitch);
  return {
    x: across * Math.cos(yaw) + depth * Math.sin(yaw),
    y,
    z: -across * Math.sin(yaw) + depth * Math.cos(yaw),
  };
}

const MM_PER_M = 1000;

/** Express a Unity world point relative to a robot base placed at `base`. */
export function unityToRobot(p: Vec3, base: Vec3): Vec3 {
  return {
    x: (p.z - base.z) * MM_PER_M,
    y: -(p.x - base.x) * MM_PER_M,
    z: (p.y - base.y) * MM_PER_M,
  };
}

export function isWithinReach(robotMm: Vec3, reachM: number): boolean {
  return Math.hypot(robotMm.x, robotMm.y, robotMm.z) <= reachM * MM_PER_M;
}
