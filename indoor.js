const indoorFacilities = [
  {
    name: "Beers and Birdies",
    city: "New Philadelphia, OH",
    area: "Tuscarawas County",
    latitude: 40.489717,
    longitude: -81.446651,
    bookingUrl: "https://clients.uschedule.com/beersandbirdies/booking",
    bookingLabel: "online",
    phone: "330-340-5985",
    simulatorTech: "Golfzon",
    priceSummary: "$35/hr weekday early bird; $40/hr regular and weekend",
    features: ["Food & Drink", "Lessons", "Leagues"],
    publicSummary: "Indoor golf with swing data, food and drinks, lessons, and league play in downtown New Philadelphia.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://www.beersandbirdiesohio.com/",
        "https://clients.uschedule.com/beersandbirdies/booking"
      ],
      notes: "The course-owned site publishes Golfzon details and current rates. Its certificate was not trusted by the automated browser, but the direct USchedule booking destination was independently identified."
    }
  },
  {
    name: "Willie's Custom Golf Center",
    city: "Strasburg, OH",
    area: "Tuscarawas County",
    latitude: 40.587608,
    longitude: -81.546019,
    bookingUrl: "https://www.williescustomgolf.com/simulators",
    bookingLabel: "call",
    phone: "330-324-5111",
    simulatorTech: "TrackMan 4",
    priceSummary: "1 player $34/hr; 2+ players $50/hr; indoor-to-outdoor bay $48/hr",
    features: ["Lessons", "Club Fitting", "Driving Range", "Practice Focused"],
    publicSummary: "TrackMan simulator play plus lessons, club fitting, and indoor-to-outdoor practice.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://www.williescustomgolf.com/simulators",
        "https://www.williescustomgolf.com/fittings",
        "https://www.williescustomgolf.com/range"
      ],
      notes: "The official simulator page directs golfers to call the pro shop to reserve."
    }
  },
  {
    name: "Under Par Indoor Golf",
    city: "Sugarcreek, OH",
    area: "Tuscarawas County",
    latitude: 40.484604,
    longitude: -81.667772,
    bookingUrl: "https://underparindoorgolf.square.site/contact-us",
    bookingLabel: "call",
    phone: "740-606-6047",
    features: [],
    publicSummary: "Contact Under Par directly for current simulator details, pricing, and reservations.",
    verification: {
      checked: "Aug 10, 2026",
      sources: ["https://underparindoorgolf.square.site/contact-us"],
      notes: "The first-party contact page verifies the active business and contact numbers. Simulator brand, bay count, and current pricing were not published from a current first-party source."
    }
  },
  {
    name: "Golf Garage Minerva",
    city: "Minerva, OH",
    area: "Canton / Stark County",
    latitude: 40.731291,
    longitude: -81.097407,
    bookingUrl: "https://ggminerva.com/fees%2Fprices",
    bookingLabel: "call",
    phone: "239-989-8681",
    priceSummary: "$35/hr per bay Tue-Thu; $40/hr per bay Fri-Sun",
    features: ["Food & Drink", "Memberships"],
    publicSummary: "Bay rentals are open to the public. A maximum of four players per bay is recommended; members may receive off-hours access.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://ggminerva.com/fees%2Fprices",
        "https://ggminerva.com/food-%26-drink",
        "https://ggminerva.com/terms-and-conditions"
      ],
      notes: "Public play is not labeled 24/7. The official site distinguishes public bay rentals from member off-hours access."
    }
  },
  {
    name: "Mishler Birdie Barn",
    city: "Millersburg, OH",
    area: "Wayne / Holmes County",
    latitude: 40.599294,
    longitude: -81.837536,
    bookingUrl: "https://www.mishlerbirdiebarn.com/#bookhere",
    bookingLabel: "online",
    phone: "330-231-4078",
    features: ["Food & Drink", "Putting Green", "Practice Focused"],
    publicSummary: "Practice with carry distance, club speed, swing path, and video replay, plus an indoor putting green and snack bar.",
    verification: {
      checked: "Aug 10, 2026",
      sources: ["https://www.mishlerbirdiebarn.com/"],
      notes: "The official site presents online booking and analytics. It does not clearly publish a current simulator brand or hourly price, so both are omitted."
    }
  },
  {
    name: "X-Golf North Canton",
    city: "Canton, OH",
    area: "Canton / Stark County",
    latitude: 40.84724,
    longitude: -81.423487,
    bookingUrl: "https://clients.uschedule.com/xgolfnorthcanton/booking",
    bookingLabel: "online",
    phone: "234-360-3086",
    simulatorTech: "X-Golf",
    bayCount: 8,
    priceSummary: "$30/hr Mon-Fri; $40/hr Saturday",
    features: ["Food & Drink", "Lessons", "Leagues", "Putting Green"],
    publicSummary: "Eight simulator bays with food, a full bar, lessons, leagues, and a large putting green.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://playxgolf.com/locations/x-golf-north-canton/",
        "https://clients.uschedule.com/xgolfnorthcanton/booking"
      ],
      notes: "The official location page and direct USchedule destination publish the current spring pricing and identify X-Golf North Canton."
    }
  },
  {
    name: "Tee It Up Canton",
    city: "North Canton, OH",
    area: "Canton / Stark County",
    latitude: 40.896444,
    longitude: -81.425057,
    bookingUrl: "https://clients.uschedule.com/teeitupcanton/booking",
    bookingLabel: "online",
    phone: "330-461-9840",
    simulatorTech: "Foresight / GSPro",
    bayCount: 4,
    priceSummary: "$30/hr per bay",
    features: ["Lessons", "Putting Green", "Practice Focused"],
    publicSummary: "A golf-focused practice facility with four bays, instruction, and a large putting green; no bar or restaurant.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://teeitupcanton.com/bay-rentals/",
        "https://clients.uschedule.com/teeitupcanton/booking"
      ],
      notes: "The official bay-rental page verifies technology, bay count, pricing, address, and online scheduling."
    }
  },
  {
    name: "The Back Nine Golf - North Canton",
    city: "Canton, OH",
    area: "Canton / Stark County",
    latitude: 40.873701,
    longitude: -81.331886,
    bookingUrl: "https://thebackninegolf.com/local/north-canton-oh/bookings/",
    bookingLabel: "online",
    phone: "234-999-9008",
    simulatorTech: "Full Swing",
    priceSummary: "Starting at $40/hr",
    features: ["24/7"],
    publicSummary: "Public 24/7 simulator access with no membership required.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://thebackninegolf.com/local/north-canton-oh/",
        "https://thebackninegolf.com/local/north-canton-oh/bookings/"
      ],
      notes: "The location markets itself as North Canton; its published street address is in Canton. Public booking and 24/7 access are facility claims."
    }
  },
  {
    name: "The Back Nine Golf - Wooster",
    city: "Wooster, OH",
    area: "Wayne / Holmes County",
    latitude: 40.850345,
    longitude: -81.946945,
    bookingUrl: "https://thebackninegolf.com/local/woosteroh/bookings/",
    bookingLabel: "online",
    phone: "330-236-8848",
    simulatorTech: "Full Swing",
    priceSummary: "Starting at $60/hr",
    features: ["24/7"],
    publicSummary: "Public 24/7 simulator access with no membership required.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://thebackninegolf.com/local/woosteroh/",
        "https://thebackninegolf.com/local/woosteroh/bookings/"
      ],
      notes: "The official location and booking pages identify Wooster, public play, Full Swing, 24/7 access, and current starting price."
    }
  },
  {
    name: "Ohio Golf Club",
    city: "Akron, OH",
    area: "Akron / Summit County",
    latitude: 41.00994,
    longitude: -81.491987,
    bookingUrl: "https://apimanager-cc29.clubcaddie.com/activities/view/hafdabab",
    bookingLabel: "online",
    phone: "330-958-0052",
    simulatorTech: "TrackMan 4",
    bayCount: 9,
    features: ["Food & Drink", "Lessons", "Leagues", "Club Fitting", "Putting Green", "Practice Focused"],
    publicSummary: "Nine private TrackMan bays, a 4,000-square-foot short-game area, instruction, fitting, leagues, and a full-service bar.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://www.ohiogolfclubindoor.com/",
        "https://apimanager-cc29.clubcaddie.com/activities/view/hafdabab"
      ],
      notes: "The official site verifies hourly rental and direct Club Caddie booking. A clean current non-member hourly price was not exposed, so no price is published."
    }
  },
  {
    name: "Tee Time Anytime",
    city: "Akron, OH",
    area: "Akron / Summit County",
    latitude: 41.075814,
    longitude: -81.522701,
    bookingUrl: "https://yourgolfbooking.com/venues/tee-time-anytime/booking/bays",
    bookingLabel: "online",
    simulatorTech: "TrackMan iO",
    bayCount: 1,
    priceSummary: "$40/hr Mon-Thu; $60/hr Fri-Sun",
    features: ["24/7", "Practice Focused"],
    publicSummary: "A private one-bay TrackMan studio available around the clock, with up to six people per booking.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://www.teetimeanytime247.com/",
        "https://yourgolfbooking.com/venues/tee-time-anytime/booking/bays"
      ],
      notes: "The official site currently identifies TrackMan iO, 24/7 private access, current rates, and a six-person maximum."
    }
  },
  {
    name: "X-Golf Fairlawn",
    city: "Akron, OH",
    area: "Akron / Summit County",
    latitude: 41.135492,
    longitude: -81.644977,
    bookingUrl: "https://xgolffairlawn.as.me/",
    bookingLabel: "online",
    phone: "330-576-3139",
    simulatorTech: "X-Golf",
    bayCount: 8,
    priceSummary: "$45-$60/hr depending on day and time",
    features: ["Food & Drink", "Lessons", "Leagues"],
    publicSummary: "Eight simulators with food, a full bar, PGA instruction, club fitting, and league play.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://playxgolf.com/locations/fairlawn/",
        "https://xgolffairlawn.as.me/"
      ],
      notes: "The official location page publishes current simulator pricing and links to the Acuity booking page."
    }
  },
  {
    name: "The Corner Club",
    city: "Akron / Bath, OH",
    area: "Akron / Summit County",
    latitude: 41.15295,
    longitude: -81.633427,
    bookingUrl: "https://cornerclubgolf.com/contact/",
    bookingLabel: "call",
    simulatorTech: "Full Swing Pro 2.0",
    bayCount: 4,
    priceSummary: "$45/hr Sun and Tue-Thu; $55/hr Fri-Sat",
    features: ["Food & Drink", "Lessons"],
    operatingStatus: "Appointment Only \u2014 Summer 2026",
    publicSummary: "Four Full Swing simulators with a bar, restaurant, and lessons. Contact the facility for a summer appointment.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://cornerclubgolf.com/",
        "https://cornerclubgolf.com/rates/",
        "https://cornerclubgolf.com/technology/",
        "https://cornerclubgolf.com/contact/"
      ],
      notes: "The official site states appointment-only operation for Summer 2026. The card intentionally does not imply normal walk-in availability."
    }
  },
  {
    name: "1899 Indoor Golf",
    city: "Twinsburg, OH",
    area: "Akron / Summit County",
    latitude: 41.341579,
    longitude: -81.417626,
    bookingUrl: "https://www.sevenrooms.com/reservations/1899golfreminderville?duration-picker=true",
    bookingLabel: "online",
    phone: "330-840-7146",
    simulatorTech: "TrackMan 4",
    priceSummary: "$50/hr off-peak; $70/hr peak",
    features: ["Food & Drink", "Lessons", "Leagues"],
    publicSummary: "Twinsburg's 1899 location offers 250+ courses, food and a full bar, lessons, and indoor leagues.",
    verification: {
      checked: "Aug 10, 2026",
      sources: [
        "https://www.1899golf.com/indoor-golf",
        "https://www.sevenrooms.com/reservations/1899golfreminderville?duration-picker=true"
      ],
      notes: "Only the active Twinsburg location is included. A former second location is intentionally excluded."
    }
  }
];

