// Presentation-only tables. Expected text guards against stale formatting after data updates.
export const additionalAreaViews = {
  "td-0030": {
    "expected": "2026 posted rates: weekday 9 walking $16 / riding $23 and 18 walking $25 / riding $37; weekend 9 walking $17 / riding $26 and 18 walking $28 / riding $42. Confirm current pricing with the course before booking.",
    "caption": "2026 posted rates",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Weekday · walking",
        "$25",
        "$16"
      ],
      [
        "Weekday · riding",
        "$37",
        "$23"
      ],
      [
        "Weekend · walking",
        "$28",
        "$17"
      ],
      [
        "Weekend · riding",
        "$42",
        "$26"
      ]
    ],
    "qualification": "Confirm current prices before booking."
  },
  "td-0010": {
    "expected": "Official booking page shows tee-time pricing; rates vary by date, time, demand, and availability.",
    "caption": "See booking page",
    "message": "Choose a tee time to see its price. Rates vary by date, time, demand and availability."
  },
  "td-0013": {
    "expected": "2026 regular 18/9-hole rates: riding $55/$36; walking $45/$27. Walking is unavailable before 2 PM on weekends. Senior ages 60+ riding rates: $37/$27.",
    "caption": "2026 rates",
    "headers": [
      "Round",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Riding",
        "$55",
        "$36"
      ],
      [
        "Walking",
        "$45",
        "$27"
      ],
      [
        "Senior 60+ · riding",
        "$37",
        "$27"
      ]
    ],
    "qualification": "No walking before 2 PM on weekends."
  },
  "td-0014": {
    "expected": "Online tee times must be prepaid. Rates may differ from phone and walk-up reservations; check the official booking page for current pricing.",
    "caption": "Check online rates",
    "message": "Online tee times must be prepaid. Rates may differ from phone and walk-up reservations; check the official booking page for current pricing."
  },
  "td-0016": {
    "expected": "Official page lists weekday 18 w/cart $45, 9 w/cart $28; weekend AM 18 w/cart $62, 9 w/cart $40; after 1 PM 18 $47, 9 $33. Page does not clearly label the year.",
    "caption": "Posted rates · Confirm current pricing",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Weekday · with cart",
        "$45",
        "$28"
      ],
      [
        "Weekend AM · with cart",
        "$62",
        "$40"
      ],
      [
        "After 1 PM",
        "$47",
        "$33"
      ]
    ],
    "qualification": "Published rates may be outdated. Confirm which days the after-1-PM rates apply to and whether they include a cart."
  },
  "td-0022": {
    "expected": "Official page lists weekday 18 riding $40, 9 riding $28; senior before noon 18 riding $36, 9 $23; weekend/holiday before noon 18 riding $56, 9 $33. Page does not clearly state the year.",
    "caption": "Posted rates · Confirm current pricing",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Weekday · riding",
        "$40",
        "$28"
      ],
      [
        "Senior · before noon",
        "$36*",
        "$23"
      ],
      [
        "Weekend / holiday · before noon",
        "$56*",
        "$33"
      ]
    ],
    "qualification": "*18-hole rates include riding. Published rates may be outdated; confirm senior eligibility and cart terms for the other 9-hole prices.",
    "contact": "Call (330) 488-0404 for current prices and tee times.",
    "expectedNote": "Call (330) 488-0404 to check booking options."
  },
  "td-0017": {
    "expected": "Official rate page directs golfers to the booking page for current rates.",
    "caption": "See booking page",
    "message": "Check the course’s booking page for current tee-time prices."
  },
  "td-0031": {
    "expected": "2026 summer riding rates: weekday 18 holes $42; weekend 18 holes $60 before noon or $47 after noon. Weekday 9 holes $22, except Monday–Thursday after 4 PM: $24.",
    "caption": "2026 summer riding rates",
    "headers": [
      "Round",
      "When",
      "Rate"
    ],
    "rows": [
      [
        "18 holes",
        "Weekday",
        "$42"
      ],
      [
        "18 holes",
        "Weekend · before noon",
        "$60"
      ],
      [
        "18 holes",
        "Weekend · after noon",
        "$47"
      ],
      [
        "9 holes",
        "Weekday",
        "$22"
      ],
      [
        "9 holes",
        "Mon–Thu after 4 PM",
        "$24"
      ]
    ],
    "contact": "Call (330) 823-4402 for booking help.",
    "expectedNote": "Call (330) 823-4402 to check booking options."
  },
  "td-0006": {
    "expected": "2026 in-season posted: weekday 18 w/cart $45, weekend/holiday $58; weekday 9 w/cart $32, weekend $36; weekend 18 after 1 PM $48.",
    "caption": "2026 in-season rates",
    "headers": [
      "Round",
      "When",
      "Rate"
    ],
    "rows": [
      [
        "18 holes",
        "Weekday · with cart",
        "$45"
      ],
      [
        "9 holes",
        "Weekday · with cart",
        "$32"
      ],
      [
        "18 holes",
        "Weekend / holiday",
        "$58"
      ],
      [
        "9 holes",
        "Weekend",
        "$36"
      ],
      [
        "18 holes",
        "Weekend after 1 PM",
        "$48"
      ]
    ],
    "qualification": "Confirm weekend and holiday cart terms."
  },
  "td-0024": {
    "expected": "Official site confirms the course is open to the public but does not publish current rates; call 330-833-2668.",
    "caption": "Call for rates",
    "message": "Open to the public. Current rates aren’t published online; call 330-833-2668 before you go."
  },
  "td-0073": {
    "suppressRateSource": true,
    "expected": "2026 peak-season posted: weekday 9 holes riding $26 and 18 holes riding $36; weekend before 1 PM 9 riding $30 and 18 riding $48; after 1 PM 9 riding $28 and 18 riding $42.",
    "caption": "2026 peak-season riding rates",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Weekday",
        "$36",
        "$26"
      ],
      [
        "Weekend · before 1 PM",
        "$48",
        "$30"
      ],
      [
        "After 1 PM",
        "$42",
        "$28"
      ]
    ],
    "qualification": "Confirm which days the after-1-PM prices apply to.",
    "contact": "Call 330-854-9910 for current availability and rates.",
    "expectedNote": "Call 330-854-9910 to confirm current availability and rates."
  },
  "td-0029": {
    "expected": "Official Akron course page lists weekday 9 walking $21 / riding $28 and 18 walking $26 / riding $38; weekend before 1 PM 18 walking $45 / riding $57. No clear 2026 effective date was visible.",
    "caption": "Posted rates · Confirm current pricing",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Weekday · walking",
        "$26",
        "$21"
      ],
      [
        "Weekday · riding",
        "$38",
        "$28"
      ],
      [
        "Weekend before 1 PM · walking",
        "$45",
        "—"
      ],
      [
        "Weekend before 1 PM · riding",
        "$57",
        "—"
      ]
    ],
    "qualification": "Published rates may be outdated. — Not included in this summary; see the course’s full rate page."
  },
  "td-0028": {
    "expected": "Effective May 1, 2026: 9 holes weekdays $22 walking or $32 riding; weekends $25 walking or $35 riding.",
    "caption": "9-hole rates · Effective May 1, 2026",
    "headers": [
      "When",
      "Walking",
      "Riding"
    ],
    "rows": [
      [
        "Weekday",
        "$22",
        "$32"
      ],
      [
        "Weekend",
        "$25",
        "$35"
      ]
    ]
  },
  "td-0027": {
    "expected": "Official course page lists Monday-Thursday 18 holes with cart $44 and 9 holes $26; Friday 18 with cart $48 and 9 $28; weekend 18 with cart $62 before 2 PM, $50 from 2-4, and $44 after 4. The page does not clearly state an effective year.",
    "caption": "Posted rates · Confirm current pricing",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Mon–Thu",
        "$44*",
        "$26"
      ],
      [
        "Friday",
        "$48*",
        "$28"
      ],
      [
        "Weekend · before 2 PM",
        "$62*",
        "—"
      ],
      [
        "Weekend · 2–4",
        "$50*",
        "—"
      ],
      [
        "Weekend · after 4",
        "$44*",
        "—"
      ]
    ],
    "qualification": "*18 holes with cart. Published rates may be outdated; confirm 9-hole cart terms and weekend time bands. — Not included in this summary; see the course’s full rate page."
  },
  "td-0015": {
    "expected": "Summer posted: Mon-Thu ride 9 $29 / walk 9 $19; ride 18 $44 / walk 18 $30. Fri-Sun/holidays ride 9 $32 / walk 9 $22; ride 18 $47 / walk 18 $33.",
    "caption": "Summer rates · Public 9-hole course",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Mon–Thu · walking",
        "$30",
        "$19"
      ],
      [
        "Mon–Thu · riding",
        "$44",
        "$29"
      ],
      [
        "Fri–Sun / holidays · walking",
        "$33",
        "$22"
      ],
      [
        "Fri–Sun / holidays · riding",
        "$47",
        "$32"
      ]
    ]
  },
  "td-0037": {
    "expected": "2026 peak-season rates from April 1. 18/9 holes: Mon–Thu riding $51/$32, walking $38/$24; Friday riding $55/$35, walking $41/$27; weekends before 2 PM riding $69/$37, walking $55/$30; weekends after 2 PM riding $57/$33, walking $43/$26.",
    "caption": "2026 peak season · From April 1",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Mon–Thu · riding",
        "$51",
        "$32"
      ],
      [
        "Mon–Thu · walking",
        "$38",
        "$24"
      ],
      [
        "Friday · riding",
        "$55",
        "$35"
      ],
      [
        "Friday · walking",
        "$41",
        "$27"
      ],
      [
        "Weekend before 2 PM · riding",
        "$69",
        "$37"
      ],
      [
        "Weekend before 2 PM · walking",
        "$55",
        "$30"
      ],
      [
        "Weekend after 2 PM · riding",
        "$57",
        "$33"
      ],
      [
        "Weekend after 2 PM · walking",
        "$43",
        "$26"
      ]
    ]
  },
  "td-0026": {
    "expected": "2026 posted schedule varies by day and time. Examples: Mon-Fri 18 riding $31 early, $39 from 8-9:52, $35 from 10-12:52; Saturday $52 early / $43 late morning / $40 after 1; Sunday $58 early / $50 late morning / $40 after 1.",
    "caption": "Selected 2026 prices · Check the full schedule",
    "headers": [
      "When",
      "Published price"
    ],
    "rows": [
      [
        "Mon–Fri early · 18 riding",
        "$31"
      ],
      [
        "Mon–Fri 8–9:52 · 18 riding",
        "$39"
      ],
      [
        "Mon–Fri 10–12:52 · 18 riding",
        "$35"
      ],
      [
        "Saturday · early",
        "$52"
      ],
      [
        "Saturday · late morning",
        "$43"
      ],
      [
        "Saturday · after 1",
        "$40"
      ],
      [
        "Sunday · early",
        "$58"
      ],
      [
        "Sunday · late morning",
        "$50"
      ],
      [
        "Sunday · after 1",
        "$40"
      ]
    ],
    "qualification": "These are examples, not a complete schedule. Confirm exact time windows and weekend hole counts and cart terms.",
    "notice": "Online booking requires sign-in.",
    "contact": "Call (330) 699-2209 for booking assistance.",
    "expectedNote": "Online booking requires sign-in. Call (330) 699-2209 for booking assistance."
  },
  "td-0035": {
    "suppressRateSource": true,
    "expected": "No official current rate page was found. Call 330-628-5139 to confirm current pricing.",
    "caption": "Call for rates",
    "message": "Call 330-628-5139 for current pricing and tee times.",
    "contact": "Par 3 course. Check with the course before making plans.",
    "expectedNote": "Par 3 course. Call (330) 628-5139 to check booking options."
  },
  "td-0038": {
    "expected": "Rates are shown through the official booking flow and may vary by date, time, and availability.",
    "caption": "See booking page",
    "message": "Choose a date and tee time for current prices. Rates may vary by date, time and availability."
  },
  "td-0039": {
    "expected": "Published weekday and weekend-after-1-PM 18/9-hole rates: riding $51/$29; walking $35/$21. Weekend 18 holes before 1 PM: $65 riding or $49 walking. Weekend 9 holes are unavailable before 1 PM except the $35 early special before 7:30 AM; confirm that special’s cart terms. Pro shop: 330-689-2770. The rate sheet is undated.",
    "caption": "Posted rates · Confirm current pricing",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Weekdays; weekends after 1 PM · riding",
        "$51",
        "$29"
      ],
      [
        "Weekdays; weekends after 1 PM · walking",
        "$35",
        "$21"
      ],
      [
        "Weekend before 1 PM · riding",
        "$65",
        "—"
      ],
      [
        "Weekend before 1 PM · walking",
        "$49",
        "—"
      ]
    ],
    "qualification": "Weekend 9 holes: unavailable before 1 PM except the $35 early special before 7:30 AM. Confirm the special’s cart terms. Published rates may be outdated; call 330-689-2770 to confirm."
  },
  "td-0040": {
    "expected": "Effective April 1, 2026: weekday 18/9-hole rates $54/$35; weekends before 1 PM $66/$42, and after 1 PM $54/$35. The published table does not specify cart inclusion; confirm before booking.",
    "caption": "Effective April 1, 2026",
    "headers": [
      "When",
      "18 holes",
      "9 holes"
    ],
    "rows": [
      [
        "Weekday",
        "$54",
        "$35"
      ],
      [
        "Weekend · before 1 PM",
        "$66",
        "$42"
      ],
      [
        "Weekend · after 1 PM",
        "$54",
        "$35"
      ]
    ],
    "qualification": "Cart inclusion isn’t specified. Confirm before booking."
  }
};
