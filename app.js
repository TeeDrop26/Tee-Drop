const courses = [
  {
    name: "Zoar Village Golf Course",
    city: "Zoar, OH",
    area: "Tuscarawas County",
    latitude: 40.6122153,
    longitude: -81.418408,
    bookingUrl: "https://zoar-village-golf-course.book.teeitup.com/?course=4264",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Current official rates: Monday-Thursday 18 holes riding $44 and 9 riding $30; Friday 18 riding $53, or $44 after noon; weekend/holiday 18 riding ranges from $65-$68, $57-$60 from noon-2, and $50-$53 after 2.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://zoarvillagegolf.com/rates/"
    },
    firstAvailable: {
      time: "Open link",
      players: 4,
      price: null,
      note: "Open Zoar's course link to check booking options."
    },
    teeTimes: []
  },
  {
    name: "Oak Shadows Golf Club",
    city: "New Philadelphia, OH",
    area: "Tuscarawas County",
    latitude: 40.50251,
    longitude: -81.423778,
    bookingUrl: "https://www.oakshadowsgolf.com/tee-times/",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The official course site provides online booking but no fixed current public rate sheet was verified. Check the official booking page for the current date-and-time price.",
      publicSummary: "Check the official booking page for current date-and-time pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.oakshadowsgolf.com/tee-times/"
    },
    teeTimes: []
  },
  {
    name: "Wilkshire Golf Course",
    city: "Bolivar, OH",
    area: "Tuscarawas County",
    latitude: 40.636738059988,
    longitude: -81.44818665347,
    bookingUrl: "https://wilkshire-golf-course.book.teeitup.com/",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted: weekday 18 w/cart $45, 9 w/cart $30; weekend/holiday 18 $65; after 2 PM 18 $55; weekend 9 $40 PM only.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.wilkshiregolf.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "River Greens Golf Course",
    city: "West Lafayette, OH",
    area: "Other Northeast Ohio",
    latitude: 40.277816,
    longitude: -81.69626,
    bookingUrl: "https://apimanager-cc30.clubcaddie.com/webapi/view/eifdabab",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted: weekday 18 w/cart $40, 9 w/cart $28; Friday 18 w/cart $45; weekend/holiday 18 w/cart $54, $45 after 2 PM; weekend 9 w/cart $30, $28 after 2 PM.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://rivergreens.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Hickory Flats Golf Course",
    city: "West Lafayette, OH",
    area: "Other Northeast Ohio",
    latitude: 40.25775,
    longitude: -81.749625,
    bookingUrl: "https://www.golfnow.com/tee-times/facility/6066-hickory-flats-golf-course/search",
    bookingNote: "Open Hickory Flats' course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Posted: walking 9 $12 / 18 $20; weekday riding 9 $20 / 18 $27; weekend riding 9 $24 / 18 $34; senior weekday and after 1 PM weekend 9 $18 / 18 $23.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.hickoryflatsgc.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "The Legends of Massillon",
    city: "Massillon, OH",
    area: "Canton / Stark County",
    latitude: 40.767691,
    longitude: -81.497323,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/22058",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 in-season posted: weekday 18 w/cart $45, weekend/holiday $58; weekday 9 w/cart $32, weekend $36; weekend 18 after 1 PM $48.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.thelegends.com/course/rates"
    },
    teeTimes: []
  },
  {
    name: "Five Waters Golf Course",
    city: "Midvale, OH",
    area: "Tuscarawas County",
    additionalLayouts: [{ type: "par3" }],
    latitude: 40.429115,
    longitude: -81.368983,
    bookingUrl: "http://www.5watersgolf.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 922-2182 to check booking options.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official site lists weekday 9 walk $10 / ride $15 and 18 walk $16 / ride $22; weekend/holiday categories are listed, but the same page still contains 2020 membership wording, so confirm current prices.",
      publicSummary: "Posted rates are available, but confirm current pricing with the course before playing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://5watersgolf.com/info.html"
    },
    teeTimes: []
  },
  {
    name: "Big Bend Golf Course",
    city: "Uhrichsville, OH",
    area: "Tuscarawas County",
    latitude: 40.394,
    longitude: -81.355,
    bookingUrl: "https://bigbendgolfcourse.com/golf1-2243",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 229-7660 to check booking options.",
    rateInfo: {
      status: "call",
      statusLabel: "Call for rates",
      summary: "The official course site does not publish current green fees and directs golfers to call for tee times. Call 740-229-7660 to confirm current pricing.",
      publicSummary: "Call 740-229-7660 for current pricing and tee-time information.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://bigbendgolfcourse.com/"
    },
    teeTimes: []
  },
  {
    name: "Black Gold Golf Club",
    city: "Sugarcreek, OH",
    area: "Tuscarawas County",
    latitude: 40.526565,
    longitude: -81.618241,
    bookingUrl: "https://blackgoldgc.teesnap.net/",
    rateInfo: {
      status: "rate-page",
      statusLabel: "See rate page",
      summary: "Official rates page exists but did not expose rates in search text; use booking page or call to confirm current pricing.",
      publicSummary: "Check the course's official rate or booking page, or call the course, for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://blackgoldgolfclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "The Quarry Golf Club and Venue",
    city: "Canton, OH",
    area: "Canton / Stark County",
    latitude: 40.772227,
    longitude: -81.298935,
    bookingUrl: "https://vip.teeitup.com/the-quarry/tee-times/",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Official booking page shows tee-time pricing; rates vary by date, time, demand, and availability.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://vip.teeitup.com/the-quarry/tee-times/"
    },
    teeTimes: []
  },
  {
    name: "Carroll Meadows Golf Course",
    city: "Carrollton, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.5884705,
    longitude: -81.0784467,
    bookingUrl: "https://www.chronogolf.com/club/carroll-meadows-golf-course",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted: weekday 18 w/cart $38, weekend/holiday $48, weekend after 1 PM $40; weekday senior $32.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://carrollmeadows.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Great Trail Golf Course",
    city: "Minerva, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.72279,
    longitude: -81.080017,
    bookingUrl: "https://apimanager-cc20.clubcaddie.com/webapi/view/ggfdabab",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official rate page lists weekday 18 riding $42 and weekend 18 riding $55, with PM and 9-hole rates, but the page does not clearly state an effective year; confirm current pricing.",
      publicSummary: "Weekday 18 riding is listed at $42 and weekend 18 riding at $55, with PM and 9-hole rates available. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://greattrailgc.com/golf/rates-passes/"
    },
    teeTimes: []
  },
  {
    name: "Arrowhead Golf Club & Banquet Center",
    city: "North Canton, OH",
    area: "Canton / Stark County",
    latitude: 40.862,
    longitude: -81.426,
    bookingUrl: "https://arrowhead-golf-club-4.book-v2.teeitup.golf/",
    bookingNote: "1500 Rogwin Cir SW. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted: daily 18 riding $55, 9 riding $36; walking 18 $45, 9 $27; senior riding 18 $37, 9 $27.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://ncarrowhead.com/golf/book-time/"
    },
    teeTimes: []
  },
  {
    name: "Raintree Golf & Event Center",
    city: "Uniontown, OH",
    area: "Canton / Stark County",
    latitude: 40.969,
    longitude: -81.425,
    bookingUrl: "https://www.golfraintree.com/book-a-tee-time/",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Official site states lowest rates are online and phone/walk-up rates may be higher; check booking page for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.golfraintree.com/tee-times-2/"
    },
    teeTimes: []
  },
  {
    name: "Raymond C. Firestone Golf Course",
    city: "Akron, OH",
    area: "Akron / Summit County",
    latitude: 41.014555552933,
    longitude: -81.50688001586,
    bookingUrl: "https://www.firestone9.com/book-a-tee-time/",
    bookingNote: "Public 9-hole course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Summer posted: Mon-Thu ride 9 $29 / walk 9 $19; ride 18 $44 / walk 18 $30. Fri-Sun/holidays ride 9 $32 / walk 9 $22; ride 18 $47 / walk 18 $33.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.firestone9.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Sable Creek Golf Course",
    city: "Hartville, OH",
    area: "Canton / Stark County",
    latitude: 40.950798,
    longitude: -81.279248,
    bookingUrl: "https://sablecreekgolf.com/book-a-tee-time/",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official page lists weekday 18 w/cart $45, 9 w/cart $28; weekend AM 18 w/cart $62, 9 w/cart $40; after 1 PM 18 $47, 9 $33. Page does not clearly label the year.",
      publicSummary: "Weekday and weekend rates are posted. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://sablecreekgolf.com/rates-and-fees/"
    },
    teeTimes: []
  },
  {
    name: "Pleasant View Golf Club",
    city: "Paris, OH",
    area: "Canton / Stark County",
    latitude: 40.83752,
    longitude: -81.126503,
    bookingUrl: "https://www.chronogolf.com/club/pleasant-view-golf-club-ohio",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Official rate page directs golfers to the booking page for current rates.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://pleasantviewgolfclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Fire Ridge Golf Course",
    city: "Millersburg, OH",
    area: "Wayne / Holmes County",
    latitude: 40.553110960225,
    longitude: -81.90175181534,
    bookingUrl: "https://www.fireridgegolfcourse.com/contact-us",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 674-3921 to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted: Mon-Fri 18 w/cart $44, 9 $33; senior 18 $39, 9 $30. Weekend/holiday 7-2: 18 $49, 9 $38; after 2: 18 $43, 9 $33.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.fireridgegolfcourse.com/rates-and-specials"
    },
    teeTimes: []
  },
  {
    name: "The Pines Golf Club",
    city: "Orrville, OH",
    area: "Wayne / Holmes County",
    latitude: 40.836,
    longitude: -81.782,
    bookingUrl: "https://www.chronogolf.com/club/the-pines-golf-club-ohio",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted: Mon-Thu 18 w/cart $45, 9 $31; Fri-Sun/holidays 18 $51, 9 $34; senior Mon-Fri 18 $34, 9 $26.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://thepinesgolf.com/the-course/"
    },
    teeTimes: []
  },
  {
    name: "Chippewa Golf Club",
    city: "Doylestown, OH",
    area: "Wayne / Holmes County",
    identityKey: "chippewa-golf-club-doylestown-oh",
    latitude: 40.947362,
    longitude: -81.657214,
    bookingUrl: "https://www.chippewagolfclub.com/tee-times/",
    rateInfo: {
      status: "call",
      statusLabel: "Call for rates",
      summary: "The Doylestown course's official site does not publish current rates; call 330-658-6126 or use its booking page. Do not use Chippewa 579 rates from Curtice, Ohio.",
      publicSummary: "For current pricing, call 330-658-6126 or check the online booking page.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.chippewagolfclub.com/"
    },
    teeTimes: []
  },
  {
    name: "Spring Valley Golf Course",
    city: "East Sparta, OH",
    area: "Canton / Stark County",
    latitude: 40.723104,
    longitude: -81.391027,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/20683/5399#/teetimes",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official page lists weekday 18 w/cart $39, 9 $27; Friday 18 $44, 9 $32; weekend/holiday 7-1 18 $55, 9 $40; 1-4 18 $47, 9 $32; after 4 18 $33, 9 $23. Page does not clearly state the year.",
      publicSummary: "Weekday 18 with cart is listed at $39 and 9 holes at $27; Friday 18 is $44 and 9 is $32; weekend and holiday pricing varies by time. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.svgcanton.com/golf-rates"
    },
    teeTimes: []
  },
  {
    name: "Clearview Golf Club",
    city: "East Canton, OH",
    area: "Canton / Stark County",
    latitude: 40.779,
    longitude: -81.286,
    bookingUrl: "https://www.clearviewgolfclub.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 488-0404 to check booking options.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official page lists weekday 18 riding $40, 9 riding $28; senior before noon 18 riding $36, 9 $23; weekend/holiday before noon 18 riding $56, 9 $33. Page does not clearly state the year.",
      publicSummary: "Weekday 18 riding is listed at $40 and 9 riding at $28; senior and weekend rates are also available. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clearviewgolfclub.com/rates"
    },
    teeTimes: []
  },
  {
    name: "Edgewater Golf Course",
    city: "Minerva, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.7298,
    longitude: -81.1054,
    bookingUrl: "https://book.edgewatergolfcourse.com/",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official page lists weekday 9 walk $10 / cart $17 and 18 walk $18 / cart $27; weekend 9 walk $12 / cart $20 and 18 walk $20 / cart $35. Page does not clearly state the year.",
      publicSummary: "Weekday and weekend walking and cart rates are listed for 9 and 18 holes. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.edgewatergolfcourse.com/pricing"
    },
    teeTimes: []
  },
  {
    name: "The Elms Country Club",
    city: "North Lawrence, OH",
    area: "Canton / Stark County",
    latitude: 40.839,
    longitude: -81.631,
    bookingUrl: "https://elms.golf/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 833-2668 to check booking options.",
    rateInfo: {
      status: "call",
      statusLabel: "Call for rates",
      summary: "Official site confirms the course is open to the public but does not publish current rates; call 330-833-2668.",
      publicSummary: "Call 330-833-2668 for current rates.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://elms.golf/"
    },
    teeTimes: []
  },
  {
    name: "Black Diamond Golf Course",
    city: "Millersburg, OH",
    area: "Wayne / Holmes County",
    latitude: 40.61443,
    longitude: -81.868461,
    bookingUrl: "https://blackdiamondgolfcourse.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 674-6110 to check booking options.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official page lists Mon-Thu 18 riding $42, after 2 $40; Fri-Sun 18 riding $58, after 2 $48; Mon-Thu 9 riding $29, after 2 $27; Fri-Sun 9 riding $38, after 2 $34. Page does not clearly state the year.",
      publicSummary: "Weekday and weekend riding rates are listed for 9 and 18 holes, including afternoon pricing. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://blackdiamondgolfcourse.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Mayfair Country Club",
    city: "Green, OH",
    area: "Akron / Summit County",
    latitude: 40.964,
    longitude: -81.466,
    bookingUrl: "https://www.mayfaircountryclub.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 699-2209 or check the course site for current booking instructions.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted schedule varies by day and time. Examples: Mon-Fri 18 riding $31 early, $39 from 8-9:52, $35 from 10-12:52; Saturday $52 early / $43 late morning / $40 after 1; Sunday $58 early / $50 late morning / $40 after 1.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.mayfaircountryclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Chenoweth Golf Course",
    city: "Akron, OH",
    area: "Akron / Summit County",
    latitude: 40.990,
    longitude: -81.465,
    bookingUrl: "https://www.chenowethgolf.com/tee-times/",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official course page lists Monday-Thursday 18 holes with cart $44 and 9 holes $26; Friday 18 with cart $48 and 9 $28; weekend 18 with cart $62 before 2 PM, $50 from 2-4, and $44 after 4. The page does not clearly state an effective year.",
      publicSummary: "Monday-Thursday 18 with cart is listed at $44 and 9 holes at $26; Friday and weekend pricing is also available. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.chenowethgolf.com/about-us/rates/"
    },
    teeTimes: []
  },
  {
    name: "Mud Run Golf Course",
    city: "Akron, OH",
    area: "Akron / Summit County",
    latitude: 41.032,
    longitude: -81.571,
    bookingUrl: "https://mud-run-golf-course.book.teeitup.com/?course=54f14d410c8ad60378b03844",
    rateInfo: {
      status: "rate-page",
      statusLabel: "See rate page",
      summary: "An official rates page is available, but its current dollar amounts were not exposed in the page text. Check the official rates or booking page, or call the course, for current pricing.",
      publicSummary: "Check the course's official rates or booking page, or call the course, for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.mudrungolf.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "J. Edward Good Park Golf Course",
    city: "Akron, OH",
    area: "Akron / Summit County",
    latitude: 41.095709,
    longitude: -81.578544,
    bookingUrl: "https://je-good-park-golf-course.book.teeitup.com/?course=54f14d410c8ad60378b03840",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official Akron course page lists weekday 9 walking $21 / riding $28 and 18 walking $26 / riding $38; weekend before 1 PM 18 walking $45 / riding $57. No clear 2026 effective date was visible.",
      publicSummary: "Weekday 9 walking is listed at $21 and riding at $28; weekday 18 walking is $26 and riding is $38. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.goodparkgolf.com/ates/"
    },
    teeTimes: []
  },
  {
    name: "Meadowlake Golf Course",
    city: "Canton, OH",
    area: "Canton / Stark County",
    latitude: 40.841091,
    longitude: -81.358994,
    bookingUrl: "https://apimanager-cc37.clubcaddie.com/webapi/view/bbgdabab",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted rates: weekday 9 walking $16 / riding $23 and 18 walking $25 / riding $37; weekend 9 walking $17 / riding $26 and 18 walking $28 / riding $42. Confirm current pricing with the course before booking.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.meadowlakeclub.com/greens-fees"
    },
    teeTimes: []
  },
  {
    name: "Tannenhauf Golf Club",
    city: "Alliance, OH",
    area: "Canton / Stark County",
    latitude: 40.909,
    longitude: -81.184,
    bookingUrl: "https://tannenhaufgolf.net/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 823-4402 to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 summer rates: weekday 18 riding $42; weekend before noon $60 and after noon $47; weekday 9 riding $22.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://tannenhaufgolf.net/rates/"
    },
    teeTimes: []
  },
  {
    name: "Riceland Golf Course",
    city: "Orrville, OH",
    area: "Wayne / Holmes County",
    latitude: 40.7965129,
    longitude: -81.7649999,
    bookingUrl: "https://ricelandgolfcourse.com/book-a-tee-time/",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 rates: weekday 18 riding $40; weekend 18 riding $48 before noon and $44 after noon; 9 riding $24 weekday and $26 weekend.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://ricelandgolfcourse.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Round Lake Golf Course",
    city: "Lakeville, OH",
    area: "Wayne / Holmes County",
    latitude: 40.629,
    longitude: -82.141,
    bookingUrl: "https://www.roundlakegolfcourse.com/",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official page lists Monday-Thursday 18 riding $40 and 9 riding $26; Friday-Sunday 18 riding $46 and 9 riding $30. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.roundlakegolfcourse.com/golfcourse"
    },
    teeTimes: []
  },
  {
    name: "Salt Fork State Park Golf Course",
    city: "Lore City, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.0776634,
    longitude: -81.4692891,
    bookingUrl: "https://www.chronogolf.com/club/salt-fork-state-park-golf-course",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 rates: Monday-Thursday 18 riding $46 and 9 riding $32; Friday-Sunday 18 riding $58 and 9 riding $40.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.saltforkparklodge.com/things-to-do/golf"
    },
    teeTimes: []
  },
  {
    name: "Mulligan Springs Golf Course",
    city: "Mogadore, OH",
    area: "Akron / Summit County",
    courseType: "par3",
    latitude: 41.048564,
    longitude: -81.331005,
    bookingUrl: "https://www.facebook.com/MulliganSpringsGolfCourse/",
    bookingLabel: "Call / Info",
    bookingNote: "Par 3 course. Call (330) 628-5139 to check booking options.",
    rateInfo: {
      status: "call",
      statusLabel: "Call for rates",
      summary: "No official current rate page was found. Call 330-628-5139 to confirm current pricing.",
      publicSummary: "Call 330-628-5139 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.golfdigest.com/courses/oh/mulligan-springs-golf-course-mulligan"
    },
    teeTimes: []
  },
  {
    name: "Windmill Lakes Golf Club",
    city: "Ravenna, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.172989,
    longitude: -81.223061,
    bookingUrl: "https://www.chronogolf.com/club/windmill-lakes-golf-club",
    bookingNote: "Open Windmill Lakes' course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 summer rates: weekday 18 riding $49.50 and 9 riding $26; weekend before noon 18 riding $67, noon-2 $56, and after 2 $44.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://golfwindmilllakes.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Turkeyfoot Lake Golf Links",
    city: "Akron, OH",
    area: "Akron / Summit County",
    latitude: 40.979,
    longitude: -81.543,
    bookingUrl: "https://turkeyfoot-lake-golf-links.book.teeitup.com/",
    bookingNote: "Open Turkeyfoot's course link to check booking options.",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "Official rates page is labeled 2025 and does not confirm current 2026 peak-season pricing; check the booking page or call (330) 644-5971.",
      publicSummary: "Check the booking page or call (330) 644-5971 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.turkeyfootgolf.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Brookledge Golf Club",
    city: "Cuyahoga Falls, OH",
    area: "Akron / Summit County",
    latitude: 41.1516,
    longitude: -81.4665,
    bookingUrl: "https://www.brookledgegc.com/tee-times/",
    bookingNote: "Open Brookledge's course link to check booking options.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Rates are shown through the official booking flow and may vary by date, time, and availability.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.brookledgegc.com/tee-times/"
    },
    teeTimes: []
  },
  {
    name: "Fox Den Golf Course",
    city: "Stow, OH",
    area: "Akron / Summit County",
    latitude: 41.184918,
    longitude: -81.407369,
    bookingUrl: "https://www.foxdengc.com/tee-times/",
    bookingNote: "Open Fox Den's course link to check booking options.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Current pricing is shown through the course booking system; check the booking page or call (330) 673-3443.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.foxdengc.com/tee-times/"
    },
    teeTimes: []
  },
  {
    name: "Roses Run Country Club",
    city: "Stow, OH",
    area: "Akron / Summit County",
    latitude: 41.1856,
    longitude: -81.4542,
    bookingUrl: "https://www.rosesrun.com/tee-times/",
    bookingNote: "Open Roses Run's course link to check booking options.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Current rates are shown through the official tee-time booking flow; pricing may vary by date, time, and availability.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.rosesrun.com/tee-times/"
    },
    teeTimes: []
  },
  {
    name: "Boulder Creek Golf Club",
    city: "Streetsboro, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.2545609,
    longitude: -81.3259579,
    bookingUrl: "https://boulder-creek-golf-club-3.book.teeitup.com/",
    bookingNote: "Open Boulder Creek's course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 summer rates: Monday-Thursday 18 riding $62; Friday $68; weekend/holiday $84 before noon, $74 noon-2, $64 after 2, and $54 after 4.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://bouldercreekohio.com/rates-and-course-policy/"
    },
    teeTimes: []
  },
  {
    name: "Pine Hills Golf Club",
    city: "Hinckley, OH",
    area: "Cleveland area",
    latitude: 41.3213,
    longitude: -81.7855,
    bookingUrl: "https://pine-hills-golf-club-oh.book.teeitup.com/",
    bookingNote: "Open Pine Hills' course link to check booking options.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Green fees use dynamic pricing based on season, weather, course conditions, and demand; check the official booking page for the current rate.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.golfpinehills.net/course-rates/"
    },
    teeTimes: []
  },
  {
    name: "Bunker Hill Golf Course",
    city: "Medina, OH",
    area: "Cleveland area",
    latitude: 41.2289,
    longitude: -81.8426,
    bookingUrl: "https://bunker-hill-golf-course.book.teeitup.com/",
    bookingNote: "Open Bunker Hill's course link to check booking options.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Current rates are shown through the official booking page; pricing may vary by date, time, and availability.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://bunker-hill-golf-course.book.teeitup.com/"
    },
    teeTimes: []
  },
  {
    name: "Coppertop Golf Club",
    city: "Valley City, OH",
    area: "Cleveland area",
    latitude: 41.2399,
    longitude: -81.9188,
    bookingUrl: "https://coppertop-golf-club.book.teeitup.com/",
    bookingNote: "Open Coppertop's course link to check booking options.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Green fees vary by day, time, and season; check the official booking page for current pricing. The course notes some deal times may be as low as $24.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://coppertopgolf.com/course-overview/"
    },
    teeTimes: []
  },
  {
    name: "Grey Hawk Golf Club",
    city: "LaGrange, OH",
    area: "Cleveland area",
    latitude: 41.2358,
    longitude: -82.1236,
    bookingUrl: "https://grey-hawk-golf-club.book.teeitup.com/",
    bookingNote: "Open Grey Hawk's course link to check booking options.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Dynamic pricing varies with demand, season, time, weather, and availability; online-only rates are shown through the official booking page.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.greyhawkgolf.com/daily-rates/"
    },
    teeTimes: []
  },
  {
    name: "Sweetbriar Golf Club",
    city: "Avon Lake, OH",
    area: "Cleveland area",
    latitude: 41.4948,
    longitude: -82.0322,
    bookingUrl: "https://sweetbriar-golf-club-legacy-18.book.teeitup.com/",
    bookingNote: "Open Sweetbriar's course link to check booking options.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The course uses dynamic pricing; online rates fluctuate with weather, competition, local events, and booking timing. Check the official booking page for the current rate.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.sweetbriargolfclub.com/book-a-tee-time/"
    },
    teeTimes: []
  },
  {
    name: "Pleasant Hill Golf Course",
    city: "Perrysville, OH",
    area: "Other Northeast Ohio",
    courseType: "par3",
    latitude: 40.634455,
    longitude: -82.364267,
    bookingUrl: "https://pleasanthillgolfcourse.com/green-fees",
    bookingLabel: "Call / Info",
    bookingNote: "Call (419) 938-5311 or check the course site for current tee times.",
    rateInfo: {
      status: "call",
      statusLabel: "Call for rates",
      summary: "The official Perrysville rate page lists fee categories but does not display current dollar amounts; call (419) 938-5311 to confirm pricing.",
      publicSummary: "Call (419) 938-5311 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://pleasanthillgolfcourse.com/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Deer Ridge Golf Club",
    city: "Bellville, OH",
    area: "Other Northeast Ohio",
    latitude: 40.6238,
    longitude: -82.5318,
    bookingUrl: "https://deerridge.quick18.com/",
    bookingNote: "Open Deer Ridge's course link to check booking options.",
    rateInfo: {
      status: "rate-page",
      statusLabel: "See rate page",
      summary: "The official course site provides a 2026 rate page; open it or the booking page to confirm current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://deerridgegc.com/rates"
    },
    teeTimes: []
  },
  {
    name: "Manakiki Golf Course",
    city: "Willoughby Hills, OH",
    area: "Cleveland area",
    latitude: 41.5802,
    longitude: -81.4319,
    bookingUrl: "https://www.chronogolf.com/club/manakiki-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 18 holes $38 Monday-Thursday, $45 Friday, and $51 weekends; an 18-hole cart is $16 at Manakiki.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://cms.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "The Flying B Golf Course",
    city: "Salem, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.9353,
    longitude: -80.8722,
    bookingUrl: "https://www.flyingbgolf.com/teetimes/",
    bookingNote: "Open The Flying B's course link to check booking options.",
    rateInfo: {
      status: "rate-page",
      statusLabel: "See rate page",
      summary: "The official site has a rates page but does not expose current dollar amounts in readable text; check the booking page or call (330) 337-8138.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.flyingbgolf.com/aboutus/rates/"
    },
    teeTimes: []
  },
  {
    name: "Reserve Run Golf Course",
    city: "Poland, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.9852,
    longitude: -80.609,
    bookingUrl: "https://reserverun.cps.golf/",
    bookingNote: "Open Reserve Run's course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 in-season rates: Monday-Thursday 18 riding $40 before 8 and $45 after 8; Friday $50; weekends $55 before 2 and $45 after 2.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.reserverungolf.com/rates-booking/2025-rates"
    },
    teeTimes: []
  },
  {
    name: "Sleepy Hollow Golf Course",
    city: "Brecksville, OH",
    area: "Cleveland area",
    latitude: 41.3044563,
    longitude: -81.6226271,
    bookingUrl: "https://www.chronogolf.com/club/sleepy-hollow-golf-course-ohio",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 18 holes $38 Monday-Thursday, $45 Friday, and $51 weekends; an 18-hole cart is $14.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "St. Denis Golf Club",
    city: "Chardon, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.5811,
    longitude: -81.2058,
    bookingUrl: "https://golfback.com/#/course/81222d23-764e-4201-873f-7d4c16e60632",
    bookingNote: "Open St. Denis' course link to check booking options.",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "The official rates page is still labeled 2025; use the booking page or call (440) 285-2183 for current 2026 pricing.",
      publicSummary: "Use the booking page or call (440) 285-2183 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://stdenisgolfclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Big Met Golf Course",
    city: "Fairview Park, OH",
    area: "Cleveland area",
    latitude: 41.4338,
    longitude: -81.8487,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/big-met-golf-course-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 18 holes $31 Monday-Thursday, $34 Friday, and $37 weekends; an 18-hole cart is $14.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Ironwood Golf Course",
    city: "Hinckley, OH",
    area: "Cleveland area",
    latitude: 41.2355,
    longitude: -81.745,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/ironwood-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 18 holes $31 Monday-Thursday, $34 Friday, and $37 weekends; an 18-hole cart is $16 at Ironwood.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Little Met Golf Course",
    city: "Cleveland, OH",
    area: "Cleveland area",
    courseType: "executive",
    latitude: 41.42,
    longitude: -81.8284,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/little-met-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 9 holes $14 weekdays and $16 weekends; a 9-hole cart is $8.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Mastick Woods Golf Course",
    city: "Cleveland, OH",
    area: "Cleveland area",
    courseType: "executive",
    latitude: 41.4317,
    longitude: -81.8427,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/mastick-woods-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 9 holes $14 weekdays and $16 weekends; a 9-hole cart is $8.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Seneca Golf Course",
    city: "Broadview Heights, OH",
    area: "Cleveland area",
    latitude: 41.3196,
    longitude: -81.6307,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/seneca-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 18 holes $31 Monday-Thursday, $34 Friday, and $37 weekends; an 18-hole cart is $14.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Shawnee Hills Golf Course",
    city: "Bedford, OH",
    area: "Cleveland area",
    additionalLayouts: [{ type: "par3" }],
    latitude: 41.3559,
    longitude: -81.512,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/shawnee-hills-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 18 holes $31 Monday-Thursday, $34 Friday, and $37 weekends; an 18-hole cart is $14.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Washington Golf Course",
    city: "Newburgh Heights, OH",
    area: "Cleveland area",
    courseType: "executive",
    latitude: 41.4469,
    longitude: -81.6706,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/washington-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "Peak greens fees: 9 holes $14 weekdays and $16 weekends; a 9-hole cart is $8.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.clevelandmetroparks.com/golf/pricing/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Shale Creek Golf Club",
    city: "Medina, OH",
    area: "Cleveland area",
    latitude: 41.192727,
    longitude: -81.881917,
    bookingUrl: "https://shalecreek.cps.golf/",
    bookingNote: "Open Shale Creek's booking page to check current availability and pricing.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The official site directs golfers to its tee-time booking flow; no fixed public daily-rate sheet was found. Check the official booking page for current pricing.",
      publicSummary: "Check the official booking page for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://shalecreek.cps.golf/"
    },
    teeTimes: []
  },
  {
    name: "Valleaire Golf Club",
    city: "Hinckley, OH",
    area: "Cleveland area",
    latitude: 41.270683,
    longitude: -81.735964,
    bookingUrl: "https://valleaire-golf-club.book.teeitup.com/",
    bookingNote: "Open Valleaire's booking page to check current availability and pricing.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted: Monday-Thursday 18 holes with cart $48 and 9 holes $32; Friday 18 holes $52 before noon and $42 after; weekend 18 holes $64 before 1 PM and $54 after.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.valleairegolf.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Mallard Creek Golf Club",
    city: "Columbia Station, OH",
    area: "Cleveland area",
    latitude: 41.318633,
    longitude: -81.985478,
    bookingUrl: "https://themallardcreek.com/tee-times/",
    bookingNote: "Open Mallard Creek's booking page to check current availability and pricing.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Official course site uses dynamic pricing; current rates vary by date, time, demand, and availability and are shown in the booking flow.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://themallardcreek.com/tee-times/"
    },
    teeTimes: []
  },
  {
    name: "Pine Brook Golf Links",
    city: "Grafton, OH",
    area: "Cleveland area",
    latitude: 41.332498,
    longitude: -82.050553,
    bookingUrl: "https://golfpinebrook.com/tee-times/",
    bookingNote: "Open Pine Brook's booking page to check current availability and pricing.",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "The official published rate page is labeled 2025. Check the current booking page or contact the course for 2026 pricing.",
      publicSummary: "Check the current booking page or contact the course for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://golfpinebrook.com/course-rates/"
    },
    teeTimes: []
  },
  {
    name: "Hinckley Hills Golf Course",
    city: "Hinckley, OH",
    area: "Cleveland area",
    latitude: 41.263625,
    longitude: -81.717235,
    bookingUrl: "https://hinckley-hills-golf-course.book.teeitup.com/",
    bookingNote: "Open Hinckley Hills' booking page to check current availability and pricing.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The official site offers online booking but does not publish a fixed current daily-rate sheet. Check the official booking flow or call 330-278-4861 for current pricing.",
      publicSummary: "Check the official booking page or call 330-278-4861 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://hinckley-hills-golf-course.book.teeitup.com/"
    },
    teeTimes: []
  },
  {
    name: "Cossett Creek Golf Course",
    city: "Brunswick, OH",
    area: "Cleveland area",
    latitude: 41.238009,
    longitude: -81.862849,
    bookingUrl: "https://cossettcreek.com/book-a-tee-time/",
    bookingNote: "Open Cossett Creek's booking page to check current availability and pricing.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "Official course site uses dynamic pricing; current rates vary by date, time, demand, and availability and are shown when booking.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://cossettcreek.com/book-a-tee-time/"
    },
    teeTimes: []
  },
  {
    name: "Fowler's Mill Golf Course",
    city: "Chesterland, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.513225,
    longitude: -81.274878,
    bookingUrl: "https://golfback.com/#/course/44064327-b8aa-4c4b-8976-fcc697699926",
    bookingNote: "Open Fowler's Mill's booking page to check current availability and pricing.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The official course site directs golfers to its GolfBack booking flow and does not publish a fixed daily-rate sheet. Current pricing varies by tee time and is shown when booking.",
      publicSummary: "Current pricing varies by tee time and is shown when booking.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://fowlersmillgc.com/"
    },
    teeTimes: []
  },
  {
    name: "Painesville Country Club",
    city: "Painesville, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.708011,
    longitude: -81.218395,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/20201/3971#teetimes",
    bookingNote: "Open Painesville Country Club's booking page to check current availability and pricing.",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "The official published rate page is labeled 2025. Check the booking page or contact the course for current 2026 pricing.",
      publicSummary: "Check the booking page or contact the course for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.painesvillecountryclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Mill Creek Golf Course",
    city: "Boardman, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.030779,
    longitude: -80.698454,
    bookingUrl: "https://www.millcreekmetroparks.org/mill-creek-golf-course/",
    bookingLabel: "Call / Info",
    bookingNote: "Open Mill Creek's official course page or call (330) 740-7112 for current booking options.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "The official MetroParks page labels the section as 2026 rates but also says rates are effective January 2025. It lists Mahoning County resident 18-hole riding at $46 and non-resident 18-hole riding at $54; confirm current pricing because the effective-date language conflicts.",
      publicSummary: "Mahoning County resident 18-hole riding is listed at $46 and non-resident 18-hole riding at $54. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.millcreekmetroparks.org/mill-creek-golf-course/"
    },
    teeTimes: []
  },
  {
    name: "Knoll Run Golf Course",
    city: "Lowellville, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.064616,
    longitude: -80.563371,
    bookingUrl: "https://www.knollrun.com/rates-booking",
    bookingNote: "Open Knoll Run's booking page to check current availability and pricing.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official page lists weekday 9 holes $20 and 18 holes $40; weekend/holiday 9 holes $24 before 1 PM and $22 after, and 18 holes $48 before 1 PM and $42 after. Cart fees are additional. No clear effective year is shown.",
      publicSummary: "Weekday 9 holes are listed at $20 and 18 holes at $40; weekend and holiday pricing varies by time. Cart fees are additional. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.knollrun.com/rates-booking"
    },
    teeTimes: []
  },
  {
    name: "The Links at Firestone Farms",
    city: "Columbiana, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.887366,
    longitude: -80.639382,
    bookingUrl: "https://www.linksatfirestonefarms.com/bookteetimes",
    bookingNote: "Open Firestone Farms' booking page to check current availability and pricing.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 posted: Monday-Thursday 18 holes riding $49, Friday $55, weekend before 3 PM $65, and weekend after 3 PM $55; 9-hole riding rates range from $27 to $40.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.linksatfirestonefarms.com/golf-course/rates"
    },
    teeTimes: []
  },
  {
    name: "Lake Milton Golf Club",
    city: "Lake Milton, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.083626,
    longitude: -80.970047,
    bookingUrl: "https://lake-milton-golf-club.book.teeitup.com/",
    bookingNote: "Open Lake Milton's booking page to check current availability and pricing.",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "The official published rate page is labeled 2025. Check the booking page or call 330-557-1077 for current 2026 pricing.",
      publicSummary: "Check the booking page or call 330-557-1077 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.lakemiltongolfclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Lyons Den Golf",
    city: "Canal Fulton, OH",
    area: "Canton / Stark County",
    latitude: 40.871466,
    longitude: -81.605995,
    bookingUrl: "http://www.lyonsdengolf.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call 330-854-9910 to confirm current availability and rates.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 peak-season posted: weekday 9 holes riding $26 and 18 holes riding $36; weekend before 1 PM 9 riding $30 and 18 riding $48; after 1 PM 9 riding $28 and 18 riding $42.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.lyonsdengolf.com/id14.html"
    },
    teeTimes: []
  },
  {
    name: "Pleasant Hill Golf Course — Chardon",
    city: "Chardon, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.496787,
    longitude: -81.187607,
    bookingUrl: "https://pleasanthillgolfchardon.teesnap.net/",
    bookingNote: "Open Pleasant Hill Chardon's booking page to check current availability and pricing.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official Chardon course page lists Monday and Wednesday-Friday 18 holes with cart $38, Tuesday $28, and Saturday-Sunday $48; senior/junior 18 with cart $30. The rate table does not clearly state an effective year.",
      publicSummary: "Monday and Wednesday-Friday 18 with cart is listed at $38, Tuesday at $28, and weekends at $48; senior and junior 18 with cart is $30. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://playphgc.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Olde Dutch Mill Golf Course",
    city: "Lake Milton, OH",
    area: "Eastern Northeast Ohio",
    latitude: 41.13039,
    longitude: -80.977581,
    bookingUrl: "https://b51e062b-8ea4-4ca1-aa13-c449a771989b.book.teeitup.com/",
    bookingNote: "Open Olde Dutch Mill's booking page to check current availability and pricing.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "No fixed current rate sheet was found on an official course site. Use the course's official TeeItUp booking page or call 330-654-4100 to confirm current pricing.",
      publicSummary: "Use the official booking page or call 330-654-4100 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://b51e062b-8ea4-4ca1-aa13-c449a771989b.book.teeitup.com/"
    },
    teeTimes: []
  },
  {
    name: "EagleSticks Golf Club",
    city: "Zanesville, OH",
    area: "Other Northeast Ohio",
    latitude: 39.8985115,
    longitude: -82.0368666,
    bookingUrl: "https://eaglesticks-golf-club.book.teeitup.com/",
    bookingNote: "Open EagleSticks' booking page to check current availability and pricing.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "EagleSticks uses its official TeeItUp booking page for current pricing, which can vary by date, time, demand, and availability. Confirm current pricing with the course before booking.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.eaglesticks.com/tee-times/"
    },
    teeTimes: []
  },
  {
    name: "Crystal Springs Golf Club",
    city: "Hopewell, OH",
    area: "Other Northeast Ohio",
    latitude: 39.96383,
    longitude: -82.17212,
    bookingUrl: "https://crystalspringsgc.com/teetimes/",
    bookingNote: "Open Crystal Springs' booking page to check current availability and pricing.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 summer rates: weekday 18 holes $38 riding / $32 walking and weekend 18 holes $46 riding / $42 walking. Confirm current pricing with the course before booking.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://crystalspringsgc.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "The Virtues Golf Club",
    city: "Nashport, OH",
    area: "Other Northeast Ohio",
    latitude: 40.085709,
    longitude: -82.234534,
    bookingUrl: "https://apimanager-cc37.clubcaddie.com/webapi/view/iafdabab",
    bookingNote: "Open The Virtues' booking page to check current availability and pricing.",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The Virtues uses its official booking page for current pricing, which can vary by date, time, demand, and availability. Confirm current pricing with the course before booking.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://thevirtuesgolfclub.com/book-a-tee-time/"
    },
    teeTimes: []
  },
  {
    name: "Zanesville Jaycees Public Golf Course",
    city: "Zanesville, OH",
    area: "Other Northeast Ohio",
    latitude: 39.981761,
    longitude: -81.923787,
    bookingUrl: "https://www.zanesvillejcgolfcourse.com/Contact.html",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 452-1860 to confirm current availability and rates.",
    rateInfo: {
      status: "call",
      statusLabel: "Call for rates",
      summary: "No current official rate sheet was found. Call (740) 452-1860 to confirm current pricing with the course before booking.",
      publicSummary: "Call (740) 452-1860 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.zanesvillejcgolfcourse.com/Contact.html"
    },
    teeTimes: []
  },
  {
    name: "Fuller's Fairways",
    city: "Zanesville, OH",
    area: "Other Northeast Ohio",
    latitude: 39.9336299,
    longitude: -81.9141207,
    bookingUrl: "https://fullersfairways.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 452-9830 to confirm current availability and rates.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official rate page lists 9 holes with cart $21, 18 holes with cart $35, and weekday senior 18 with cart $28; the page does not state an effective year. Confirm current pricing with the course before booking.",
      publicSummary: "9 holes with cart is listed at $21, 18 holes with cart at $35, and weekday senior 18 with cart at $28. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://fullersfairways.com/?page_id=55"
    },
    teeTimes: []
  },
  {
    name: "Vista Golf Course",
    city: "Nashport, OH",
    area: "Other Northeast Ohio",
    latitude: 40.03405,
    longitude: -82.03438,
    bookingUrl: "https://vistagolfcourse.teesnap.net/",
    bookingNote: "Open Vista's booking page to check current availability and pricing.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official rate page lists weekday adult 18 holes $34 riding / $24 walking and weekend 18 holes $38 riding / $28 walking; the page does not state an effective year. Confirm current pricing with the course before booking.",
      publicSummary: "Weekday adult 18 holes is listed at $34 riding or $24 walking; weekend 18 holes is $38 riding or $28 walking. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.vistagolfcourse.com/Golf-Course-Details/Rates/"
    },
    teeTimes: []
  },
  {
    name: "Cadiz Country Club",
    city: "Cadiz, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.248599,
    longitude: -80.986166,
    bookingUrl: "https://cadizcountryclub.com/tee-times/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 942-3610 to confirm current availability and rates.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official tee-time page lists Monday 18 with cart $35, Tuesday-Friday $40, and weekend/holiday $50; the page does not state an effective year. Confirm current pricing with the course before booking.",
      publicSummary: "Monday 18 with cart is listed at $35, Tuesday-Friday at $40, and weekends and holidays at $50. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://cadizcountryclub.com/tee-times/"
    },
    teeTimes: []
  },
  {
    name: "Beaver Creek Meadows Golf Course",
    city: "Lisbon, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.7153082,
    longitude: -80.6343783,
    bookingUrl: "https://beavercreekmeadowsgolf.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 385-3020 to confirm current availability and rates.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official page lists weekday 18 holes $35 riding / $22 walking and weekend 18 holes $45 riding / $27 walking; the page does not state an effective year. Confirm current pricing with the course before booking.",
      publicSummary: "Weekday 18 holes is listed at $35 riding or $22 walking; weekend 18 holes is $45 riding or $27 walking. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://beavercreekmeadowsgolf.com/"
    },
    teeTimes: []
  },
  {
    name: "Turkana Golf Course",
    city: "East Liverpool, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.691578,
    longitude: -80.556343,
    bookingUrl: "https://www.turkanagolf.com/home/welcome-to-turkana-golf-course",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 382-1187 to confirm current availability and rates.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "2026 summer rates: weekday 18 holes with half cart $33 and weekend 18 holes with half cart $44. Confirm current pricing with the course before booking.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://www.turkanagolf.com/rates"
    },
    teeTimes: []
  },
  {
    name: "Historic Highlands Golf Course",
    city: "East Liverpool, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.658237,
    longitude: -80.620529,
    bookingUrl: "https://historichighlandsgc.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 831-4466 to confirm current availability and rates.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "Official fee page lists 9 holes $21 with cart / $14 walking and 18 holes $31 with cart / $23 walking; the page does not state an effective year. Confirm current pricing with the course before booking.",
      publicSummary: "9 holes is listed at $21 with cart or $14 walking; 18 holes is $31 with cart or $23 walking. Confirm current pricing with the course.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://historichighlandsgc.com/golf-fees-at-historic-highlands-golf-course/"
    },
    teeTimes: []
  },
  {
    name: "East Palestine Country Club",
    city: "Negley, OH",
    area: "Eastern Northeast Ohio",
    latitude: 40.775188,
    longitude: -80.54095,
    bookingUrl: "https://epcountryclub.com/tee-times",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 426-9761 to confirm current availability and rates.",
    rateInfo: {
      status: "rate-page",
      statusLabel: "See rate page",
      summary: "The official public-golf rate page does not show readable dollar figures. Call (330) 426-9761 to confirm current pricing with the course before booking.",
      publicSummary: "Call (330) 426-9761 for current pricing.",
      checked: "Aug 5, 2026",
      sourceUrl: "https://epcountryclub.com/rates"
    },
    teeTimes: []
  },
  {
    name: "Denison Golf Club",
    city: "Granville, OH",
    area: "Other Northeast Ohio",
    latitude: 40.067648,
    longitude: -82.507656,
    bookingUrl: "https://denisongolfclub.teesnap.net/",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The official 2026 rate page states that tee-time prices use dynamic pricing and change based on demand, availability, weather, and other factors.",
      publicSummary: "Pricing varies by date, time, demand, and availability. Check the booking page for current rates.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://www.denisongolfclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Mastodon Golf Club",
    city: "Heath, OH",
    area: "Other Northeast Ohio",
    latitude: 39.982103,
    longitude: -82.453578,
    bookingUrl: "https://apimanager-cc24.clubcaddie.com/webapi/view/fiedabab",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "The official 2026 rate page lists non-member 18-hole rates of $40 with cart or $22 walking on weekdays and $45 with cart or $28 walking on weekends and holidays. Nine-hole, senior, and junior rates are also posted.",
      publicSummary: "18 holes is listed at $40 with cart or $22 walking on weekdays and $45 with cart or $28 walking on weekends and holidays.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://www.mastodongolfclub.com/rates.html"
    },
    teeTimes: []
  },
  {
    name: "Raccoon Valley Golf Club",
    city: "Granville, OH",
    area: "Other Northeast Ohio",
    latitude: 40.064878,
    longitude: -82.558811,
    bookingUrl: "https://golfback.com/#/course/b7f0a474-6a1e-4577-a348-c51a0a731e6a",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The course-owned website confirms public play and routes golfers to a course-specific GolfBack tee sheet; no separate current fixed-rate page was found.",
      publicSummary: "Current pricing is shown through the course's online booking page.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://www.raccoongolf.com/"
    },
    teeTimes: []
  },
  {
    name: "The Links at Echo Springs",
    city: "Johnstown, OH",
    area: "Other Northeast Ohio",
    latitude: 40.144406,
    longitude: -82.557366,
    bookingUrl: "https://player.eagleclubsystems.online/#/tee-slot?dbname=echosprings20231101",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The course-owned website confirms public play and links to a course-specific Eagle Club tee sheet; no separate current daily-rate page was found.",
      publicSummary: "Check the booking page for current availability and pricing.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://thelinksatechosprings.org/"
    },
    teeTimes: []
  },
  {
    name: "Cumberland Trail Golf Club",
    city: "Pataskala, OH",
    area: "Other Northeast Ohio",
    latitude: 39.972801,
    longitude: -82.695145,
    bookingUrl: "https://t-r-public-be.book.teeitup.golf/",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "The official rate page is effective February 1, 2026. In-season 18-hole cart rates range from $48 to $65 Monday through Thursday, $58.50 to $69 Friday, and $55 to $82.25 on weekends and holidays depending on time.",
      publicSummary: "In-season 18-hole cart rates range from $48 to $65 Monday through Thursday, $58.50 to $69 Friday, and $55 to $82.25 on weekends and holidays.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://www.cumberlandtgc.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Irish Hills Golf Club",
    city: "Mount Vernon, OH",
    area: "Other Northeast Ohio",
    latitude: 40.33451,
    longitude: -82.46183,
    bookingUrl: "https://irishhillsgc.teesnap.net/",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "The official site lists off-season rates beginning October 19 at $25 for 18 holes and $20 for 9 holes, with or without a cart, but does not state an effective year for that rate block.",
      publicSummary: "Off-season rates are listed at $25 for 18 holes and $20 for 9 holes, with or without a cart. Check the booking page for current in-season pricing.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://www.irishhillsgolfclub.com/"
    },
    teeTimes: []
  },
  {
    name: "Lancaster Golf Club",
    city: "Lancaster, OH",
    area: "Other Northeast Ohio",
    identityKey: "lancaster-golf-club-lancaster-oh",
    latitude: 39.680016,
    longitude: -82.617194,
    bookingUrl: "https://player.eagleclubsystems.online/#/tee-slot?dbname=lancaster20231201",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "The current official daily-rate page for the public course at 3100 Country Club Rd SW lists 18-hole cart rates of $48 to $60 Monday through Thursday, $60 to $78 Friday, and $72 to $92 on weekends and holidays depending on time. Walking rates are lower.",
      publicSummary: "18-hole cart rates range from $48 to $60 Monday through Thursday, $60 to $78 Friday, and $72 to $92 on weekends and holidays depending on time.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://lancastergolfclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Clover Valley Golf Club",
    city: "Johnstown, OH",
    area: "Other Northeast Ohio",
    latitude: 40.175468,
    longitude: -82.727296,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/19770/2457",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The official rate policy states that non-member tee times are available and online prices use dynamic pricing adjusted for demand, availability, weather, and other factors.",
      publicSummary: "Pricing varies by date, time, demand, and availability. Check the booking page for current rates.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://www.clovervalleygolfclub.com/rates-and-policies/"
    },
    teeTimes: []
  },
  {
    name: "Kyber Run Golf Course",
    city: "Johnstown, OH",
    area: "Other Northeast Ohio",
    latitude: 40.131728,
    longitude: -82.695918,
    bookingUrl: "https://player.eagleclubsystems.online/#/tee-slot?dbname=kyberrun20231101",
    rateInfo: {
      status: "rate-page",
      statusLabel: "See rate page",
      summary: "The course-owned website confirms public play and provides an official rates page, but the current dollar figures were not available as readable page text during the review.",
      publicSummary: "Check the course's rates page or booking page for current pricing.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://kyberrungolf.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Coyote Run Golf Course",
    city: "Thornville, OH",
    area: "Other Northeast Ohio",
    identityKey: "coyote-run-golf-course-thornville-oh",
    latitude: 39.821901,
    longitude: -82.387407,
    bookingUrl: "https://golfback.com/#/course/24590b6f-3269-46dd-838a-f515d42394a8",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "The current official rate page lists weekday riding rates of $22 for 9 holes and $34 for 18 holes, plus weekend riding rates of $24 for 9 holes and $36 for 18 holes, but does not state an effective year.",
      publicSummary: "Weekday riding rates are listed at $22 for 9 holes and $34 for 18 holes; weekend riding rates are $24 and $36.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://coyoterungolfcourse.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Harbor Hills Country Club",
    city: "Hebron, OH",
    area: "Other Northeast Ohio",
    identityKey: "harbor-hills-country-club-hebron-oh",
    latitude: 39.934877,
    longitude: -82.444434,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/index/18728",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "The official public rate sheet is still labeled 2025 and should not be treated as current 2026 pricing. The course continues to offer public online tee times.",
      publicSummary: "Check the booking page or call 740-928-3596 for current pricing.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://harborhillscountryclub.com/rates/"
    },
    teeTimes: []
  },
  {
    name: "Wildfire Golf Club",
    city: "New Concord, OH",
    area: "Other Northeast Ohio",
    identityKey: "wildfire-golf-club-new-concord-oh",
    latitude: 40.033419,
    longitude: -81.756927,
    bookingUrl: "https://sites.google.com/site/wildfiregolfclub/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 826-7606 to confirm current availability and rates.",
    rateInfo: {
      status: "rate-page",
      statusLabel: "See rate page",
      summary: "The course-owned fee page says its 2026 fees remain from 2024, but the dollar amounts are presented as image content rather than readable page text.",
      publicSummary: "Check the course's fee page or call (740) 826-7606 for current pricing.",
      checked: "Aug 10, 2026",
      sourceUrl: "https://sites.google.com/site/wildfiregolfclub/green-fees"
    },
    teeTimes: []
  },
  {
    name: "Wick Recreation Area Par 3",
    city: "Youngstown, OH",
    area: "Eastern Northeast Ohio",
    courseType: "par3",
    latitude: 41.103579,
    longitude: -80.652016,
    bookingUrl: "https://www.millcreekmetroparks.org/wick-recreation-area/par-3-golf-course/",
    bookingLabel: "Call / Info",
    bookingNote: "Call 330-740-7114 or check the course page for current availability.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "The official 2026 Golf and Recreation Planner lists 9 holes at $11 for Mahoning County residents, $12 for non-residents, and $10 for seniors and juniors.",
      publicSummary: "9 holes are listed at $11 for Mahoning County residents, $12 for non-residents, and $10 for seniors and juniors.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://reservations.millcreekmetroparks.org/documents/2026/01/2026/1/2026_Mill_Creek_Golf___Recreation_Planner_-_web.pdf"
    },
    teeTimes: []
  },
  {
    name: "Wilson Road Golf Course",
    city: "Columbus, OH",
    area: "Central Ohio",
    courseType: "executive",
    latitude: 39.988086,
    longitude: -83.107699,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/21525/8204#teetimes",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The official city course page links to ForeUp for current tee times and date-specific pricing for this 9-hole, par-30 executive course.",
      publicSummary: "Check the booking page for current pricing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://crpdgolf.com/golf-courses/wilson-road/"
    },
    teeTimes: []
  },
  {
    name: "Blacklick Woods Golf Course",
    city: "Reynoldsburg, OH",
    area: "Central Ohio",
    additionalLayouts: [{ type: "executive" }],
    latitude: 39.940936,
    longitude: -82.802648,
    bookingUrl: "https://metroparks.teesnap.net/",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "The official 2026 rate page lists current Championship Course fees and separate Learning Course fees. The Learning Course is a separately playable 9-hole, par-29 short course.",
      publicSummary: "Current rates are listed for both the Championship and Learning courses.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://blacklickwoodsgc.com/rates-fees/"
    },
    teeTimes: []
  },
  {
    name: "Little Bear Golf Club",
    city: "Lewis Center, OH",
    area: "Central Ohio",
    courseType: "par3",
    latitude: 40.16133,
    longitude: -82.99605,
    bookingUrl: "https://apimanager-cc6.clubcaddie.com/webapi/view/ggfdabab",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "The official tee-time page states that public Par 3 play opened for the 2026 season at a $15 walking rate, with limited public days.",
      publicSummary: "Public walking play is listed at $15. Check the booking page for available public days and times.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.littlebearohio.com/tee-times"
    },
    teeTimes: []
  },
  {
    name: "Robin’s Nest Par 3",
    city: "Cleves, OH",
    area: "Southwest Ohio",
    courseType: "par3",
    latitude: 39.214971,
    longitude: -84.763362,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/20987/6389#teetimes",
    rateInfo: {
      status: "undated",
      statusLabel: "See booking page",
      summary: "The course-owned site provides online tee times, but no clearly dated current public rate sheet was verified.",
      publicSummary: "Check the booking page for current pricing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://robinsnestgolf.com/contact-us/"
    },
    teeTimes: []
  },
  {
    name: "Little Miami Golf Center",
    city: "Newtown, OH",
    area: "Southwest Ohio",
    additionalLayouts: [{ type: "par3" }],
    latitude: 39.132228,
    longitude: -84.356503,
    bookingUrl: "https://ohgreatparksweb.myvscloud.com/webtrac/web/search.html?module=GR&numberofholes=9&secondarycode=9009",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "The official Great Parks page confirms a 9-hole regulation course and separately playable 9-hole Par 3, but the visible hours and rate section is labeled 2025.",
      publicSummary: "Check the booking page or call 513-561-5650 for current pricing. The Par 3 course is booked by phone.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.greatparks.org/parks/little-miami-scenic-corridor/little-miami-golf-center"
    },
    teeTimes: []
  },
  {
    name: "Meadow Links & Golf Academy",
    city: "Cincinnati, OH",
    area: "Southwest Ohio",
    courseType: "executive",
    latitude: 39.276562,
    longitude: -84.544653,
    bookingUrl: "https://ohgreatparksweb.myvscloud.com/webtrac/web/search.html?module=GR&numberofholes=9&secondarycode=9010",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "The official page confirms a public 9-hole mid-length short course and online tee times, but the visible hours and rate section is labeled 2025.",
      publicSummary: "Check the booking page for current pricing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.greatparks.org/parks/winton-woods/meadow-links-golf-academy"
    },
    teeTimes: []
  },
  {
    name: "Green Hills Golf Course",
    city: "Clyde, OH",
    area: "Northwest Ohio",
    additionalLayouts: [{ type: "par3" }],
    latitude: 41.289173,
    longitude: -82.975141,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/21253#/teetimes",
    rateInfo: {
      status: "rate-page",
      statusLabel: "See rate page",
      summary: "The official site publishes 2026 rates as images and confirms the separately playable 9-hole Executive West Par 3 course.",
      publicSummary: "Current rates are posted. Check the rate or booking page for pricing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.greenhillsgolf.com/rates"
    },
    teeTimes: []
  },
  {
    name: "Wee Links at SportsOhio",
    city: "Dublin, OH",
    area: "Central Ohio",
    courseType: "par3",
    latitude: 40.097848,
    longitude: -83.188348,
    bookingUrl: "https://sportsohio.org/play/sports-activities/golf/",
    bookingLabel: "Call / Info",
    bookingNote: "Call 614-791-3002 or check the Golf Center page before visiting.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "The current course-owned page lists 9-hole Wee Links rates of $16 for adults and $14 for juniors Monday-Thursday, and $18 for adults and $16 for juniors Friday-Sunday, without an effective year.",
      publicSummary: "Posted rates are available, but confirm current pricing with the course before playing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://sportsohio.org/play/sports-activities/golf/"
    },
    teeTimes: []
  },
  {
    name: "Fernbank Golf Course",
    city: "Cincinnati, OH",
    area: "Southwest Ohio",
    courseType: "executive",
    latitude: 39.121494,
    longitude: -84.697436,
    bookingUrl: "https://fernbankgolfcourse.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call 513-941-9960 or check the course page before visiting; play is generally first come, first served outside league times.",
    rateInfo: {
      status: "stale",
      statusLabel: "Confirm current rates",
      summary: "The course-owned page lists daily pricing effective January 1, 2025. Current 2026 membership information is posted, but current daily fees were not separately confirmed.",
      publicSummary: "Call 513-941-9960 or check the course page for current daily pricing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://fernbankgolfcourse.com/"
    },
    teeTimes: []
  },
  {
    name: "Reeves Golf Course",
    city: "Cincinnati, OH",
    area: "Southwest Ohio",
    additionalLayouts: [{ type: "par3" }],
    latitude: 39.116194,
    longitude: -84.412138,
    bookingUrl: "https://www.cincygolf.org/book-a-tee-time/",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "The official page lists current public rate tables for the 18-hole course and separately playable 9-hole Par 3, but the tables do not state an effective year.",
      publicSummary: "Public rates are listed for both the 18-hole course and the separate 9-hole Par 3. Confirm current pricing when booking.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.cincygolf.org/reeves/"
    },
    teeTimes: []
  },
  {
    name: "Little Apple Golf Course",
    city: "Bellville, OH",
    area: "Central Ohio",
    courseType: "executive",
    latitude: 40.603835,
    longitude: -82.513529,
    bookingUrl: "https://mid-ohio-golf-group.book.teeitup.com/?course=9965",
    rateInfo: {
      status: "booking",
      statusLabel: "See booking page",
      summary: "The course-owned site links to TeeItUp for current tee times and date-specific pricing for this public short course.",
      publicSummary: "Check the booking page for current pricing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.littleapplegolfcourse.com/"
    },
    teeTimes: []
  },
  {
    name: "Shady Grove Golf Course",
    city: "Findlay, OH",
    area: "Northwest Ohio",
    courseType: "par3",
    latitude: 41.055324,
    longitude: -83.580769,
    bookingUrl: "https://www.shadygrovegolf.com/golf-course/rates",
    bookingLabel: "Call / Info",
    bookingNote: "Call 419-422-7494 or check the course page before visiting; tee times are not normally required.",
    rateInfo: {
      status: "undated",
      statusLabel: "Rates listed",
      summary: "The course-owned page lists 9 holes at $10 and 18 holes at $15 but does not state an effective year.",
      publicSummary: "Posted rates are available, but confirm current pricing with the course before playing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.shadygrovegolf.com/green-fees-and-specials"
    },
    teeTimes: []
  },
  {
    name: "Armco Park Golf Course",
    city: "Lebanon, OH",
    area: "Southwest Ohio",
    courseType: "executive",
    latitude: 39.45419,
    longitude: -84.28452,
    bookingUrl: "https://www.warrencountyparks.com/activities/golf/golf/",
    bookingLabel: "Call / Info",
    bookingNote: "Drop-in play only. Call 513-695-3980 for current availability or larger groups.",
    rateInfo: {
      status: "posted",
      statusLabel: "Rates listed",
      summary: "The current official park page lists adult greens fees of $16 for the front 9, $18 for the back 9, and $24 for 18 holes, with separate senior, junior, military, and cart rates.",
      publicSummary: "Adult greens fees are listed at $16 for the front 9, $18 for the back 9, and $24 for 18 holes. Cart fees are separate.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.warrencountyparks.com/activities/golf/golf/"
    },
    teeTimes: []
  },
  {
    name: "Meadowood Golf Course",
    city: "Westlake, OH",
    area: "Cleveland area",
    courseType: "par3",
    latitude: 41.430335,
    longitude: -81.952746,
    bookingUrl: "https://www.cityofwestlake.org/o/rcwl/page/meadowood-golf-course",
    bookingLabel: "Call / Info",
    bookingNote: "Call 440-835-6442 or check the city course page for current availability.",
    rateInfo: {
      status: "call",
      statusLabel: "Call for rates",
      summary: "The City of Westlake confirms that Meadowood remains open as two 9-hole Par 3 layouts during 2026 construction, with reduced rates, but a dependable current public rate table was not verified.",
      publicSummary: "Temporary Par 3 configuration during 2026 construction. Call 440-835-6442 for current pricing.",
      checked: "Aug 12, 2026",
      sourceUrl: "https://www.cityofwestlake.org/page/newsletter-webapp"
    },
    teeTimes: []
  }
];

