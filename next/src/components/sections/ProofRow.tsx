/**
 * ProofRow — "PROOF OF IMPACT" green eyebrow + four credential columns.
 * Ported from ProofRow.astro.
 *
 * Verified credentials (Chris 2026-05-20):
 *   1. Founder, Value-First Team
 *   2. Creator of the Value-First methodology
 *   3. HubSpot Solutions Partner since 2023
 *   4. Host of 1,000+ LinkedIn Live Streams
 */

const items = [
  { headline: 'Founder,', sub: 'Value-First Team' },
  { headline: 'Creator of the', sub: 'Value-First methodology' },
  { headline: 'HubSpot Solutions', sub: 'Partner since 2023' },
  { headline: 'Host of 1,000+', sub: 'LinkedIn Live Streams' },
];

export function ProofRow() {
  return (
    <section className="cc-proofrow">
      <div className="cc-proof-eyebrow">Proof of Impact</div>
      <div className="cc-proof-items">
        {items.map((it) => (
          <div className="cc-proof-item" key={it.sub}>
            <div className="cc-proof-headline">{it.headline}</div>
            <div className="cc-proof-sub">{it.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
