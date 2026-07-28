export interface IntelligenceNote {
  slug: string;
  category: string;
  title: string;
  dek: string;
  published: string;
  paragraphs: string[];
}

export const intelligenceNotes: IntelligenceNote[] = [
  {
    slug: 'off-plan-payment-plans-lengthening',
    category: 'Transaction Trends',
    title: 'Off-Plan Payment Plans Are Lengthening',
    dek: 'Post-handover payment structures are extending across several off-plan markets this desk reviews regularly.',
    published: '2026-06-02',
    paragraphs: [
      'Across recent reviews, post-handover payment plans have extended further past completion than in comparable deals reviewed a year earlier. A longer plan reduces upfront capital requirements but extends the buyer\'s exposure to the developer\'s ongoing financial health past the point of handover.',
      'This is a structural shift worth pricing explicitly, not treating as a neutral financing convenience: the longer the post-handover tail, the more the buyer\'s position resembles unsecured developer credit exposure alongside the real estate position itself.',
    ],
  },
  {
    slug: 'service-charge-indices-diverging-from-quotes',
    category: 'Data Observations',
    title: 'Service Charge Index Figures Increasingly Diverge From Developer Quotes',
    dek: 'A widening gap between launch-year service charge estimates and published index figures on handover.',
    published: '2026-05-14',
    paragraphs: [
      'Across a sample of recent reviews, the gap between a developer\'s launch-year service charge estimate and the eventual index-published figure at handover has widened. This is consistent with rising insurance and facilities-management costs across several jurisdictions covered by this desk.',
      'The practical implication: a service charge quote at launch should be treated as a floor, not a forecast, when reconciling long-hold yield projections.',
    ],
  },
  {
    slug: 'guarantee-structures-shortening',
    category: 'Developer Behaviour',
    title: 'Guaranteed-Return Periods Are Shortening, Not Disappearing',
    dek: 'A shift from three-year to two-year guarantee structures observed across recent branded and off-plan reviews.',
    published: '2026-04-22',
    paragraphs: [
      'Guaranteed-return marketing has not disappeared, but the guarantee period offered has shortened in several recent reviews — a pattern consistent with developers managing the cost of funding these structures as financing conditions tighten.',
      'A shorter guarantee period means the post-guarantee yield becomes relevant to the buyer\'s return sooner, which increases the importance of verifying achievable rent on non-guaranteed comparable stock before, not after, purchase.',
    ],
  },
  {
    slug: 'family-office-second-opinion-demand',
    category: 'Institutional Behaviour',
    title: 'Family Offices Are Requesting Second Opinions Earlier in the Process',
    dek: 'A shift from post-offer verification to pre-shortlist screening among family office clients.',
    published: '2026-03-18',
    paragraphs: [
      'A growing share of family office engagements now request independent review at the shortlist stage, before an offer is made, rather than as a final check before closing. This moves the independent evidence earlier into the decision, when it can still change which asset is pursued rather than only the price paid for one already selected.',
    ],
  },
  {
    slug: 'exit-liquidity-bifurcation',
    category: 'Market Updates',
    title: 'Exit Liquidity Is Bifurcating Within, Not Just Between, Markets',
    dek: 'City-level liquidity data is increasingly a poor proxy for liquidity at the building and unit-type level.',
    published: '2026-02-27',
    paragraphs: [
      'Recent comparable-evidence work has shown a widening gap between days-on-market at the building level and days-on-market at the city level within several markets this desk covers. A city described in aggregate as liquid can still contain specific towers or unit types trading materially more slowly.',
      'This reinforces a standing methodology point: exit liquidity is graded at the level being purchased, not the level being marketed.',
    ],
  },
  {
    slug: 'residency-linked-eligibility-amendments',
    category: 'Policy Changes',
    title: 'Residency-Linked Property Eligibility Rules Continue to Be Amended Mid-Programme',
    dek: 'A reminder that programme rules, not just property fundamentals, carry policy risk.',
    published: '2026-01-30',
    paragraphs: [
      'Several residency- and citizenship-linked property investment programmes reviewed by this desk have amended eligibility criteria or minimum holding periods after an investor\'s initial commitment. This is a policy risk, distinct from the underlying property\'s market risk, and is evaluated separately in any review involving a residency-linked purchase.',
    ],
  },
];

export function getIntelligenceNote(slug: string) {
  return intelligenceNotes.find((n) => n.slug === slug);
}