const TRACKING_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbzBXBZrOxn6hbDb-GWPV7oORMCG4sb1VTYGKLEpRmezpPYmuL0vmwdPKwvl-qpOsgYtgg/exec";
const TRACKING_FORM_ENDPOINT = "https://formspree.io/f/mpqbbkpr";
const OUTDOOR_SESSION_ID_KEY = "teeDropOutdoorSessionId";
const OUTDOOR_VISIT_STORAGE_KEY = "teeDropOutdoorVisits";
const OUTDOOR_VISIT_RECORDED_PREFIX = "teeDropOutdoorVisitRecorded:";
const FEATURED_ROTATION_START_DATE = "2026-06-01";
const FEATURED_BEFORE_ROTATION = "Wilkshire Golf Course";
const FEATURED_COURSE_ROTATION = [
  "River Greens Golf Course",
  "Oak Shadows Golf Club",
  "Raymond C. Firestone Golf Course",
  "Raintree Golf & Event Center",
  "Black Gold Golf Club",
  "The Quarry Golf Club and Venue",
  "The Legends of Massillon",
  "Hickory Flats Golf Course",
  "Arrowhead Golf Club & Banquet Center",
  "Sable Creek Golf Course",
  "Carroll Meadows Golf Course",
  "Great Trail Golf Course",
  "Pleasant View Golf Club",
  "The Pines Golf Club",
  "Chippewa Golf Club",
  "Edgewater Golf Course",
  "Chenoweth Golf Course",
  "Mud Run Golf Course",
  "J. Edward Good Park Golf Course",
  "Meadowlake Golf Course",
  "Riceland Golf Course",
  "Round Lake Golf Course",
  "Salt Fork State Park Golf Course",
  "Bunker Hill Golf Course",
  "Coppertop Golf Club",
  "Grey Hawk Golf Club",
  "Sweetbriar Golf Club",
  "Pleasant Hill Golf Course",
  "Deer Ridge Golf Club"
];