const INDOOR_TRACKING_ENDPOINT = "https://script.google.com/macros/s/AKfycbzBXBZrOxn6hbDb-GWPV7oORMCG4sb1VTYGKLEpRmezpPYmuL0vmwdPKwvl-qpOsgYtgg/exec";

let indoorUserLocation = null;

const indoorSearch = document.querySelector("#indoorSearch");
const indoorBookingFilter = document.querySelector("#indoorBookingFilter");
const indoorFeatureFilters = [...document.querySelectorAll(".feature-filters input")];
const indoorLocationButton = document.querySelector("#indoorLocationButton");
const indoorLocationStatus = document.querySelector("#indoorLocationStatus");
const indoorResultCount = document.querySelector("#indoorResultCount");
const indoorFacilityList = document.querySelector("#indoorFacilityList");
const indoorFacilityTemplate = document.querySelector("#indoorFacilityTemplate");
const indoorStats = document.querySelector("#indoorStats");
const indoorCurrentYear = document.querySelector("#indoorCurrentYear");

indoorSearch.addEventListener("input", renderIndoorFacilities);
indoorBookingFilter.addEventListener("change", renderIndoorFacilities);
indoorFeatureFilters.forEach((filter) => filter.addEventListener("change", renderIndoorFacilities));
indoorLocationButton.addEventListener("click", getIndoorUserLocation);
document.addEventListener("click", handleIndoorLinkClick);

