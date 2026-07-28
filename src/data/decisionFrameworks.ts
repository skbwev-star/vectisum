export interface DecisionNode {
  question: string;
  yes: string;
  no: string;
}

export interface DecisionFramework {
  slug: string;
  title: string;
  dek: string;
  intro: string;
  nodes: DecisionNode[];
  verdictNote: string;
}

export const decisionFrameworks: DecisionFramework[] = [
  {
    slug: 'should-i-buy',
    title: 'Should I Buy?',
    dek: 'The sequence of checks that has to clear before a purchase decision is defensible.',
    intro: 'This framework does not answer the question. It orders the checks so that a "yes" at the end is a conclusion supported by evidence, not a feeling supported by enthusiasm.',
    nodes: [
      { question: 'Does the true net yield, after full reconciliation, clear your stated target?', yes: 'Continue to comparable evidence.', no: 'Stop. Re-price or decline before proceeding further.' },
      { question: 'Is the price defensible against verified closed comparables, not listings?', yes: 'Continue to exit liquidity.', no: 'Renegotiate toward the evidence-backed range, or decline.' },
      { question: 'Does the position remain cash-flow positive under a combined downside scenario?', yes: 'Continue to exit liquidity.', no: 'Reduce leverage, renegotiate price, or decline.' },
      { question: 'Is exit liquidity in this specific sub-market and unit type acceptable for your hold horizon?', yes: 'Proceed to structuring and legal due diligence.', no: 'Reassess hold period or asset selection.' },
    ],
    verdictNote: 'A "buy" verdict requires every gate above to clear — not a majority.',
  },
  {
    slug: 'should-i-walk-away',
    title: 'Should I Walk Away?',
    dek: 'Distinguishing a negotiable flaw from a structural one.',
    intro: 'Most deals that should be declined are not obviously bad — they are marginal, and marginal deals are the ones investors talk themselves into. This framework separates issues that can be priced or negotiated from issues that cannot.',
    nodes: [
      { question: 'Is the gap between quoted and verified yield explained by a correctable pricing error?', yes: 'Renegotiate against the corrected figure.', no: 'Weight this toward walking away.' },
      { question: 'Is a "guaranteed return" funded from a source other than your own deposit?', yes: 'Discount the guarantee period; proceed on post-guarantee fundamentals.', no: 'Walk away — the guarantee is not adding real return.' },
      { question: 'Can the developer or vendor evidence their claims independently?', yes: 'Proceed with standard verification.', no: 'Treat every unverified claim as false for underwriting purposes; reassess.' },
      { question: 'Does the asset still clear your threshold using only verified figures, with no benefit of the doubt?', yes: 'Proceed.', no: 'Walk away.' },
    ],
    verdictNote: 'If the answer to any single question is a structural "no," the deal fails independent of how the others resolve.',
  },
  {
    slug: 'should-i-renegotiate',
    title: 'Should I Renegotiate?',
    dek: 'When the evidence supports a lower price rather than a declined deal.',
    intro: 'Renegotiation is appropriate when the asset is fundamentally sound but the ask price has not caught up with verified evidence — not as a reflexive opening move.',
    nodes: [
      { question: 'Does verified comparable evidence support a price below the current ask?', yes: 'Renegotiate to the evidence-backed offer price.', no: 'Accept the ask or decline; renegotiating without evidence weakens your position.' },
      { question: 'Is the current ask price the only obstacle — with yield, liquidity, and developer risk otherwise acceptable?', yes: 'A price renegotiation alone should resolve the deal.', no: 'Address the other risk factors before or alongside price.' },
      { question: 'Does the seller have a demonstrable reason to move on price (holding costs, timeline pressure, inventory)?', yes: 'Negotiate assertively toward the evidence-backed figure.', no: 'Expect a longer negotiation or consider walking away as leverage.' },
    ],
    verdictNote: 'A renegotiation strategy is only as strong as the comparable evidence behind the counter-offer.',
  },
  {
    slug: 'should-i-hold',
    title: 'Should I Hold?',
    dek: 'Reassessing an existing position against the same standard applied to a new acquisition.',
    intro: 'An asset already owned deserves the same scrutiny as one being considered — sunk cost is not a reason to exempt a holding from review.',
    nodes: [
      { question: 'Has the true net yield on the current market value held, improved, or deteriorated since acquisition?', yes: 'Held or improved — continue to liquidity check.', no: 'Deteriorated — quantify by how much before deciding.' },
      { question: 'Is exit liquidity for this asset type still acceptable, or has the sub-market thinned?', yes: 'Holding remains supportable.', no: 'Weigh an earlier exit against a further liquidity decline.' },
      { question: 'Does an alternative use of the same capital clear a materially higher risk-adjusted return?', yes: 'Consider reallocation.', no: 'Holding remains the more defensible choice.' },
    ],
    verdictNote: 'A hold decision should be re-run on this framework periodically, not decided once and left unexamined.',
  },
  {
    slug: 'should-i-exit',
    title: 'Should I Exit?',
    dek: 'Separating a genuine exit signal from a reaction to short-term noise.',
    intro: 'Exit timing decisions are frequently driven by recent headlines rather than the specific asset\'s fundamentals. This framework re-centres the decision on the asset.',
    nodes: [
      { question: 'Has a structural risk specific to this asset changed — developer, brand contract, regulatory status?', yes: 'Weight toward exit.', no: 'Continue to market-level check.' },
      { question: 'Has liquidity in this specific sub-market and unit type deteriorated materially?', yes: 'An earlier exit reduces the risk of being caught in a thinning market.', no: 'Timing pressure is lower; exit can be planned rather than forced.' },
      { question: 'Is the exit being driven by portfolio-level rebalancing needs rather than this asset\'s own performance?', yes: 'Proceed on portfolio grounds, independent of this asset\'s standalone case.', no: 'Base the decision on the asset-specific evidence above.' },
    ],
    verdictNote: 'A sound exit decision names its specific trigger — a diffuse sense that "now feels right" is not one.',
  },
  {
    slug: 'should-i-diversify',
    title: 'Should I Diversify?',
    dek: 'When concentration in a single market, developer, or asset class becomes a risk worth addressing.',
    intro: 'Diversification is a response to a specific, named concentration risk — not a default instruction that applies regardless of the portfolio in front of it.',
    nodes: [
      { question: 'Is more than a defined threshold of the portfolio exposed to a single developer or brand relationship?', yes: 'Concentration risk is elevated — consider diversifying future allocation.', no: 'Developer concentration is not the binding constraint.' },
      { question: 'Are multiple holdings exposed to correlated demand drivers (same city, same tenant profile, same visa programme)?', yes: 'Correlated risk is elevated — new allocation should target a different driver.', no: 'Existing diversification across demand drivers is adequate.' },
      { question: 'Would the next acquisition meaningfully reduce concentration, or simply add a new correlated position?', yes: 'Proceed — the acquisition improves portfolio structure.', no: 'Reconsider the specific asset; diversification is not automatic just because a new market is involved.' },
    ],
    verdictNote: 'Diversification is evaluated at the portfolio level — a single strong asset does not resolve a portfolio-level concentration risk.',
  },
  {
    slug: 'should-i-finance',
    title: 'Should I Finance?',
    dek: 'Whether leverage improves or undermines the position being evaluated.',
    intro: 'Financing changes the risk profile of a position, not just its return. This framework checks whether the specific asset and structure support the leverage being considered.',
    nodes: [
      { question: 'Does the true net yield exceed the all-in cost of the financing being offered?', yes: 'Financing is accretive on a yield basis — continue.', no: 'Financing erodes the return; reconsider or use cash.' },
      { question: 'Does the position remain cash-flow positive, with financing costs included, under the downside scenario?', yes: 'The leveraged position is stress-tested and holds.', no: 'Reduce leverage or reconsider financing entirely.' },
      { question: 'Are the loan terms — rate, term, prepayment conditions — verified rather than indicative?', yes: 'Proceed to formal underwriting.', no: 'Confirm final terms before treating the return calculation as final.' },
    ],
    verdictNote: 'Financing should be evaluated against the True Cost Model and Scenario Planner outputs, never against the unlevered headline yield alone.',
  },
];

export function getDecisionFramework(slug: string) {
  return decisionFrameworks.find((d) => d.slug === slug);
}
