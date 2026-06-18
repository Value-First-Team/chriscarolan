/**
 * CCLogo — brand lockup: orange-gradient CC monogram + stacked "Chris / Carolan"
 * wordmark composed from live text (Kameron, cream).
 *
 * Ported from CCLogo.astro. The SVG wordmark assets only contain "Carolan" — to
 * render the stacked two-line lockup the type is composed directly.
 */

interface CCLogoProps {
  height?: number;
  color?: 'cream' | 'dark';
}

export function CCLogo({ height = 50, color = 'cream' }: CCLogoProps) {
  const markWidth = Math.round(height * 1.375);
  const lineSize = Math.round(height * 0.42);
  const textColor = color === 'cream' ? 'var(--cc-pearl)' : 'var(--cc-prune)';

  return (
    <div className="cc-logo" style={{ height: `${height}px` }}>
      <div
        className="cc-logo-mark"
        style={{ width: `${markWidth}px`, height: `${height}px` }}
        aria-hidden="true"
      />
      <div
        className="cc-logo-words"
        style={{ fontSize: `${lineSize}px`, color: textColor }}
        aria-label="Chris Carolan"
      >
        <span>Chris</span>
        <span>Carolan</span>
      </div>
    </div>
  );
}