indoorStats.textContent = `${indoorFacilities.length} indoor golf locations \u00b7 Book direct`;
indoorCurrentYear.textContent = new Date().getFullYear();
renderIndoorFacilities();

function renderIndoorFacilities() {
  indoorFacilityList.textContent = "";

  const searchTerm = indoorSearch.value.trim().toLowerCase();
  const bookingType = indoorBookingFilter.value;
  const selectedFeatures = indoorFeatureFilters
    .filter((filter) => filter.checked)
    .map((filter) => filter.value);

  const matchingFacilities = indoorFacilities
    .map((facility) => ({
      facility,
      distance: indoorUserLocation
        ? calculateIndoorDistance(
            indoorUserLocation.latitude,
            indoorUserLocation.longitude,
            facility.latitude,
            facility.longitude
          )
        : null
    }))
    .filter(({ facility }) => matchesIndoorSearch(facility, searchTerm))
    .filter(({ facility }) => bookingType === "all" || facility.bookingLabel === bookingType)
    .filter(({ facility }) => selectedFeatures.every((feature) => facility.features.includes(feature)))
    .sort((a, b) => indoorUserLocation ? a.distance - b.distance : 0);

  indoorResultCount.textContent = `${matchingFacilities.length} indoor location${matchingFacilities.length === 1 ? "" : "s"}`;

  if (matchingFacilities.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "No indoor golf locations match those filters yet.";
    indoorFacilityList.append(emptyState);
    return;
  }

  matchingFacilities.forEach(({ facility, distance }) => {
    const card = indoorFacilityTemplate.content.cloneNode(true);
    const article = card.querySelector(".indoor-card");
    const bookingBadge = card.querySelector(".indoor-booking-type");
    const distanceBadge = card.querySelector(".indoor-distance");

    card.querySelector(".indoor-meta").textContent = `${facility.city} - ${facility.area}`;
    card.querySelector("h2").textContent = facility.name;

    article.classList.toggle("call-card", facility.bookingLabel === "call");
    bookingBadge.textContent = facility.bookingLabel === "online" ? "Online booking" : "Call / info";
    bookingBadge.classList.toggle("call", facility.bookingLabel === "call");

    if (distance !== null) {
      distanceBadge.hidden = false;
      distanceBadge.textContent = `${distance.toFixed(1)} mi`;
    }

    setOptionalText(card, ".indoor-operating-status", facility.operatingStatus);
    setOptionalDetail(card, ".indoor-tech-detail", ".indoor-tech", facility.simulatorTech);
    setOptionalDetail(card, ".indoor-bay-detail", ".indoor-bays", facility.bayCount ? String(facility.bayCount) : "");
    setOptionalDetail(card, ".indoor-price-detail", ".indoor-price", facility.priceSummary);

    const featureList = card.querySelector(".indoor-feature-list");
    facility.features.forEach((feature) => {
      const badge = document.createElement("span");
      badge.textContent = feature;
      featureList.append(badge);
    });
    featureList.hidden = facility.features.length === 0;

    card.querySelector(".indoor-summary").textContent = facility.publicSummary;
    card.querySelector(".indoor-booking-note").textContent = getIndoorBookingNote(facility);

    const bookingLink = card.querySelector(".indoor-book-link");
    bookingLink.href = facility.bookingUrl;
    bookingLink.textContent = facility.bookingLabel === "online" ? "View Booking" : "Call / Info";
    bookingLink.setAttribute("aria-label", `${bookingLink.textContent} for ${facility.name}`);
    bookingLink.dataset.facilityName = facility.name;
    bookingLink.dataset.facilityCity = facility.city;
    bookingLink.dataset.bookingType = facility.bookingLabel;

    indoorFacilityList.append(card);
  });
}

