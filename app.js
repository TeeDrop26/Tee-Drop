const courses = [
  {
    name: "Zoar Village Golf Course",
    city: "Zoar, OH",
    latitude: 40.6122153,
    longitude: -81.418408,
    bookingUrl: "https://zoar-village-golf-course.book.teeitup.com/?course=4264",
    rateInfo: {
      summary: "Online tee sheet. Pricing may vary by date, time, and availability.",
      checked: "Jul 17, 2026"
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
    latitude: 40.50251,
    longitude: -81.423778,
    bookingUrl: "https://www.oakshadowsgolf.com/tee-times/",
    rateInfo: {
      summary: "Weekend posted: 18 w/cart $60; 9 w/cart $38. Twilight after 2: 18 $45; 9 $30.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Wilkshire Golf Course",
    city: "Bolivar, OH",
    latitude: 40.636738059988,
    longitude: -81.44818665347,
    bookingUrl: "https://wilkshire-golf-course.book.teeitup.com/",
    rateInfo: {
      summary: "2026 posted: weekday 18 w/cart $45, 9 w/cart $30; weekend/holiday 18 $65, 9 PM $40; after 2 18 $55.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "River Greens Golf Course",
    city: "West Lafayette, OH",
    latitude: 40.277816,
    longitude: -81.69626,
    bookingUrl: "https://apimanager-cc30.clubcaddie.com/webapi/view/eifdabab",
    rateInfo: {
      summary: "Online tee sheet. Pricing may vary by date, time, and availability.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Hickory Flats Golf Course",
    city: "West Lafayette, OH",
    latitude: 40.25775,
    longitude: -81.749625,
    bookingUrl: "https://www.golfnow.com/tee-times/facility/6066-hickory-flats-golf-course/search",
    bookingNote: "Open Hickory Flats' course link to check booking options.",
    rateInfo: {
      summary: "GolfNow tee sheet. Online pricing can vary by date, time, and availability.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "The Legends of Massillon",
    city: "Massillon, OH",
    latitude: 40.767691,
    longitude: -81.497323,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/22058",
    teeTimes: []
  },
  {
    name: "Five Waters Golf Course",
    city: "Midvale, OH",
    latitude: 40.429115,
    longitude: -81.368983,
    bookingUrl: "http://www.5watersgolf.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 922-2182 to check booking options.",
    teeTimes: []
  },
  {
    name: "Big Bend Golf Course",
    city: "Uhrichsville, OH",
    latitude: 40.394,
    longitude: -81.355,
    bookingUrl: "https://bigbendgolfcourse.com/golf1-2243",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 229-7660 to check booking options.",
    rateInfo: {
      summary: "Posted: 18 riding $22; 9 riding $15. Weekend: 18 $25; 9 $18.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Black Gold Golf Club",
    city: "Sugarcreek, OH",
    latitude: 40.526565,
    longitude: -81.618241,
    bookingUrl: "https://blackgoldgc.teesnap.net/",
    rateInfo: {
      summary: "Posted: weekday 18 w/GPS cart $49, 9 $37; weekend 18 $70, 9 $47. Online may show best price.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "The Quarry Golf Club and Venue",
    city: "Canton, OH",
    latitude: 40.772227,
    longitude: -81.298935,
    bookingUrl: "https://vip.teeitup.com/the-quarry/tee-times/",
    rateInfo: {
      summary: "Online tee sheet. Rates are shown through the booking page when available.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Carroll Meadows Golf Course",
    city: "Carrollton, OH",
    latitude: 40.5884705,
    longitude: -81.0784467,
    bookingUrl: "https://www.chronogolf.com/club/carroll-meadows-golf-course",
    rateInfo: {
      summary: "Chronogolf tee sheet. Rates are not posted on the public overview page.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Great Trail Golf Course",
    city: "Minerva, OH",
    latitude: 40.72279,
    longitude: -81.080017,
    bookingUrl: "https://apimanager-cc20.clubcaddie.com/webapi/view/ggfdabab",
    rateInfo: {
      summary: "Weekend posted: AM 18 riding $55, PM 18 $39; AM 9 riding $35, PM 9 $28.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Arrowhead Golf Club & Banquet Center",
    city: "North Canton, OH",
    latitude: 40.862,
    longitude: -81.426,
    bookingUrl: "https://arrowhead-golf-club-4.book-v2.teeitup.golf/",
    bookingNote: "1500 Rogwin Cir SW. Open the course link to check booking options.",
    rateInfo: {
      summary: "2026 posted: daily 18 riding $55, 9 riding $36; senior riding 18 $37, 9 $27.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Raintree Golf & Event Center",
    city: "Uniontown, OH",
    latitude: 40.969,
    longitude: -81.425,
    bookingUrl: "https://www.golfraintree.com/book-a-tee-time/",
    rateInfo: {
      summary: "Dynamic pricing posted. Online rates can change by demand and availability.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Raymond C. Firestone Golf Course",
    city: "Akron, OH",
    latitude: 41.014555552933,
    longitude: -81.50688001586,
    bookingUrl: "https://www.firestone9.com/book-a-tee-time/",
    bookingNote: "Public 9-hole course. Open the course link to check booking options.",
    rateInfo: {
      summary: "Weekend/holiday posted: ride 9 $32, walk 9 $22; ride 18 $47, walk 18 $33.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Sable Creek Golf Course",
    city: "Hartville, OH",
    latitude: 40.950798,
    longitude: -81.279248,
    bookingUrl: "https://sablecreekgolf.com/book-a-tee-time/",
    rateInfo: {
      summary: "Weekend posted: AM 18 w/cart $62; AM 9 w/cart $40. After 1: 18 $47; 9 $33.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Pleasant View Golf Club",
    city: "Paris, OH",
    latitude: 40.83752,
    longitude: -81.126503,
    bookingUrl: "https://www.chronogolf.com/club/pleasant-view-golf-club-ohio",
    rateInfo: {
      summary: "Chronogolf tee sheet. Rates are not posted on the public overview page.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Fire Ridge Golf Course",
    city: "Millersburg, OH",
    latitude: 40.553110960225,
    longitude: -81.90175181534,
    bookingUrl: "https://www.fireridgegolfcourse.com/contact-us",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 674-3921 to check booking options.",
    rateInfo: {
      summary: "Weekend/holiday posted: morning 18 w/cart $49; 9 w/cart $38. After 2: 18 $43; 9 $33.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "The Pines Golf Club",
    city: "Orrville, OH",
    latitude: 40.836,
    longitude: -81.782,
    bookingUrl: "https://www.chronogolf.com/club/the-pines-golf-club-ohio",
    rateInfo: {
      summary: "Chronogolf tee sheet. Rates are not posted on the public overview page.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Hawks Nest Golf Club",
    city: "Creston, OH",
    latitude: 40.919587,
    longitude: -81.902738,
    bookingUrl: "https://www.chronogolf.com/club/hawks-nest-golf-club-ohio",
    teeTimes: []
  },
  {
    name: "Chippewa Golf Club",
    city: "Doylestown, OH",
    latitude: 40.947362,
    longitude: -81.657214,
    bookingUrl: "https://www.chippewagolfclub.com/tee-times/",
    rateInfo: {
      summary: "Weekend/holiday posted: before 2 18 riding $75, 9 riding $40; after 2 18 $57, 9 $35.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Spring Valley Golf Course",
    city: "East Sparta, OH",
    latitude: 40.723104,
    longitude: -81.391027,
    bookingUrl: "https://www.svgcanton.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 484-1886 to check booking options.",
    rateInfo: {
      summary: "Weekend/holiday posted: 7-1 18 w/cart $55, 9 $40; 1-4 18 $47, 9 $32; after 4 18 $33, 9 $23.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Clearview Golf Club",
    city: "East Canton, OH",
    latitude: 40.779,
    longitude: -81.286,
    bookingUrl: "https://www.clearviewgolfclub.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 488-0404 to check booking options.",
    rateInfo: {
      summary: "Weekend/holiday before noon posted: 18 riding $56; 9 riding $33.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Edgewater Golf Course",
    city: "Minerva, OH",
    latitude: 40.7298,
    longitude: -81.1054,
    bookingUrl: "https://book.edgewatergolfcourse.com/",
    teeTimes: []
  },
  {
    name: "Lake Mohawk Golf Club",
    city: "Malvern, OH",
    latitude: 40.666,
    longitude: -81.189,
    bookingUrl: "https://www.lake-mohawk.org/",
    bookingLabel: "Call / Info",
    bookingNote: "Community course. Contact Lake Mohawk before planning a round.",
    teeTimes: []
  },
  {
    name: "The Elms Country Club",
    city: "North Lawrence, OH",
    latitude: 40.839,
    longitude: -81.631,
    bookingUrl: "https://www.facebook.com/people/The-Elms-Country-Club/100063908499193/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 833-2668 to check booking options.",
    teeTimes: []
  },
  {
    name: "Black Diamond Golf Course",
    city: "Millersburg, OH",
    latitude: 40.61443,
    longitude: -81.868461,
    bookingUrl: "https://www.ohiogolf.com/golfcourses/black-diamond-golf",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 674-6110 to check booking options.",
    teeTimes: []
  },
  {
    name: "Mayfair Country Club",
    city: "Green, OH",
    latitude: 40.964,
    longitude: -81.466,
    bookingUrl: "https://www.mayfaircountryclub.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 699-2209 or check the course site for current booking instructions.",
    rateInfo: {
      summary: "Saturday posted: 18 riding $52 early, $43 late morning, $40 after 1; 9 riding $34/$28/$25.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Chenoweth Golf Course",
    city: "Akron, OH",
    latitude: 40.990,
    longitude: -81.465,
    bookingUrl: "https://www.chenowethgolf.com/tee-times/",
    rateInfo: {
      summary: "Weekend posted: before 2 18 w/cart $62, 9 $35; 2-4 18 $50, 9 $30; after 4 18 $44, 9 $28.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Mud Run Golf Course",
    city: "Akron, OH",
    latitude: 41.032,
    longitude: -81.571,
    bookingUrl: "https://mud-run-golf-course.book.teeitup.com/?course=54f14d410c8ad60378b03844",
    teeTimes: []
  },
  {
    name: "J. Edward Good Park Golf Course",
    city: "Akron, OH",
    latitude: 41.095709,
    longitude: -81.578544,
    bookingUrl: "https://je-good-park-golf-course.book.teeitup.com/?course=54f14d410c8ad60378b03840",
    teeTimes: []
  },
  {
    name: "Meadowlake Golf Course",
    city: "Canton, OH",
    latitude: 40.839,
    longitude: -81.359,
    bookingUrl: "https://foreupsoftware.com/index.php/booking/21609/8341",
    teeTimes: []
  },
  {
    name: "Tannenhauf Golf Club",
    city: "Alliance, OH",
    latitude: 40.909,
    longitude: -81.184,
    bookingUrl: "https://tannenhaufgolf.net/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 823-4402 to check booking options.",
    teeTimes: []
  },
  {
    name: "Riceland Golf Course",
    city: "Orrville, OH",
    latitude: 40.7965129,
    longitude: -81.7649999,
    bookingUrl: "https://ricelandgolfcourse.com/book-a-tee-time/",
    rateInfo: {
      summary: "Weekend posted: 18 w/cart $48 before noon, $44 after noon; 9 w/cart $26.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Round Lake Golf Course",
    city: "Lakeville, OH",
    latitude: 40.629,
    longitude: -82.141,
    bookingUrl: "https://www.roundlakegolfcourse.com/",
    rateInfo: {
      summary: "Fri-Sun posted: 18 w/cart $46; 9 w/cart $30.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Big Dawg's Golf Course",
    city: "Minerva, OH",
    latitude: 40.730,
    longitude: -81.152,
    bookingUrl: "https://www.golflink.com/golf-courses/oh/minerva/big-dawg-s-golf-course",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 868-3294 to check booking options.",
    teeTimes: []
  },
  {
    name: "Salt Fork State Park Golf Course",
    city: "Lore City, OH",
    latitude: 40.0776634,
    longitude: -81.4692891,
    bookingUrl: "https://www.chronogolf.com/club/salt-fork-state-park-golf-course",
    teeTimes: []
  },
  {
    name: "Mulligan Springs Golf Course",
    city: "Mogadore, OH",
    latitude: 41.048564,
    longitude: -81.331005,
    bookingUrl: "https://www.facebook.com/MulliganSpringsGolfCourse/",
    bookingLabel: "Call / Info",
    bookingNote: "Par 3 course. Call (330) 628-5139 to check booking options.",
    teeTimes: []
  },
  {
    name: "Windmill Lakes Golf Club",
    city: "Ravenna, OH",
    latitude: 41.172989,
    longitude: -81.223061,
    bookingUrl: "https://www.chronogolf.com/club/windmill-lakes-golf-club",
    bookingNote: "Open Windmill Lakes' course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Turkeyfoot Lake Golf Links",
    city: "Akron, OH",
    latitude: 40.979,
    longitude: -81.543,
    bookingUrl: "https://turkeyfoot-lake-golf-links.book.teeitup.com/",
    bookingNote: "Open Turkeyfoot's course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Brookledge Golf Club",
    city: "Cuyahoga Falls, OH",
    latitude: 41.1516,
    longitude: -81.4665,
    bookingUrl: "https://www.brookledgegc.com/tee-times/",
    bookingNote: "Open Brookledge's course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Fox Den Golf Course",
    city: "Stow, OH",
    latitude: 41.184918,
    longitude: -81.407369,
    bookingUrl: "https://www.foxdengc.com/tee-times/",
    bookingNote: "Open Fox Den's course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Roses Run Country Club",
    city: "Stow, OH",
    latitude: 41.1856,
    longitude: -81.4542,
    bookingUrl: "https://www.rosesrun.com/tee-times/",
    bookingNote: "Open Roses Run's course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Boulder Creek Golf Club",
    city: "Streetsboro, OH",
    latitude: 41.2545609,
    longitude: -81.3259579,
    bookingUrl: "https://boulder-creek-golf-club-3.book.teeitup.com/",
    bookingNote: "Open Boulder Creek's course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Pine Hills Golf Club",
    city: "Hinckley, OH",
    latitude: 41.3213,
    longitude: -81.7855,
    bookingUrl: "https://pine-hills-golf-club-oh.book.teeitup.com/",
    bookingNote: "Open Pine Hills' course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Bunker Hill Golf Course",
    city: "Medina, OH",
    latitude: 41.2289,
    longitude: -81.8426,
    bookingUrl: "https://bunker-hill-golf-course.book.teeitup.com/",
    bookingNote: "Open Bunker Hill's course link to check booking options.",
    rateInfo: {
      summary: "2025-2026 golf rates posted on the course rates page.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Coppertop Golf Club",
    city: "Valley City, OH",
    latitude: 41.2399,
    longitude: -81.9188,
    bookingUrl: "https://coppertop-golf-club.book.teeitup.com/",
    bookingNote: "Open Coppertop's course link to check booking options.",
    rateInfo: {
      summary: "Green fees vary by day, time, and season; online deal times may be available.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Grey Hawk Golf Club",
    city: "LaGrange, OH",
    latitude: 41.2358,
    longitude: -82.1236,
    bookingUrl: "https://grey-hawk-golf-club.book.teeitup.com/",
    bookingNote: "Open Grey Hawk's course link to check booking options.",
    rateInfo: {
      summary: "Dynamic pricing posted. Online rates change by demand, season, time, and availability.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Sweetbriar Golf Club",
    city: "Avon Lake, OH",
    latitude: 41.4948,
    longitude: -82.0322,
    bookingUrl: "https://sweetbriar-golf-club-legacy-18.book.teeitup.com/",
    bookingNote: "Open Sweetbriar's course link to check booking options.",
    rateInfo: {
      summary: "Course site says to book online for the best available rates.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Pleasant Hill Golf Course",
    city: "Perrysville, OH",
    latitude: 40.6576,
    longitude: -82.2744,
    bookingUrl: "https://pleasanthillgolfcourse.com/green-fees",
    bookingLabel: "Call / Info",
    bookingNote: "Call (419) 938-5311 or check the course site for current tee times.",
    rateInfo: {
      summary: "Green fees page lists 9/18-hole walking and cart categories; confirm current prices before playing.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Deer Ridge Golf Club",
    city: "Bellville, OH",
    latitude: 40.6238,
    longitude: -82.5318,
    bookingUrl: "https://deerridge.quick18.com/",
    bookingNote: "Open Deer Ridge's course link to check booking options.",
    rateInfo: {
      summary: "Online tee sheet. Pricing may vary by date, time, and availability.",
      checked: "Jul 17, 2026"
    },
    teeTimes: []
  },
  {
    name: "Manakiki Golf Course",
    city: "Willoughby Hills, OH",
    latitude: 41.5802,
    longitude: -81.4319,
    bookingUrl: "https://www.chronogolf.com/club/manakiki-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  },
  {
    name: "The Flying B Golf Course",
    city: "Salem, OH",
    latitude: 40.9353,
    longitude: -80.8722,
    bookingUrl: "https://www.flyingbgolf.com/teetimes/",
    bookingNote: "Open The Flying B's course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Reserve Run Golf Course",
    city: "Poland, OH",
    latitude: 40.9852,
    longitude: -80.609,
    bookingUrl: "https://reserverun.cps.golf/",
    bookingNote: "Open Reserve Run's course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Sleepy Hollow Golf Course",
    city: "Brecksville, OH",
    latitude: 41.3044563,
    longitude: -81.6226271,
    bookingUrl: "https://www.chronogolf.com/club/sleepy-hollow-golf-course-ohio",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  },
  {
    name: "St. Denis Golf Club",
    city: "Chardon, OH",
    latitude: 41.5811,
    longitude: -81.2058,
    bookingUrl: "https://stdenisgolfclub.com/",
    bookingNote: "Open St. Denis' course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Big Met Golf Course",
    city: "Fairview Park, OH",
    latitude: 41.4338,
    longitude: -81.8487,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/big-met-golf-course-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Ironwood Golf Course",
    city: "Hinckley, OH",
    latitude: 41.2355,
    longitude: -81.745,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/ironwood-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Little Met Golf Course",
    city: "Cleveland, OH",
    latitude: 41.42,
    longitude: -81.8284,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/little-met-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Mastick Woods Golf Course",
    city: "Cleveland, OH",
    latitude: 41.4317,
    longitude: -81.8427,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/mastick-woods-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Seneca Golf Course",
    city: "Broadview Heights, OH",
    latitude: 41.3196,
    longitude: -81.6307,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/seneca-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Shawnee Hills Golf Course",
    city: "Bedford, OH",
    latitude: 41.3559,
    longitude: -81.512,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/shawnee-hills-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  },
  {
    name: "Washington Golf Course",
    city: "Newburgh Heights, OH",
    latitude: 41.4469,
    longitude: -81.6706,
    bookingUrl: "https://www.clevelandmetroparks.com/golf/courses/washington-golf-course",
    bookingNote: "Cleveland Metroparks course. Open the course link to check booking options.",
    teeTimes: []
  }
];

const TRACKING_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbzBXBZrOxn6hbDb-GWPV7oORMCG4sb1VTYGKLEpRmezpPYmuL0vmwdPKwvl-qpOsgYtgg/exec";
const TRACKING_FORM_ENDPOINT = "https://formspree.io/f/mpqbbkpr";
const FEATURED_ROTATION_START_DATE = "2026-05-25";
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
  "Hawks Nest Golf Club",
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

let userLocation = null;

document.querySelector("#courseCount").textContent = courses.length;

const teeTimeList = document.querySelector("#teeTimeList");
const resultCount = document.querySelector("#resultCount");
const locationStatus = document.querySelector("#locationStatus");
const featuredCourse = document.querySelector("#featuredCourse");
const template = document.querySelector("#teeTimeTemplate");
const courseSearch = document.querySelector("#courseSearch");
const filters = {
  booking: document.querySelector("#bookingFilter")
};

document.querySelector("#useLocationButton").addEventListener("click", getUserLocation);
Object.values(filters).forEach((filter) => filter.addEventListener("change", renderTeeTimes));
courseSearch.addEventListener("input", renderTeeTimes);
document.addEventListener("click", handleCourseLinkClick);

renderTeeTimes();
renderFeaturedCourse();

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
      renderTeeTimes();
    },
    () => {
      locationStatus.textContent = "Could not access location. You can still browse the course list.";
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
  );
}

function renderTeeTimes() {
  teeTimeList.textContent = "";

  const bookingType = filters.booking.value;
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
    .sort((a, b) => {
      if (userLocation) {
        return a.distance - b.distance;
      }

      if (a.bookingOnly || b.bookingOnly) {
        return Number(a.bookingOnly) - Number(b.bookingOnly);
      }

      return parseTime(a.time) - parseTime(b.time);
    });

  resultCount.textContent = `${availableTimes.length} course${availableTimes.length === 1 ? "" : "s"} found`;

  if (availableTimes.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No courses match those filters yet.";
    teeTimeList.append(empty);
    return;
  }

  availableTimes.forEach((teeTime, index) => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector(".tee-card");
    const bookingType = card.querySelector(".booking-type");
    const courseBookingType = getBookingType(teeTime.course);

    card.querySelector("h2").textContent = teeTime.course.name;
    const isNearby = Boolean(userLocation) && teeTime.distance !== null && index < 3;

    card.querySelector(".course-meta").textContent = teeTime.bookingOnly
      ? `${teeTime.course.city} - Course and booking link`
      : `${teeTime.course.city} - ${capitalize(teeTime.day)}`;
    article.classList.toggle("call-card", courseBookingType === "call");
    article.classList.toggle("online-card", courseBookingType === "online");
    article.classList.toggle("nearby-card", isNearby);
    bookingType.textContent = courseBookingType === "call" ? "Call course" : "Online";
    bookingType.classList.toggle("call", courseBookingType === "call");
    const distancePill = card.querySelector(".distance-pill");
    distancePill.classList.toggle("nearby", isNearby);
    distancePill.textContent = teeTime.distance === null
      ? "Use location"
      : `${isNearby ? "Nearby - " : ""}${teeTime.distance.toFixed(1)} mi`;
    card.querySelector(".time").textContent = teeTime.time;
    card.querySelector(".players").textContent = `${teeTime.players}`;
    card.querySelector(".price").textContent = teeTime.price === null ? "See rate info" : `$${teeTime.price}`;
    const rateInfo = card.querySelector(".rate-info");
    rateInfo.textContent = getRateInfoText(teeTime.course);
    rateInfo.hidden = !teeTime.course.rateInfo;
    card.querySelector(".note").textContent = teeTime.note;
    const bookLink = card.querySelector(".book-link");
    bookLink.href = teeTime.course.bookingUrl;
    bookLink.textContent = teeTime.course.bookingLabel || "Open Link";
    bookLink.setAttribute("aria-label", `Open course link for ${teeTime.course.name}`);
    addTrackingData(bookLink, teeTime.course, "course list");
    teeTimeList.append(card);
  });
}

function renderFeaturedCourse() {
  const course = courses.find((item) => item.name === getFeaturedCourseName()) || courses[0];
  const firstAvailable = getDisplayTimes(course)[0];
  const bookingType = getBookingType(course);

  featuredCourse.innerHTML = `
    <div class="featured-copy">
      <p class="alert-kicker">Course of the week</p>
      <h2>${course.name}</h2>
      <p>${course.city} - ${bookingType === "call" ? "Call the course to check booking options." : "Open the course link to check booking options."}</p>
      ${course.rateInfo ? `<p class="featured-rate">${getRateInfoText(course)}</p>` : ""}
    </div>
    <div class="featured-details">
      <div>
        <span>Booking options</span>
        <strong>${firstAvailable.time}</strong>
      </div>
      <div>
        <span>Booking</span>
        <strong>${bookingType === "call" ? "Call / Info" : "Online"}</strong>
      </div>
      <a class="book-link" href="${course.bookingUrl}" target="_blank" rel="noreferrer">${course.bookingLabel || "Open Link"}</a>
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

function saveLocalCourseClick(click) {
  const clicks = JSON.parse(localStorage.getItem("teeDropCourseClicks") || "[]");

  clicks.push(click);
  localStorage.setItem("teeDropCourseClicks", JSON.stringify(clicks));
}

function getBookingType(course) {
  return course.bookingLabel ? "call" : "online";
}

function getRateInfoText(course) {
  if (!course.rateInfo) {
    return "";
  }

  return `Rate info: ${course.rateInfo.summary} Checked ${course.rateInfo.checked}. Confirm with course before booking.`;
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



