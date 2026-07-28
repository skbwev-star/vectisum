export interface CaseStudy {
  slug: string;
  title: string;
  market: string;
  assetType: string;
  grade: string;
  gradeState: 'pass' | 'watch' | 'fail';
  overview: string;
  thesis: string;
  risks: { label: string; detail: string }[];
  evidence: { label: string; value: string }[];
  decisionFramework: string;
  lessons: string[];
  verdict: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'three-asset-retirement-income-portfolio',
    title: 'A Three-Asset Retirement Income Portfolio',
    market: 'Dubai · Two Sub-Markets',
    assetType: 'Residential — Apartments & Townhouse',
    grade: 'B+',
    gradeState: 'pass',
    overview:
      'A cash-purchase, long-hold portfolio of three residential assets across two established sub-markets, reviewed for a retirement-income allocation ahead of a family office investment committee decision.',
    thesis:
      'Target a blended net yield in the low-to-mid single digits by concentrating in the strongest demand corridors of a single, established developer\'s stock, weighted toward the more liquid of the two sub-markets.',
    risks: [
      { label: 'Single-developer concentration', detail: 'All three assets share one developer, concentrating completion, service-charge, and brand-management risk in a single counterparty.' },
      { label: 'Sub-market correlation', detail: 'Two of the three assets sit in the same community, creating correlated vacancy exposure in a local supply surge.' },
      { label: 'Lower-liquidity third asset', detail: 'The townhouse component trades in a thinner, slower sub-market than the two apartments.' },
    ],
    evidence: [
      { label: 'Blended true net yield (base)', value: '~5.2%' },
      { label: 'Blended net yield (stressed)', value: '~3.5%' },
      { label: 'Core sub-market days on market', value: '22–35 days' },
      { label: 'Core sub-market list-to-sale ratio', value: '95–98%' },
    ],
    decisionFramework: 'Should I Buy? — all four gates (yield, comparable pricing, downside cash flow, exit liquidity) cleared for two of three assets; the third cleared conditionally, with a pricing adjustment.',
    lessons: [
      'A portfolio can be individually strong on each asset and still carry a named portfolio-level concentration risk worth disclosing explicitly.',
      'Blended yield figures should be accompanied by the range across individual assets, not presented as a single uniform number.',
      'Where one asset in a multi-asset review is materially weaker, a conditional verdict on that asset alone is more useful than an average that obscures it.',
    ],
    verdict: 'Approved, with a named portfolio-level concentration risk flagged for ongoing monitoring rather than treated as a reason to decline.',
  },
  {
    slug: 'off-plan-tower-payment-plan-renegotiation',
    title: 'An Off-Plan Tower and a Renegotiated Payment Plan',
    market: 'Dubai · Off-Plan Residential',
    assetType: 'Residential — Off-Plan Apartment',
    grade: 'C',
    gradeState: 'watch',
    overview:
      'A single off-plan unit reviewed pre-signature, where the marketed yield was calculated against a pre-escalation launch price rather than the buyer\'s actual contracted price.',
    thesis:
      'Secure early-stage pricing on a unit in a corridor with strong forecast tenant demand, ahead of anticipated infrastructure completion nearby.',
    risks: [
      { label: 'Yield mis-basis', detail: 'Marketed yield used the launch price as its denominator, not the price actually being contracted after two escalations.' },
      { label: 'Handover slippage history', detail: 'The same developer\'s two prior towers in the corridor delivered eleven to sixteen months late.' },
      { label: 'Payment plan exposure window', detail: 'The buyer\'s exposure to developer risk was concentrated in the likely slippage window under the original payment schedule.' },
    ],
    evidence: [
      { label: 'Brochure yield', value: '8.9%' },
      { label: 'Verified yield (re-based)', value: '6.1%' },
      { label: 'Developer handover slippage (prior two projects)', value: '+11 to +16 months' },
    ],
    decisionFramework: 'Should I Renegotiate? — evidence supported a price-adjacent renegotiation of payment timing rather than a decline, since fundamentals cleared once the yield was correctly re-based.',
    lessons: [
      'A yield figure\'s denominator matters as much as its numerator — always confirm which price a projected yield is calculated against.',
      'A developer\'s marketed timeline is a plan, not a track record; the track record is the prior projects.',
      'Renegotiating structure (payment timing) can resolve a risk that renegotiating price alone would not.',
    ],
    verdict: 'Conditional Pass — proceeded after the payment schedule was renegotiated to reduce exposure during the likely slippage window.',
  },
  {
    slug: 'lender-side-collateral-verification',
    title: 'A Lender-Side Collateral Verification',
    market: 'United States · Multifamily',
    assetType: 'Multifamily — Refinance Collateral',
    grade: 'B',
    gradeState: 'pass',
    overview:
      'A pre-financing verification commissioned directly by a private lender to test the borrower\'s underwriting on a multifamily refinance, using proposed loan terms supplied as an input.',
    thesis:
      'From the lender\'s side: confirm that the borrower\'s reported occupancy and income figures support the loan-to-value and debt-service coverage being requested, independent of the borrower\'s own underwriting package.',
    risks: [
      { label: 'Concession-adjusted occupancy gap', detail: 'Reported occupancy did not net out active rent concessions on a meaningful share of recently signed units.' },
      { label: 'Lease rollover concentration', detail: 'A cluster of leases were found to expire within a 90-day window, a rollover concentration not visible in the trailing-twelve-month income statement.' },
    ],
    evidence: [
      { label: 'Reported occupancy', value: '96%' },
      { label: 'Concession-adjusted occupancy', value: '89%' },
      { label: 'Lease rollover concentration window', value: '90 days, 6 months out' },
    ],
    decisionFramework: 'Should I Finance? — evaluated from the lender\'s side: financing proceeded, with the reserve and coverage terms adjusted to reflect concession-adjusted income rather than reported occupancy.',
    lessons: [
      'Reported occupancy and economic occupancy are different figures, and the gap between them is the more decision-relevant one for a lender.',
      'A rent roll should be checked for lease-expiry concentration, not only for current occupancy, before a refinance is priced.',
      'A lender-commissioned review is scoped to collateral risk specifically — a narrower, more targeted output than a buy-side investment review.',
    ],
    verdict: 'Approved for financing, with revised reserve requirements and a coverage ratio calculated against concession-adjusted income.',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