function getIndoorUserLocation() {
  if (!navigator.geolocation) {
    indoorLocationStatus.textContent = "Location is not available in this browser.";
    return;
  }

  indoorLocationStatus.textContent = "Finding your location...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      indoorUserLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      indoorLocationStatus.textContent = "Showing indoor golf locations closest to your current location.";
      renderIndoorFacilities();
    },
    () => {
      indoorLocationStatus.textContent = "Could not access location. You can still browse all indoor golf locations.";
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
  );
}

function matchesIndoorSearch(facility, searchTerm) {
  if (!searchTerm) {
    return true;
  }

  return `${facility.name} ${facility.city} ${facility.area}`.toLowerCase().includes(searchTerm);
}

function setOptionalText(card, selector, value) {
  const element = card.querySelector(selector);
  element.hidden = !value;
  element.textContent = value || "";
}

function setOptionalDetail(card, detailSelector, valueSelector, value) {
  const detail = card.querySelector(detailSelector);
  detail.hidden = !value;
  detail.querySelector(valueSelector).textContent = value || "";
}

function getIndoorBookingNote(facility) {
  if (facility.bookingLabel === "online") {
    return "Open the facility's booking page to check current availability and pricing.";
  }

  if (facility.phone) {
    return `Call ${facility.phone} or open the facility information page to confirm current details.`;
  }

  return "Contact the facility to confirm current availability, pricing, and booking details.";
}

