export interface Deal {
  slug: string;
  title: string;
  market: string;
  category: string;
  grade: string;
  gradeState: 'pass' | 'watch' | 'fail';
  summary: string;
  published: string;
  ledger: { label: string; value: string; delta?: string; state?: 'pass' | 'watch' | 'fail' }[];
  body: { heading: string; paragraphs: string[]; list?: string[] }[];
}

export const deals: Deal[] = [
  {
    slug: 'the-off-plan-tower-that-sold-the-wrong-number',
    title: 'The Off-Plan Tower That Sold the Wrong Number',
    market: 'Dubai · Off-Plan Residential',
    category: 'Off-Plan Valuation Gap',
    grade: 'C',
    gradeState: 'watch',
    summary:
      'A developer brochure quoted projected yield on the wrong denominator. The error was small on paper and material on capital.',
    published: '2026-02-11',
    ledger: [
      { label: 'Brochure Yield', value: '8.9%' },
      { label: 'Verified Net Yield', value: '6.1%', state: 'watch' },
      { label: 'Handover Slippage', value: '+14 mo', state: 'fail' },
      { label: 'Verdict Grade', value: 'C', state: 'watch' },
    ],
    body: [
      {
        heading: 'The pitch',
        paragraphs: [
          'The unit was marketed on a post-handover payment plan with a headline yield calculated against the pre-launch price, not the price the buyer was actually being asked to pay after two rounds of price escalation.',
          'On the brochure, this looked like an 8.9% return. The underlying arithmetic used a rent figure from a comparable building that had, in fact, larger units with a materially different tenant profile.',
        ],
      },
      {
        heading: 'What the review found',
        paragraphs: [
          'Re-basing the yield against the actual contracted price and a rent figure drawn from closed transactions of matching unit size brought the projected net yield down to 6.1% — still investable, but a different decision than the one being marketed.',
          'Separately, the review flagged that the same developer\'s two prior towers in the same corridor had handed over between eleven and sixteen months late, a pattern not disclosed in the sales pack and directly relevant to the buyer\'s financing timeline.',
        ],
        list: [
          'Yield re-based to actual contracted price, not launch price',
          'Rent comparable re-selected for matching unit size and floor band',
          'Handover history checked across the developer\'s two prior deliveries in the corridor',
          'Payment plan tested against a 12–16 month slippage scenario',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'The client proceeded, but renegotiated the payment schedule to reduce exposure during the likely slippage window, and adjusted their own return expectations to the verified figure rather than the brochure figure before committing capital.',
        ],
      },
    ],
  },
  {
    slug: 'the-guaranteed-return-that-carried-a-condition',
    title: 'The Guaranteed Return That Carried a Condition',
    market: 'Northern Cyprus · Branded Residence',
    category: 'Guaranteed Return Scheme',
    grade: 'D',
    gradeState: 'fail',
    summary:
      'A three-year "guaranteed" rental return was priced into the sale — and structurally funded by the buyer\'s own deposit.',
    published: '2026-01-22',
    ledger: [
      { label: 'Advertised Return', value: '10% p.a.' },
      { label: 'Funding Source', value: 'Buyer Deposit', state: 'fail' },
      { label: 'Post-Guarantee Yield', value: '3.4%', state: 'fail' },
      { label: 'Verdict Grade', value: 'D', state: 'fail' },
    ],
    body: [
      {
        heading: 'The pitch',
        paragraphs: [
          'A 10% guaranteed rental return for three years was presented as a risk-free feature of the purchase, backed by the developer\'s management company.',
        ],
      },
      {
        heading: 'What the review found',
        paragraphs: [
          'The guarantee was not funded from operating income. It was structured as a rebate mechanism, financed by a premium already built into the purchase price — meaning the buyer was, in effect, being paid back their own capital and calling it yield.',
          'Once the three-year guarantee period was modelled against the building\'s actual achievable rents from comparable non-guaranteed units nearby, the underlying post-guarantee yield was 3.4% — well below the return being marketed, and below the review\'s minimum threshold for the risk profile of the jurisdiction.',
        ],
        list: [
          'Guarantee funding mechanism traced to purchase price premium, not rental operations',
          'Post-guarantee achievable rent benchmarked against non-guaranteed comparable stock',
          'Management company\'s obligation reviewed for enforceability and counterparty risk',
          'Exit liquidity assessed independent of the guarantee period',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Verdict: Walk Away. The client declined the purchase. This is the most common single pattern this desk sees across guaranteed-return marketing in secondary CBI-adjacent markets — the guarantee is frequently a repackaging of the buyer\'s own money, not third-party income.',
        ],
      },
    ],
  },
  {
    slug: 'the-service-charge-that-erased-the-yield',
    title: 'The Service Charge That Erased the Yield',
    market: 'Dubai Hills Estate · Apartment',
    category: 'Service Charge Trap',
    grade: 'B-',
    gradeState: 'watch',
    summary:
      'A well-located, fairly priced unit still lost nearly two full points of yield once the true service charge load was reconciled.',
    published: '2025-12-04',
    ledger: [
      { label: 'Gross Yield (Quoted)', value: '7.4%' },
      { label: 'Service Charge', value: 'AED 25.1/sqft', state: 'watch' },
      { label: 'True Net Yield', value: '5.6%', state: 'watch' },
      { label: 'Stressed Net Yield', value: '4.0%', state: 'watch' },
    ],
    body: [
      {
        heading: 'The pitch',
        paragraphs: [
          'A one-bedroom apartment in an established Dubai Hills tower, quoted at 7.4% gross yield against asking rent — a figure calculated before vacancy, management, reserve allocation, or service charge.',
        ],
      },
      {
        heading: 'What the review found',
        paragraphs: [
          'Full income reconciliation — vacancy at 2%, management at 5%, reserve at 2% — brought effective collected income to 91% of gross rent before service charge was even applied.',
          'The building\'s service charge, verified against the relevant service-charge index rather than the developer\'s own estimate, ran to just over AED 25 per square foot annually. Applied to the unit\'s full area, this alone reduced net yield by close to 1.8 percentage points relative to the quoted figure.',
        ],
        list: [
          'Gross rent adjusted for vacancy, management, and reserve to reach effective collected income',
          'Service charge verified against the published index rather than developer estimate',
          'True net yield calculated at 5.6%, stress-tested to 4.0% under a combined rent-down, vacancy-up, charge-up scenario',
          'Offer price recommended below ask to restore the buyer\'s target net yield',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Verdict: Conditional Pass. The asset remained investable at a renegotiated price roughly 8% below ask, which restored the net yield to the client\'s stated threshold and kept the position cash-flow positive even under the downside scenario.',
        ],
      },
    ],
  },
  {
    slug: 'the-lease-that-looked-institutional-and-wasnt',
    title: 'The Lease That Looked Institutional — and Wasn\'t',
    market: 'Nashville & Austin · Multifamily',
    category: 'Exit Liquidity & Lease Risk',
    grade: 'B',
    gradeState: 'pass',
    summary:
      'A "stabilized" multifamily asset carried lease terms that would not survive a change of ownership on the terms assumed in underwriting.',
    published: '2025-11-19',
    ledger: [
      { label: 'Occupancy (Reported)', value: '96%' },
      { label: 'Concession-Adjusted', value: '89%', state: 'watch' },
      { label: 'Lease Rollover Risk', value: 'Elevated', state: 'watch' },
      { label: 'Verdict Grade', value: 'B', state: 'pass' },
    ],
    body: [
      {
        heading: 'The pitch',
        paragraphs: [
          'A 96%-occupied multifamily property in a growth submarket, marketed as stabilized and ready for a straightforward refinance-and-hold strategy.',
        ],
      },
      {
        heading: 'What the review found',
        paragraphs: [
          'Reported occupancy did not net out active rent concessions — roughly two months free on a meaningful share of units signed in the prior two quarters. Adjusted for concessions, effective occupancy was closer to 89%.',
          'A cluster of leases were found to expire within a 90-day window six months out, creating rollover risk that was not visible in the trailing-twelve-month income statement used to market the deal.',
        ],
        list: [
          'Rent roll cross-checked against concession schedule, not just signed rent',
          'Lease expiry dates mapped to identify rollover concentration',
          'Comparable rent growth in the submarket checked against underwritten rent bumps',
          'Refinance assumptions stress-tested against a slower lease-up timeline',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'Verdict: Pass, with conditions attached to the underwriting model rather than the price. The buyer proceeded with a revised reserve for the rollover window and adjusted refinance timing by two quarters.',
        ],
      },
    ],
  },
];

export function getDeal(slug: string) {
  return deals.find((d) => d.slug === slug);
}