const SEPTEMBER_COURSE_OF_MONTH = "Spring Valley Golf Course";
const COURSE_BATCH_SIZE = 10;

let userLocation = null;
let visibleCourseLimit = COURSE_BATCH_SIZE;

const courseCount = document.querySelector("#courseCount");
const courseStats = document.querySelector("#courseStats");
const teeTimeList = document.querySelector("#teeTimeList");
const resultCount = document.querySelector("#resultCount");
const locationStatus = document.querySelector("#locationStatus");
const monthlyCourse = document.querySelector("#monthlyCourse");
const featuredCourse = document.querySelector("#featuredCourse");
const template = document.querySelector("#teeTimeTemplate");
const courseSearch = document.querySelector("#courseSearch");
const currentYear = document.querySelector("#currentYear");
const courseFilters = document.querySelector("#courseFilters");
const showMoreButton = document.querySelector("#showMoreCourses");
const backToFiltersButton = document.querySelector("#backToFiltersButton");
const filters = {
  courseType: document.querySelector("#courseTypeFilter"),
  booking: document.querySelector("#bookingFilter"),
  area: document.querySelector("#areaFilter")
};

document.querySelector("#useLocationButton").addEventListener("click", getUserLocation);
Object.values(filters).forEach((filter) => filter.addEventListener("change", resetCourseLimitAndRender));
courseSearch.addEventListener("input", resetCourseLimitAndRender);
showMoreButton.addEventListener("click", showMoreCourses);
backToFiltersButton.addEventListener("click", scrollToCourseFilters);
window.addEventListener("scroll", updateBackToFiltersButton, { passive: true });
document.addEventListener("click", handleCourseLinkClick);

