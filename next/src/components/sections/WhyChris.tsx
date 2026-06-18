/**
 * WhyChris — text-only section. Orange headline + three short paragraphs.
 * Ported from WhyChris.astro. Copy verbatim (Chris's lines).
 */

export function WhyChris() {
  return (
    <section className="cc-why">
      <div className="cc-why-inner">
        <h2 className="cc-why-headline">Why Chris</h2>
        <div className="cc-why-body">
          <p>
            Most people in this space help companies use tools better. I help you rethink what those
            tools are sitting on.
          </p>
          <p>
            I&rsquo;m not here to optimize broken processes, set up software in isolation, or
            automate what isn&rsquo;t working.
          </p>
          <p>
            I help you step back, see the bigger pattern, and rebuild how your business actually
            works, so your people and AI can create value together.
          </p>
        </div>
      </div>
    </section>
  );
}