function handleIndoorLinkClick(event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  const link = event.target.closest(".indoor-book-link[data-facility-name]");

  if (!link) {
    return;
  }

  trackIndoorClick({
    facility: link.dataset.facilityName,
    city: link.dataset.facilityCity,
    bookingType: link.dataset.bookingType,
    bookingUrl: link.href
  });
}

function trackIndoorClick(click) {
  const record = {
    eventType: "indoor_click",
    facility: click.facility,
    city: click.city,
    source: "indoor golf",
    trafficSource: getIndoorTrafficSource(),
    bookingType: click.bookingType,
    bookingUrl: click.bookingUrl,
    page: location.href,
    createdAt: new Date().toISOString()
  };

  if (isIndoorLocalPreview() || !INDOOR_TRACKING_ENDPOINT) {
    saveLocalIndoorClick(record);
    return;
  }

  fetch(INDOOR_TRACKING_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(record),
    mode: "no-cors",
    keepalive: true
  }).catch(() => {});
}

function getIndoorTrafficSource() {
  const source = new URLSearchParams(location.search).get("source");

  if (!source) {
    return "direct";
  }

  return source.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 60) || "direct";
}

function isIndoorLocalPreview() {
  return location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);
}

function saveLocalIndoorClick(record) {
  const clicks = JSON.parse(localStorage.getItem("teeDropIndoorClicks") || "[]");
  clicks.push(record);
  localStorage.setItem("teeDropIndoorClicks", JSON.stringify(clicks));
}

function calculateIndoorDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusMiles = 3958.8;
  const dLat = toIndoorRadians(lat2 - lat1);
  const dLon = toIndoorRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toIndoorRadians(lat1)) * Math.cos(toIndoorRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusMiles * c;
}

function toIndoorRadians(degrees) {
  return degrees * (Math.PI / 180);
}