updateHomepageStats();
updateFooterYear();
renderTeeTimes();
renderCourseOfMonth();
renderFeaturedCourse();
trackOutdoorPageView();

function getUserLocation() {
  if (!navigator.geolocation) {
    locationStatus.textContent = "Location is not available in this browser.";
    return;
  }

  locationStatus.textContent = "Finding your location...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      locationStatus.textContent = "Showing courses closest to your current location.";
      resetCourseLimitAndRender();
    },
    () => {
      locationStatus.textContent = "Could not access location. You can still browse the course list.";
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
  );
}

function resetCourseLimitAndRender() {
  visibleCourseLimit = COURSE_BATCH_SIZE;
  renderTeeTimes();
}

function showMoreCourses() {
  visibleCourseLimit += COURSE_BATCH_SIZE;
  renderTeeTimes();
}

function renderTeeTimes() {
  teeTimeList.textContent = "";

  const bookingType = filters.booking.value;
  const area = filters.area.value;
  const courseType = filters.courseType.value;
  const searchTerm = courseSearch.value.trim().toLowerCase();

  const availableTimes = courses
    .flatMap((course) => getDisplayTimes(course).map((teeTime) => {
      const distance = userLocation
        ? calculateDistance(userLocation.latitude, userLocation.longitude, course.latitude, course.longitude)
        : null;

      return { ...teeTime, course, distance };
    }))
    .filter((teeTime) => matchesSearch(teeTime.course, searchTerm))
    .filter((teeTime) => bookingType === "all" || getBookingType(teeTime.course) === bookingType)
    .filter((teeTime) => matchesArea(teeTime.course, area))
    .filter((teeTime) => matchesCourseType(teeTime.course, courseType))
    .sort((a, b) => {
      if (userLocation) {
        return a.distance - b.distance;
      }

      if (a.bookingOnly || b.bookingOnly) {
        return Number(a.bookingOnly) - Number(b.bookingOnly);
      }

      return parseTime(a.time) - parseTime(b.time);
    });

  if (availableTimes.length === 0) {
    resultCount.textContent = "0 courses found";
    showMoreButton.hidden = true;
    showMoreButton.disabled = true;
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No courses match those filters yet.";
    teeTimeList.append(empty);
    updateBackToFiltersButton();
    return;
  }

  const visibleTimes = availableTimes.slice(0, visibleCourseLimit);
  const visibleCount = visibleTimes.length;

  resultCount.textContent = `Showing ${visibleCount} of ${availableTimes.length} course${availableTimes.length === 1 ? "" : "s"}`;
  showMoreButton.hidden = visibleCount >= availableTimes.length;
  showMoreButton.disabled = visibleCount >= availableTimes.length;
  showMoreButton.setAttribute(
    "aria-label",
    `Show 10 more matching courses. Showing ${visibleCount} of ${availableTimes.length} courses.`
  );

  visibleTimes.forEach((teeTime, index) => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector(".tee-card");
    const bookingType = card.querySelector(".booking-type");
    const courseBookingType = getBookingType(teeTime.course);

    card.querySelector("h2").textContent = teeTime.course.name;
    const isNearby = Boolean(userLocation) && teeTime.distance !== null && index < 3;

    card.querySelector(".course-meta").textContent = `${teeTime.course.city} - ${teeTime.course.area}`;
    article.classList.toggle("call-card", courseBookingType === "call");
    article.classList.toggle("online-card", courseBookingType === "online");
    article.classList.toggle("nearby-card", isNearby);
    bookingType.textContent = courseBookingType === "call" ? "Call course" : "Online";
    bookingType.classList.toggle("call", courseBookingType === "call");
    getCourseTypeBadges(teeTime.course).forEach((badge) => {
      const typeBadge = document.createElement("span");
      typeBadge.className = "course-type-badge";
      typeBadge.textContent = badge;
      card.querySelector(".card-badges").prepend(typeBadge);
    });
    const distancePill = card.querySelector(".distance-pill");
    distancePill.classList.toggle("nearby", isNearby);
    distancePill.hidden = teeTime.distance === null;
    distancePill.textContent = teeTime.distance === null
      ? "Use location"
      : `${isNearby ? "Nearby - " : ""}${teeTime.distance.toFixed(1)} mi`;
    card.querySelector(".time").textContent = getBookingOptionText(teeTime.course);
    card.querySelector(".price").textContent = getRateStatusText(teeTime.course);
    const rateInfo = card.querySelector(".rate-info");
    rateInfo.textContent = getRateInfoText(teeTime.course);
    rateInfo.hidden = !teeTime.course.rateInfo;
    card.querySelector(".note").textContent = getCourseNoteText(teeTime.course, teeTime.note);
    const bookLink = card.querySelector(".book-link");
    bookLink.href = teeTime.course.bookingUrl;
    bookLink.textContent = getCourseButtonText(teeTime.course);
    bookLink.setAttribute("aria-label", `Open course link for ${teeTime.course.name}`);
    addTrackingData(bookLink, teeTime.course, "course list");
    teeTimeList.append(card);
  });

  updateBackToFiltersButton();
}

