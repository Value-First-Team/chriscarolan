/**
 * ProblemStatement — left column: orange-on-cream headline + body. Right column:
 * full-bleed dark photo card. Ported from ProblemStatement.astro.
 * Body copy verbatim (Challenger Coach voice, three named patterns).
 */

export function ProblemStatement() {
  return (
    <section className="cc-problem">
      <div className="cc-problem-text">
        <h2 className="cc-problem-headline">
          AI isn&rsquo;t the problem. The way most companies operate is.
        </h2>
        <div className="cc-problem-body">
          <p>
            Leaders don&rsquo;t need more tools or more dashboards. They need a better way to run
            the business.
          </p>
          <p>
            <strong>Your systems don&rsquo;t reflect reality.</strong> Data is spread across too
            many tools. Teams work from different definitions. Reports say one thing, people say
            another, and things break down fast.
          </p>
          <p>
            <strong>Your people are being managed by activity, not value.</strong> When the system
            rewards call volume, task completion, and box-checking, people stop using judgment. The
            best ones work around it. Everyone else learns to play small.
          </p>
          <p>
            <strong>AI on top of a broken system only makes it worse.</strong> If the foundation is
            messy, AI just helps you do more of the wrong things faster. More output. More
            confusion. Less value.
          </p>
        </div>
      </div>

      <div className="cc-problem-photo">
        <img src="/assets/chris-portrait-speaking.png" alt="Chris Carolan speaking on stage" />
      </div>
    </section>
  );
}
