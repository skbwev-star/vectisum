export interface Framework {
  slug: string;
  index: string;
  name: string;
  oneLiner: string;
  purpose: string;
  inputs: string[];
  outputs: string[];
  decisionUse: string;
  example: string;
}

export const frameworks: Framework[] = [
  {
    slug: 'property-snapshot',
    index: '01',
    name: 'Property Snapshot™',
    oneLiner: 'A factual baseline, independent of the sales pack.',
    purpose:
      'Establishes the verified factual record of the asset before any modelling begins — so every later step is checked against evidence, not marketing copy.',
    inputs: ['Listing or off-market particulars', 'Title and registry reference', 'Developer or vendor identity', 'Jurisdiction and asset class'],
    outputs: ['One-page factual record', 'Confirmed vs. unconfirmed fields', 'Registry cross-reference'],
    decisionUse: 'Used as the fixed reference point for every subsequent framework — nothing downstream is allowed to contradict the Snapshot without a flagged exception.',
    example: 'A one-bedroom apartment listed by a broker is reduced to: verified unit size, verified title status, verified developer identity, and a registry cross-reference — before a single yield figure is calculated.',
  },
  {
    slug: 'evidence-matrix',
    index: '02',
    name: 'Evidence Matrix™',
    oneLiner: 'Every material claim, checked against a source.',
    purpose: 'Tests each claim made in the marketing material against a verifiable source, so the review is built on what can be confirmed rather than what was asserted.',
    inputs: ['Marketing claims (yield, comparables, absorption, completion history)', 'Registry and index data', 'Independent market data sources'],
    outputs: ['A claim-by-claim table: Confirmed / Contradicted / Unverifiable', 'A list of claims the review cannot rely on'],
    decisionUse: 'Any claim marked Unverifiable is excluded from the financial model rather than assumed true — this is the mechanism that prevents developer or broker assumptions from silently entering the numbers.',
    example: 'A brochure claim of "8.9% projected yield" is checked against the actual contracted price and a rent comparable matched for unit size — and reclassified as Contradicted where the underlying assumptions do not hold.',
  },
  {
    slug: 'true-cost-model',
    index: '03',
    name: 'True Cost Model™',
    oneLiner: 'The number after friction, not before it.',
    purpose: 'Reconciles gross income down to a decision-grade net figure by applying every real cost of ownership, verified rather than estimated.',
    inputs: ['Gross rent (verified)', 'Vacancy assumption', 'Management and reserve costs', 'Service charge (index-verified)', 'Transaction and transfer costs'],
    outputs: ['Full income reconciliation table', 'True net yield', 'Net income figure used in every later model'],
    decisionUse: 'Replaces the brochure yield as the number the investor actually evaluates the deal against.',
    example: 'A 7.4% brochure yield is reconciled through vacancy, management, reserve, and a verified service charge to a true net yield of 5.6% — the figure that determines whether the return target is met.',
  },
  {
    slug: 'investment-performance-model',
    index: '04',
    name: 'Investment Performance Model™',
    oneLiner: 'The price that clears your target, not theirs.',
    purpose: 'Works backward from the investor\'s stated required return to the offer price that would actually achieve it — independent of the asking price.',
    inputs: ['True net income (from the True Cost Model)', 'Investor\'s target return', 'Financing terms, where applicable'],
    outputs: ['Recommended offer price', 'True net yield at that offer', 'Negotiation range'],
    decisionUse: 'Gives the investor a number to negotiate toward, rather than a percentage discount to react with against an arbitrary asking price.',
    example: 'Against a 1.55M asking price, the model calculates that 1.425M is required to clear the investor\'s target — the number actually taken into negotiation.',
  },
  {
    slug: 'decision-score',
    index: '05',
    name: 'Decision Score™',
    oneLiner: 'One graded verdict.',
    purpose: 'Compresses the full review into a single grade that can be forwarded and acted on without requiring the recipient to read the underlying analysis.',
    inputs: ['True Cost Model output', 'Investment Performance Model output', 'Scenario Planner output', 'Evidence Matrix confidence level'],
    outputs: ['A single grade: A through D', 'Or a verdict: Pass / Conditional Pass / Walk Away'],
    decisionUse: 'The figure a committee, lender, or board actually acts on — every other framework exists to support this one number.',
    example: 'A B+ grade on a three-asset portfolio signals: investable, with a specific, named condition attached (in this case, single-developer concentration) rather than an unqualified approval.',
  },
  {
    slug: 'scenario-planner',
    index: '06',
    name: 'Scenario Planner™',
    oneLiner: 'Base, upside, and downside — modelled together, not separately.',
    purpose: 'Tests whether the position survives a combined downturn, rather than presenting three isolated, independently optimistic forecasts.',
    inputs: ['True Cost Model baseline', 'Rent, vacancy, and cost shock assumptions', 'Simultaneous stress parameters'],
    outputs: ['Base / upside / downside net yield', 'Cash-flow status under each scenario', 'Stressed floor figure'],
    decisionUse: 'Answers the question a brochure never asks: does this still work if several things go wrong at once, not just one.',
    example: 'A 5.6% base-case net yield is stress-tested against a combined rent-down, vacancy-up, service-charge-up scenario, and confirmed to hold at 4.0% — still cash-flow positive.',
  },
  {
    slug: 'decision-dashboard',
    index: '07',
    name: 'Decision Dashboard™',
    oneLiner: 'The executive layer, built for forwarding.',
    purpose: 'Packages the review into a one-page summary designed for a specific institutional audience — a lending committee, an investment board, or a limited partner.',
    inputs: ['Decision Score', 'Key risks (asset-level and portfolio-level)', 'Proposed financing terms, where supplied by a commissioning lender'],
    outputs: ['One-page executive summary', 'Go / No-Go by asset', 'Risk grid'],
    decisionUse: 'The layer most reviews are actually read at — everything above exists so this page can be trusted without an appendix.',
    example: 'A lender commissioning a pre-financing verification supplies proposed loan terms as an input, and receives a Decision Dashboard scoped specifically to collateral risk rather than the buyer\'s general investment thesis.',
  },
];

export function getFramework(slug: string) {
  return frameworks.find((f) => f.slug === slug);
}