function scrollToCourseFilters() {
  courseFilters.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateBackToFiltersButton() {
  const resultStart = teeTimeList.getBoundingClientRect().top + window.scrollY;
  const shouldShow = window.scrollY > resultStart + 320;
  backToFiltersButton.hidden = !shouldShow;
}

function renderCourseOfMonth() {
  const course = courses.find((item) => item.name === SEPTEMBER_COURSE_OF_MONTH);

  if (!course || !monthlyCourse) {
    return;
  }

  monthlyCourse.innerHTML = `
    <img
      class="monthly-course-image"
      src="assets/spring-valley-september-course-of-month.webp"
      alt="Sunset over Spring Valley Golf Course's rolling fairways, pond, trees and distant hills"
    >
    <div class="monthly-course-copy">
      <p class="alert-kicker">September Course of the Month</p>
      <h2>${course.name}</h2>
      <p>Spring Valley is a hidden gem featuring rolling elevation changes, tree-lined holes, beautifully striped fairways and scenic views throughout the property. Elevated tee shots, water, fescue and challenging greens provide plenty of variety.</p>
    </div>
    <div class="monthly-course-action">
      <a class="book-link" href="${course.bookingUrl}" target="_blank" rel="noreferrer" aria-label="View Spring Valley booking">View Booking</a>
    </div>
  `;

  addTrackingData(monthlyCourse.querySelector(".book-link"), course, "course of the month");
}

function renderFeaturedCourse() {
  const course = courses.find((item) => item.name === getFeaturedCourseName()) || courses[0];
  const buttonText = getCourseButtonText(course);

  featuredCourse.innerHTML = `
    <div class="featured-copy">
      <p class="alert-kicker">Course of the week</p>
      <h2>${course.name}</h2>
      <p>${course.city} - ${getFeaturedCourseNoteText(course)}</p>
      ${course.rateInfo ? `<p class="featured-rate">${getRateInfoText(course)}</p>` : ""}
    </div>
    <div class="featured-details">
      <div>
        <span>Booking option</span>
        <strong>${getBookingOptionText(course)}</strong>
      </div>
      <div>
        <span>Rate information</span>
        <strong>${getRateStatusText(course)}</strong>
      </div>
      <a class="book-link" href="${course.bookingUrl}" target="_blank" rel="noreferrer">${buttonText}</a>
    </div>
  `;

  addTrackingData(featuredCourse.querySelector(".book-link"), course, "course of the week");
}

function addTrackingData(link, course, source) {
  link.dataset.courseName = course.name;
  link.dataset.courseCity = course.city;
  link.dataset.courseSource = source;
  link.dataset.bookingType = getBookingType(course);
}

function handleCourseLinkClick(event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  const link = event.target.closest(".book-link[data-course-name]");

  if (!link) {
    return;
  }

  trackCourseClick({
    course: link.dataset.courseName,
    city: link.dataset.courseCity,
    source: link.dataset.courseSource,
    bookingType: link.dataset.bookingType,
    url: link.href
  });
}

function trackCourseClick(click) {
  const createdAt = new Date();
  const clickedAtEastern = formatEasternDateTime(createdAt);
  const clickRecord = {
    eventType: "course_click",
    course: click.course,
    city: click.city,
    source: click.source,
    trafficSource: getTrafficSource(),
    bookingType: click.bookingType,
    bookingUrl: click.url,
    message: `Course click: ${click.course} from ${click.source} at ${clickedAtEastern} Eastern`,
    page: location.href,
    timeEastern: clickedAtEastern,
    clickedAtEastern,
    createdAt: createdAt.toISOString()
  };

  if (isLocalPreview() || (!TRACKING_SHEET_ENDPOINT && !TRACKING_FORM_ENDPOINT)) {
    saveLocalCourseClick(clickRecord);
    return;
  }

  if (TRACKING_SHEET_ENDPOINT) {
    sendSheetClick(clickRecord);
    return;
  }

  sendFormspreeClick(clickRecord, click.course);
}

function trackOutdoorPageView() {
  const trafficSource = getTrafficSource();
  const visitKey = `${OUTDOOR_VISIT_RECORDED_PREFIX}${trafficSource}`;

  if (sessionStorage.getItem(visitKey)) {
    return;
  }

  const record = {
    eventType: "outdoor_page_view",
    trafficSource,
    page: location.pathname,
    referrer: getOutdoorReferrer(),
    sessionId: getOutdoorSessionId(),
    createdAt: new Date().toISOString()
  };

  sessionStorage.setItem(visitKey, "true");

  if (isLocalPreview() || !TRACKING_SHEET_ENDPOINT) {
    saveLocalOutdoorVisit(record);
    return;
  }

  fetch(TRACKING_SHEET_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(record),
    mode: "no-cors",
    keepalive: true
  }).catch(() => {});
}

