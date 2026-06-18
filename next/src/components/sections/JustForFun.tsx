/**
 * JustForFun — cream card on the navy page. Chris portrait full-bleed on the
 * left half; three short bullet lines with orange checkmarks on the right.
 * Ported from JustForFun.astro. All Chris's own words.
 */

const lines = [
  'I started my career trying to be a chemist',
  'I do my best work in conversation, not behind the scenes',
  'I don’t set revenue goals. I focus on value and let the results follow',
];

export function JustForFun() {
  return (
    <section className="cc-fun">
      <div className="cc-fun-card">
        <div className="cc-fun-photo" aria-hidden="true" />
        <div className="cc-fun-text">
          <h2>Just for Fun</h2>
          <div className="cc-fun-list">
            {lines.map((l) => (
              <div className="cc-fun-line" key={l}>
                <svg
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
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
