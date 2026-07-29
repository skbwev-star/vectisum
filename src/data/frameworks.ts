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

// The Lana Method — the real six-layer forensic risk audit run on every
// engagement. Verify. Stress-test. Replace. Nothing here is a scoring
// formula dressed up as insight — it's the actual sequence used on real
// portfolios, down to the formula in Layer 2.
export const frameworks: Framework[] = [
  {
    slug: 'market-screen',
    index: '01',
    name: '10-Area Market Screen',
    oneLiner: 'Every major corridor, screened the same way — not just the developer\'s shortlist.',
    purpose:
      'Before any single asset is considered, the entire city is screened area by area against one consistent framework — price range, gross and net yield, vacancy, and liquidity — so the shortlist is built from a full market view, not from whichever three buildings a broker happens to be selling.',
    inputs: ['Live listing data across every major corridor', 'Independent index data for areas without live comparables', 'The client\'s stated budget and strategy (income, capital growth, or both)'],
    outputs: ['A full area-by-area table: price range, gross yield, net yield estimate, vacancy, liquidity', 'A verdict per area: Approved, Alternative, or Rejected, with the reason stated'],
    decisionUse: 'Sets the shortlist before any single unit is evaluated — an area rejected here is never revisited later just because one attractive listing turns up in it.',
    example: 'A ten-area Dubai screen rejects DIFC, Downtown, and Palm Jumeirah on yield grounds alone (net yield 3.0–5.0% against a retirement-income threshold), while flagging Business Bay and JVC as strong alternatives outside the primary shortlist.',
  },
  {
    slug: 'true-net-yield-model',
    index: '02',
    name: 'True Net Yield Model',
    oneLiner: 'One formula, fully shown — not a black box.',
    purpose:
      'Strips gross yield down to the number that actually reaches the client\'s account, using a fixed, disclosed formula rather than a proprietary black-box score: Net yield = ((Annual rent × Net rent factor) − Annual service charge) ÷ Purchase price, where Net rent factor = 1 − vacancy rate − management fee − maintenance reserve.',
    inputs: ['Verified annual rent', 'Vacancy, management, and maintenance reserve assumptions', 'Service charge, sourced from the relevant official index (e.g. the DLD Service Charge Index) and verified per exact unit'],
    outputs: ['Net rent factor (e.g. 0.91x for 2% vacancy + 5% management + 2% reserve)', 'True net yield per asset, formula fully shown'],
    decisionUse: 'This is the number compared against the client\'s required return — never the gross yield the property was marketed on.',
    example: 'A unit quoted at 7.4% gross yield is run through the model — vacancy 2%, management 5%, reserve 2%, service charge verified via the DLD index — to a true net yield of 5.6%.',
  },
  {
    slug: 'live-comparable-analysis',
    index: '03',
    name: 'Live Comparable Analysis',
    oneLiner: 'The specific unit, benchmarked against what else is actually for sale.',
    purpose: 'Once an area clears the Market Screen, the specific recommended unit is benchmarked against four to six live comparable listings in the same building or immediate area — ask price, rent, gross and net yield, and service charge per square foot — so a buyer never pays a premium simply because they didn\'t see the alternative next door.',
    inputs: ['Live listings at the point of engagement, sourced from the primary listing portal for the market', 'Unit-level specifications (size, floor, view, condition)'],
    outputs: ['A ranked comparable table with the recommended unit highlighted', 'Overpriced alternatives flagged explicitly'],
    decisionUse: 'Confirms the recommended unit is the strongest option available at that price point on the day of engagement — not just an acceptable one.',
    example: 'A recommended one-bedroom unit in Park Heights 2 is benchmarked against three comparable live listings in the same building; two are flagged as overpriced relative to net yield, one as a genuine alternative.',
  },
  {
    slug: 'stress-test',
    index: '04',
    name: 'Stress Test',
    oneLiner: 'Every asset must survive a downturn, not just perform in an upturn.',
    purpose: 'Every shortlisted asset is subjected to a simultaneous adverse scenario — rent down 10%, vacancy up 10 percentage points, service charges up 20% — applied together, before any pass verdict is issued.',
    inputs: ['Base-case net income (from the True Net Yield Model)', 'Combined stress parameters: rent −10%, vacancy +10pp, service charge +20%'],
    outputs: ['Stressed net income and stressed net yield per asset', 'A pass/fail flag: does the asset remain cash-flow positive under stress'],
    decisionUse: 'An asset that goes cash-flow negative under this combined scenario is flagged as high-risk regardless of how attractive its base-case yield looks.',
    example: 'A base-case 5.6% net yield asset is confirmed to hold at 4.0% under the combined stress scenario — still cash-flow positive — while a lower-base-rent townhouse in the same portfolio compresses further and is flagged for closer monitoring.',
  },
  {
    slug: 'key-risk-register',
    index: '05',
    name: 'Key Risk Register',
    oneLiner: 'Every risk named explicitly — asset-level and portfolio-level.',
    purpose: 'Names the specific risks attached to each asset and to the portfolio as a whole — supply overhang, developer concentration, service-charge creep, re-letting friction — rather than folding them into a single averaged risk rating.',
    inputs: ['Findings from the Market Screen, Stress Test, and Comparable Analysis', 'Developer and community-level concentration across the full shortlist'],
    outputs: ['An asset-level risk list for each shortlisted property', 'A separate portfolio-level risk list (concentration, regulatory, market-timing)'],
    decisionUse: 'A risk named here is disclosed to the client explicitly, even when it does not change the underlying verdict — the point is transparency, not a lower grade.',
    example: 'A three-asset portfolio review names single-developer concentration and correlated vacancy risk across two assets in the same community as standing portfolio-level risks, separate from any individual asset\'s own verdict.',
  },
  {
    slug: 'acquisition-sequence',
    index: '06',
    name: 'Acquisition Sequence',
    oneLiner: 'A specific action plan — which asset first, at what price, and what to verify before signing.',
    purpose: 'Converts the review into an ordered action plan: which asset to pursue first, the target price, and the specific items to verify at the land registry or equivalent authority before exchange of contracts — the review\'s output is a sequence to execute, not just a set of findings to read.',
    inputs: ['The ranked, stress-tested shortlist', 'The client\'s available budget and timing constraints'],
    outputs: ['A staged acquisition order (immediate / weeks 4–8 / weeks 8–16 / optional)', 'A pre-exchange verification checklist specific to each asset'],
    decisionUse: 'This is what the client actually acts on — a sequence with a first move, not an abstract recommendation to "consider" several options at once.',
    example: 'A four-asset shortlist is sequenced: priority buy immediate, diversifier asset in weeks four to eight, long-hold townhouse in weeks eight to sixteen, and an optional stretch asset only if budget extends.',
  },
];

export function getFramework(slug: string) {
  return frameworks.find((f) => f.slug === slug);
}