function sendSheetClick(clickRecord) {
  fetch(TRACKING_SHEET_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(clickRecord),
    mode: "no-cors",
    keepalive: true
  }).catch(() => {});
}

function sendFormspreeClick(clickRecord, courseName) {
  fetch(TRACKING_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...clickRecord,
      _subject: `Tee Drop course click: ${courseName}`
    }),
    keepalive: true
  }).catch(() => {});
}

function matchesSearch(course, searchTerm) {
  if (!searchTerm) {
    return true;
  }

  return `${course.name} ${course.city}`.toLowerCase().includes(searchTerm);
}

function matchesArea(course, area) {
  return area === "all" || course.area === area;
}

function matchesCourseType(course, courseType) {
  if (courseType === "all") {
    return true;
  }

  return getPrimaryCourseType(course) === courseType ||
    (course.additionalLayouts || []).some((layout) => layout.type === courseType);
}

function getPrimaryCourseType(course) {
  return course.courseType || "regulation";
}

function getCourseTypeBadges(course) {
  const badges = [];
  const primaryType = getPrimaryCourseType(course);

  if (primaryType === "par3") {
    badges.push("PAR 3");
  } else if (primaryType === "executive") {
    badges.push("EXECUTIVE");
  }

  (course.additionalLayouts || []).forEach((layout) => {
    if (layout.type === "par3") {
      badges.push("PAR 3 AVAILABLE");
    } else if (layout.type === "executive") {
      badges.push("EXECUTIVE AVAILABLE");
    }
  });

  return badges;
}

