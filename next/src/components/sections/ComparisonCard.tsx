/**
 * ComparisonCard — Chris vs Others. Ported from ComparisonCard.astro.
 *
 * Single dark glow shell, two columns inside. Chris bullets prefixed with orange
 * checkmarks; Others bullets prefixed with X marks.
 */

const chris = [
  'Helps you build a company that actually works with AI',
  'Focuses on the operating model underneath everything',
  'Helps you decide what needs to change first',
  'Rebuilds how systems, data, and teams connect',
  'Focuses on value, not activity',
];

const others = [
  'Help you adopt AI',
  'Focus on tools and workflows',
  'Optimize what already exists',
  'Implement platforms in isolation',
  'Measure activity and performance',
];

export function ComparisonCard() {
  return (
    <section className="cc-cmp">
      <div className="cc-cmp-shell">
        <div className="cc-cmp-col cc-cmp-col-chris">
          <h3>Chris</h3>
          {chris.map((p) => (
            <div className="cc-cmp-bullet" key={p}>
              <svg
                className="cc-cmp-check"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="3 9.5 7 13.5 15 5" />
              </svg>
              <span>{p}</span>
            </div>
          ))}
        </div>
        <div className="cc-cmp-col cc-cmp-col-others">
          <h3>Others</h3>
          {others.map((p) => (
            <div className="cc-cmp-bullet" key={p}>
              <svg
                className="cc-cmp-x"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="4" x2="14" y2="14" />
                <line x1="14" y1="4" x2="4" y2="14" />
              </svg>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
