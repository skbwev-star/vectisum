export interface KnowledgeCategory {
  slug: string;
  title: string;
  dek: string;
  sections: { heading: string; paragraphs: string[] }[];
  related?: string[];
}

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    slug: 'investment-fundamentals',
    title: 'Investment Fundamentals',
    dek: 'The distinction between a property and a property investment, and why the two are evaluated differently.',
    sections: [
      { heading: 'Property vs. investment', paragraphs: [
        'A property is a physical asset. An investment is a claim on a future stream of cash flow plus an eventual exit value, discounted for risk. Most retail property decisions are made on the first framing and priced on the second — which is where the gap between a "nice apartment" and a "good investment" opens up.',
        'Four variables determine whether an acquisition clears an investment bar: verified net income, the price paid relative to comparable evidence, the cost of exit, and the range of outcomes under stress. Everything in this library maps back to one of those four.',
      ]},
      { heading: 'Why brochures optimise for the wrong variable', paragraphs: [
        'Sales material is built to answer "is this a nice place." An investment review is built to answer "does this clear a return threshold after every real cost is accounted for." The two documents can describe the same unit and reach different conclusions.',
      ]},
    ],
  },
  {
    slug: 'cross-border-investing',
    title: 'Cross-Border Investing',
    dek: 'What changes — and what does not — when the asset, the buyer, and the currency sit in three different countries.',
    sections: [
      { heading: 'The jurisdiction is not the deal', paragraphs: [
        'Choosing a country is a strategy decision: tax treatment, legal structure, residency implications, currency exposure. Choosing a specific property within that country is a selection decision, made against comparable evidence. Conflating the two is the single most common failure mode in cross-border acquisitions — a sound jurisdiction choice does not make every asset within it a sound purchase.',
      ]},
      { heading: 'Currency and repatriation', paragraphs: [
        'A yield quoted in the local currency is not the return the investor ultimately receives. Repatriation costs, currency conversion spreads, and the real-terms effect of inflation differentials between the source and destination currency all sit between the quoted number and the number that lands in the investor\'s home account.',
      ]},
    ],
  },
  {
    slug: 'dubai-market',
    title: 'Dubai Market',
    dek: 'Structural features of the Dubai residential and off-plan market that a comparable evidence review has to account for.',
    sections: [
      { heading: 'Off-plan concentration', paragraphs: [
        'A large share of transaction volume in Dubai runs through off-plan and payment-plan structures, which means listing-price and launch-price data diverge more than in resale-dominated markets. Yield claims tied to launch price rather than the buyer\'s actual contracted price are common enough to be a standing checkpoint in every review.',
      ]},
      { heading: 'Service charge variance', paragraphs: [
        'Service charge per square foot varies materially by building and by developer, and is one of the largest single deductions between gross and net yield in this market. It is checked against the relevant published index rather than the developer\'s own quoted estimate.',
      ]},
    ],
  },
  {
    slug: 'branded-residences',
    title: 'Branded Residences',
    dek: 'What a hospitality or luxury brand attached to a residential tower actually buys the purchaser — and what it costs.',
    sections: [
      { heading: 'The premium is real and measurable', paragraphs: [
        'Branded product typically sells at a premium over comparable non-branded stock in the same micro-location. That premium should be weighed against branded-specific resale and rental evidence — not against the market average, which is diluted by non-branded comparables and will understate the true premium being paid.',
      ]},
      { heading: 'Brand risk is a real estate risk', paragraphs: [
        'Where the brand contract, not the developer, underpins the premium, its duration and renewal terms are relevant to a long hold. A brand agreement that expires mid-hold period is a fact about the asset, not a footnote.',
      ]},
    ],
  },
  {
    slug: 'golden-visa',
    title: 'Golden Visa',
    dek: 'Separating the migration decision from the investment decision when a purchase is tied to residency eligibility.',
    sections: [
      { heading: 'Two decisions, one transaction', paragraphs: [
        'A residency-linked purchase is frequently underwritten once, for two different objectives: qualifying for a visa programme, and generating an investment return. Where a property is priced at a premium specifically because it qualifies, the visa value and the real estate value should be quantified separately so the buyer knows what each is actually costing.',
      ]},
      { heading: 'Minimum-hold and eligibility risk', paragraphs: [
        'Programme rules change. A minimum holding period tied to a visa can outlast the investor\'s ideal exit timeline, and eligibility criteria have been amended retroactively in more than one jurisdiction. This is a policy risk, evaluated separately from the property\'s market risk.',
      ]},
    ],
  },
  {
    slug: 'off-plan-property',
    title: 'Off-Plan Property',
    dek: 'The specific risks introduced by buying before construction is complete, and how they are checked.',
    sections: [
      { heading: 'Completion and handover history', paragraphs: [
        'A developer\'s track record on prior deliveries — on-time completion rate, specification consistency, and post-handover service — is checked against their actual delivery history, not their marketed timeline for the current project.',
      ]},
      { heading: 'Valuation gap at handover', paragraphs: [
        'The gap between the price paid off-plan and the verified value of the completed, comparable asset at handover is the single number that determines whether an off-plan purchase created or destroyed value before a single rental payment is collected.',
      ]},
    ],
  },
  {
    slug: 'rental-yield',
    title: 'Rental Yield',
    dek: 'Why "yield" is not one number, and which version of it belongs in an investment decision.',
    sections: [
      { heading: 'Gross, net, and true net', paragraphs: [
        'Gross yield divides advertised rent by asking price. Net yield deducts operating costs. True net yield — the figure used in a Vectisum review — additionally reconciles vacancy against realistic occupancy, verifies the rent figure against closed comparable evidence rather than an asking-rent estimate, and applies the actual service charge rather than a developer projection.',
      ]},
      { heading: 'Yield alone is an incomplete answer', paragraphs: [
        'A high true net yield in an illiquid, thinly-traded sub-market is a different risk profile than the same yield in a deep, liquid one. Yield and exit liquidity are read together, not separately.',
      ]},
    ],
  },
  {
    slug: 'exit-liquidity',
    title: 'Exit Liquidity',
    dek: 'How readily an asset can actually be sold — and why this matters as much as the entry price.',
    sections: [
      { heading: 'What the review measures', paragraphs: [
        'Average days on market, the ratio of achieved sale price to original list price, and transaction volume in the specific sub-market and asset class are the three inputs used to grade exit liquidity, rather than relying on the general reputation of the wider city or country market.',
      ]},
      { heading: 'Liquidity is asset-specific, not market-wide', paragraphs: [
        'A city-wide market can be described as liquid while a specific unit type, floor band, or building carries materially worse liquidity than the headline figures suggest. The grading is applied at the level the investor is actually buying, not at the level being marketed.',
      ]},
    ],
  },
  {
    slug: 'service-charges',
    title: 'Service Charges',
    dek: 'The recurring cost most likely to be understated at the point of sale, and how it is verified.',
    sections: [
      { heading: 'Why this figure is easy to misquote', paragraphs: [
        'Service charges are frequently quoted at a launch-year estimate that predates the building\'s actual operating history. Reserve fund contributions, insurance, and facilities-management costs typically rise once a building is fully handed over and occupied, and the launch-year figure understates the steady-state cost.',
      ]},
      { heading: 'Verification approach', paragraphs: [
        'Where a jurisdiction publishes an official service-charge index or equivalent registry, the quoted figure is checked against it directly. Where no such index exists, the review instead benchmarks against verified, disclosed charges for comparable buildings.',
      ]},
    ],
  },
  {
    slug: 'comparable-evidence',
    title: 'Comparable Evidence',
    dek: 'Why a "comp" is only useful if it can be verified — and what makes one comparable stronger than another.',
    sections: [
      { heading: 'Closed transactions, not listings', paragraphs: [
        'A listing price is an opening offer. A closed transaction is a fact. Comparable evidence used in a Vectisum review is drawn from verified closed transactions wherever available, with listing data used only to describe current market positioning, never to establish value.',
      ]},
      { heading: 'What earns a high quality score', paragraphs: [
        'Recency, proximity, matching unit size and specification, and same-building or same-development weighting all raise the reliability of a given comparable. A comparable more than a year old, or from a materially different asset class, is treated as directional rather than decisive.',
      ]},
    ],
  },
  {
    slug: 'property-valuation',
    title: 'Property Valuation',
    dek: 'The difference between an asking price, a valuation, and a price an investor should actually be willing to pay.',
    sections: [
      { heading: 'Three different numbers', paragraphs: [
        'The asking price is set by the seller\'s incentive to maximise proceeds. A valuation estimates fair market value based on comparable evidence. The investment offer price — the figure a Vectisum review produces — works backward from the investor\'s required return to the price that would actually deliver it. These three numbers are frequently different, and conflating them is a common source of overpayment.',
      ]},
    ],
  },
  {
    slug: 'developer-risk',
    title: 'Developer Risk',
    dek: 'What to check about the party building or managing the asset, independent of the unit itself.',
    sections: [
      { heading: 'Track record over brand recognition', paragraphs: [
        'Brand recognition is not the same as delivery reliability. A developer\'s actual record — completion timelines against original promises, defect resolution, and post-handover service quality across prior projects — is a more reliable signal than name recognition alone.',
      ]},
      { heading: 'Financial and structural exposure', paragraphs: [
        'Escrow protections, payment-plan structure, and the developer\'s broader financial exposure (single-project entity versus a broader balance sheet) all affect what happens to a buyer\'s capital if a project stalls.',
      ]},
    ],
  },
  {
    slug: 'decision-psychology',
    title: 'Decision Psychology',
    dek: 'The cognitive patterns that make an otherwise capable investor accept a weak deal.',
    sections: [
      { heading: 'Why sophistication does not prevent this', paragraphs: [
        'Confirmation bias, anchoring on the first number seen, and sunk-cost attachment after time invested in a search all affect experienced investors as readily as first-time buyers. Independent review exists partly to introduce a check that does not share the buyer\'s emotional investment in the outcome.',
      ]},
      { heading: 'The role of a second, disinterested opinion', paragraphs: [
        'A reviewer with no stake in whether the transaction closes is structurally positioned to say no in a way that a commissioned broker, however well-intentioned, is not.',
      ]},
    ],
  },
  {
    slug: 'investment-mistakes',
    title: 'Investment Mistakes',
    dek: 'A working index of the specific, recurring errors this desk sees across markets and asset classes.',
    sections: [
      { heading: 'Patterns, not anecdotes', paragraphs: [
        'The mistakes catalogued in this library are patterns observed repeatedly across reviews, not isolated incidents. See the "Why Investors Lose Money" research series for the full forensic breakdown of each pattern, with the mechanism and the check that catches it.',
      ]},
    ],
  },
  {
    slug: 'investment-structures',
    title: 'Investment Structures',
    dek: 'How ownership is held affects tax, liability, and exit — independent of the merits of the underlying asset.',
    sections: [
      { heading: 'Personal name, company, or trust', paragraphs: [
        'The choice of holding structure interacts with inheritance rules, tax treatment on rental income and disposal, and liability exposure differently in every jurisdiction. This is reviewed as a structuring question, distinct from whether the underlying property is a sound investment.',
      ]},
    ],
  },
  {
    slug: 'family-offices',
    title: 'Family Offices',
    dek: 'What changes about the review when the client is an allocator, not an end-user.',
    sections: [
      { heading: 'The committee is the audience', paragraphs: [
        'A family office review is written for a decision-maker who was not present for the property viewing and will not personally live in the asset. The deliverable is built for forwarding: a single graded verdict, a defensible evidence trail, and a scenario range — not a narrative sales case.',
      ]},
    ],
  },
  {
    slug: 'property-due-diligence',
    title: 'Property Due Diligence',
    dek: 'Where financial verification sits alongside — and differs from — legal due diligence.',
    sections: [
      { heading: 'Two different disciplines', paragraphs: [
        'Legal due diligence confirms title, encumbrances, and contractual enforceability. Financial and investment verification, which is what Vectisum performs, confirms whether the numbers behind the deal are real and whether the price is defensible against evidence. Both are necessary; neither substitutes for the other.',
      ]},
    ],
  },
];

export function getKnowledgeCategory(slug: string) {
  return knowledgeCategories.find((k) => k.slug === slug);
}