function updateHomepageStats() {
  courseCount.textContent = courses.length;
  courseStats.textContent = `${courses.length} public courses \u00b7 Rate information reviewed monthly \u00b7 Book direct`;
}

function updateFooterYear() {
  currentYear.textContent = new Date().getFullYear();
}

function getLatestRateCheckedDate() {
  return courses
    .filter((course) => course.rateInfo && course.rateInfo.checked)
    .map((course) => new Date(`${course.rateInfo.checked} 00:00:00`))
    .filter((date) => !Number.isNaN(date.getTime()))
    .sort((a, b) => b - a)[0] || null;
}

function formatDisplayDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function getFeaturedCourseName(date = new Date()) {
  const daysSinceStart = getDaysBetweenDates(FEATURED_ROTATION_START_DATE, getEasternDateString(date));

  if (daysSinceStart < 0) {
    return FEATURED_BEFORE_ROTATION;
  }

  const weekIndex = Math.floor(daysSinceStart / 7) % FEATURED_COURSE_ROTATION.length;
  return FEATURED_COURSE_ROTATION[weekIndex];
}

function formatEasternDateTime(date) {
  if (typeof Intl === "undefined" || !Intl.DateTimeFormat) {
    return formatLocalDateTime(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(date);
}

function formatLocalDateTime(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}, ${hours}:${minutes} ${period}`;
}

function getEasternDateString(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "America/New_York",
    year: "numeric"
  }).formatToParts(date);
  const dateParts = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
}

function getDaysBetweenDates(startDateString, endDateString) {
  return (getDateValue(endDateString) - getDateValue(startDateString)) / 86400000;
}

function getDateValue(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
}

function isLocalPreview() {
  return location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);
}

function getTrafficSource() {
  const source = new URLSearchParams(location.search).get("source");

  if (!source) {
    return "direct";
  }

  return source.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 60) || "direct";
}

function getOutdoorReferrer() {
  if (!document.referrer) {
    return "";
  }

  try {
    const referrer = new URL(document.referrer);
    return `${referrer.origin}${referrer.pathname}`;
  } catch {
    return "";
  }
}

function getOutdoorSessionId() {
  const existingSessionId = sessionStorage.getItem(OUTDOOR_SESSION_ID_KEY);

  if (existingSessionId) {
    return existingSessionId;
  }

  const sessionId = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `outdoor-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  sessionStorage.setItem(OUTDOOR_SESSION_ID_KEY, sessionId);
  return sessionId;
}

function saveLocalCourseClick(click) {
  const clicks = JSON.parse(localStorage.getItem("teeDropCourseClicks") || "[]");

  clicks.push(click);
  localStorage.setItem("teeDropCourseClicks", JSON.stringify(clicks));
}

function saveLocalOutdoorVisit(record) {
  const visits = JSON.parse(localStorage.getItem(OUTDOOR_VISIT_STORAGE_KEY) || "[]");

  visits.push(record);
  localStorage.setItem(OUTDOOR_VISIT_STORAGE_KEY, JSON.stringify(visits));
}

function getBookingType(course) {
  return course.bookingLabel ? "call" : "online";
}

function getCourseButtonText(course) {
  return getBookingType(course) === "call" ? "Call / Info" : "View Booking";
}

function getBookingOptionText(course) {
  return getBookingType(course) === "call" ? "Call course" : "Online booking";
}

function getRateStatusText(course) {
  if (!course.rateInfo) {
    return "Not listed";
  }

  if (course.rateInfo.statusLabel) {
    return course.rateInfo.statusLabel;
  }

  const summary = course.rateInfo.summary.toLowerCase();

  if (/\$\d/.test(course.rateInfo.summary) || summary.includes("rates posted")) {
    return "Rates listed";
  }

  if (summary.includes("not posted") || summary.includes("not listed")) {
    return "Not listed";
  }

  return "See booking page";
}

function getCourseNoteText(course, note) {
  const fallbackNote = getBookingType(course) === "call"
    ? "Call the course to confirm current availability and rates."
    : "Open the course's booking page to check current availability and pricing.";
  const sourceNote = note || course.bookingNote || fallbackNote;

  if (getBookingType(course) === "call") {
    return sourceNote.replace("to check booking options.", "to confirm current availability and rates.");
  }

  return sourceNote
    .replace(/Open ([^.]+?(?:'s|')) course link to check booking options\./g, "Open $1 booking page to check current availability and pricing.")
    .replace("Open the course link to check booking options.", "Open the course's booking page to check current availability and pricing.");
}

function getFeaturedCourseNoteText(course) {
  if (getBookingType(course) === "call") {
    return getCourseNoteText(course, course.bookingNote);
  }

  return "Open the course's booking page to check current availability and pricing.";
}

function getRateInfoText(course) {
  if (!course.rateInfo) {
    return "";
  }

  return `Rate info: ${course.rateInfo.publicSummary || course.rateInfo.summary}`;
}

function getDisplayTimes(course) {
  if (course.teeTimes.length > 0) {
    return course.teeTimes;
  }

  const firstAvailable = course.firstAvailable || {};
  const isCallOnly = getBookingType(course) === "call";

  return [
    {
      day: "any",
      time: firstAvailable.time || (isCallOnly ? "Call course" : "Open link"),
      players: firstAvailable.players || 4,
      price: firstAvailable.price ?? null,
      note: firstAvailable.note || course.bookingNote || "Open the course link to check booking options.",
      bookingOnly: true
    }
  ];
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusMiles * c;
}

function getTimeWindow(time) {
  const hour = parseTime(time) / 60;

  if (hour < 11) {
    return "morning";
  }

  if (hour < 15) {
    return "midday";
  }

  return "afternoon";
}

function parseTime(time) {
  const [clock, period] = time.split(" ");
  const [rawHour, rawMinutes] = clock.split(":").map(Number);
  const hour = period === "PM" && rawHour !== 12 ? rawHour + 12 : rawHour === 12 && period === "AM" ? 0 : rawHour;

  return hour * 60 + rawMinutes;
}

function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}



