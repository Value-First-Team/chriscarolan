/**
 * IconOrb — 55-60px conic-gradient circle with a navy chip cut out of the
 * bottom, housing an outline icon. Brand iconography pattern.
 *
 * Ported from IconOrb.astro. Pass an SVG via children.
 */

import type { ReactNode } from 'react';

interface IconOrbProps {
  size?: number;
  children?: ReactNode;
}

export function IconOrb({ size = 56, children }: IconOrbProps) {
  const chipSize = size * 0.5;
  const chipOffsetLeft = size * 0.25;
  const chipOffsetBottom = -(size * 0.25);

  return (
    <div className="cc-icon-orb" style={{ width: `${size}px`, height: `${size}px` }}>
      <div
        className="cc-icon-orb-chip"
        style={{
          left: `${chipOffsetLeft}px`,
          bottom: `${chipOffsetBottom}px`,
          width: `${chipSize}px`,
          height: `${chipSize}px`,
        }}
        aria-hidden="true"
      />
      <div className="cc-icon-orb-inner">{children}</div>
    </div>
  );
}
