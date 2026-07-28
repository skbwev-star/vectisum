export interface Mistake {
  slug: string;
  num: string;
  title: string;
  dek: string;
  paragraphs: string[];
  keyLessons: string[];
}

export const mistakes: Mistake[] = [
  {
    slug: 'buying-yield-instead-of-cash-flow',
    num: '01',
    title: 'Buying Yield Instead of Cash Flow',
    dek: 'A headline yield and a net yield can describe the same property and support two different decisions.',
    paragraphs: [
      'Gross yield divides advertised rent by asking price. It ignores vacancy, management, reserve allocation, and service charge — the costs that stand between advertised rent and what actually reaches an investor\'s account.',
      'The gap between the two figures is not a rounding error. On the reviews in this library, the difference between quoted gross yield and verified true net yield has run as high as two full percentage points on an otherwise well-located, fairly priced asset.',
      'The fix is mechanical, not judgmental: reconcile every deduction against verified sources before comparing a property\'s return to a target threshold.',
    ],
    keyLessons: [
      'Treat any yield figure without a stated basis as a marketing number, not a decision input.',
      'Ask for the reconciliation, not just the headline percentage.',
      'Compare net-to-net across properties being evaluated against each other — never gross to net.',
    ],
  },
  {
    slug: 'guaranteed-return-illusion',
    num: '02',
    title: 'The Guaranteed Return Illusion',
    dek: 'A "guaranteed" rental return is only as strong as its funding source.',
    paragraphs: [
      'Some guaranteed-return structures are funded from genuine operating income. Others are a rebate mechanism, financed by a premium already built into the purchase price — meaning the buyer is effectively being paid back their own capital and calling it yield.',
      'The distinction is checkable: trace the guarantee back to its funding source. If it resolves to the buyer\'s own deposit rather than a third-party income stream, the "guarantee" has not changed the underlying risk of the asset — it has only changed when the buyer notices.',
      'This pattern recurs most often in secondary markets adjacent to citizenship- or residency-linked investment programmes, where the guarantee period is frequently timed to expire just after the minimum qualifying hold.',
    ],
    keyLessons: [
      'Ask who is funding the guarantee, specifically, before evaluating the return it implies.',
      'Model the post-guarantee yield against comparable non-guaranteed stock — that is the number that matters after the guarantee period ends.',
      'Treat a guarantee timed to a visa or citizenship minimum hold period as a flag, not a coincidence.',
    ],
  },
  {
    slug: 'service-charge-trap',
    num: '03',
    title: 'The Service Charge Trap',
    dek: 'The recurring cost most likely to be quoted at a launch-year estimate rather than a steady-state figure.',
    paragraphs: [
      'Service charges are frequently quoted by a developer at launch, before the building has an operating history. Reserve fund contributions, insurance, and facilities-management costs typically rise once a building is fully handed over and occupied — the launch-year estimate systematically understates the steady-state cost.',
      'Because service charge is subtracted directly from net income, even a modest understatement compounds into a meaningful overstatement of achievable yield.',
    ],
    keyLessons: [
      'Verify the quoted service charge against a published index or comparable buildings\' actual disclosed charges, not the developer\'s estimate.',
      'Model service charge growth into any multi-year holding projection, not just the year-one figure.',
      'Treat an unusually low service charge quote on a new building as a number to verify, not a number to bank.',
    ],
  },
  {
    slug: 'exit-liquidity-risk',
    num: '04',
    title: 'Exit Liquidity Risk',
    dek: 'A strong entry yield is a partial answer — the exit is where a position is actually tested.',
    paragraphs: [
      'Days on market, the ratio of achieved sale price to list price, and transaction volume in the specific sub-market and unit type are the inputs that determine how readily an asset can actually be sold — not the general reputation of the wider city market.',
      'A city can be described as liquid in aggregate while a specific building, floor band, or unit type within it carries materially worse liquidity than the headline figures suggest.',
    ],
    keyLessons: [
      'Grade liquidity at the level being purchased — the specific building and unit type — not the city level.',
      'Weigh yield and exit liquidity together; a high yield in an illiquid segment is a different risk than the same yield in a deep market.',
      'Ask for closed-transaction days-on-market and price-achieved data, not a broker\'s general characterisation of the market.',
    ],
  },
  {
    slug: 'branded-residence-premium',
    num: '05',
    title: 'The Branded Residence Premium',
    dek: 'A recognisable brand attached to a tower carries a real, measurable cost.',
    paragraphs: [
      'Branded residential product typically sells at a premium over comparable non-branded stock in the same micro-location. That premium is defensible only when weighed against branded-specific resale and rental evidence — comparing it to the market average dilutes the comparison with non-branded stock and understates the true premium being paid.',
      'Where the brand relationship is a contract rather than developer ownership, its duration matters. A brand agreement that lapses mid-hold changes the asset\'s positioning without the buyer necessarily having priced that risk in.',
    ],
    keyLessons: [
      'Benchmark branded product only against other branded product, not the wider market average.',
      'Check whether the brand relationship is owned or contracted, and for how long.',
      'Treat the brand premium as a distinct line item, priced and justified on its own, not bundled into "location."',
    ],
  },
  {
    slug: 'off-plan-pricing-gap',
    num: '06',
    title: 'The Off-Plan Pricing Gap',
    dek: 'The gap between the price paid off-plan and the verified value at handover is the number that matters.',
    paragraphs: [
      'Off-plan yield projections are frequently calculated against the launch price, while the buyer\'s actual contracted price reflects one or more escalations that have occurred since launch. The marketed yield and the buyer\'s real yield can diverge meaningfully as a result.',
      'Separately, developer completion history — on-time delivery rate across prior projects, not the marketed timeline for the current one — is a materially better predictor of handover risk than the sales team\'s assurances.',
    ],
    keyLessons: [
      'Re-base any off-plan yield claim to the actual contracted price, not the launch price.',
      'Check the developer\'s delivery record on their two or three most recent prior projects specifically.',
      'Model a handover-slippage scenario into the financing plan before committing to a payment schedule.',
    ],
  },
  {
    slug: 'developer-marketing-bias',
    num: '07',
    title: 'Developer Marketing Bias',
    dek: 'Absorption figures, comparable data, and completion timelines quoted by a developer describe their interest, not a neutral fact.',
    paragraphs: [
      'A developer\'s sales office is not a disinterested source on absorption rates, comparable pricing, or expected completion — all of these are figures the developer has a direct financial interest in presenting favourably.',
      'This is not a claim of dishonesty; it is a structural observation about incentives. The correction is to source the same figures independently wherever possible, and to flag them explicitly as unverified where it is not.',
    ],
    keyLessons: [
      'Treat any figure sourced solely from the seller\'s own marketing as provisional until independently checked.',
      'Distinguish "this cannot be verified" from "this is false" — both matter, but they call for different responses.',
      'Weight independently sourced comparables above developer-supplied ones in any pricing decision.',
    ],
  },
  {
    slug: 'confirmation-bias',
    num: '08',
    title: 'Confirmation Bias',
    dek: 'The cognitive pattern that makes an otherwise capable investor accept a weak deal.',
    paragraphs: [
      'Anchoring on the first number seen, sunk-cost attachment after a long search, and a preference for evidence that confirms an already-favoured property affect experienced investors as readily as first-time buyers.',
      'A structurally independent second opinion — one with no stake in whether the transaction closes — is one of the few reliable checks against this pattern, because it does not share the buyer\'s emotional investment in the outcome.',
    ],
    keyLessons: [
      'Seek the disconfirming evidence deliberately, not just the confirming evidence.',
      'Separate the search-effort sunk cost from the merits of the specific property in front of you.',
      'Commission review before an emotional commitment to a specific unit has formed, where possible — not after.',
    ],
  },
];

export function getMistake(slug: string) {
  return mistakes.find((m) => m.slug === slug);
}
