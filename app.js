const courses = [
  {
    name: "Zoar Village Golf Course",
    city: "Zoar, OH",
    latitude: 40.6122153,
    longitude: -81.418408,
    bookingUrl: "https://zoar-village-golf-course.book.teeitup.com/?course=4264",
    firstAvailable: {
      time: "Check live",
      players: 4,
      price: null,
      note: "Tap Book to see Zoar's first available tee time."
    },
    teeTimes: []
  },
  {
    name: "Oak Shadows Golf Club",
    city: "New Philadelphia, OH",
    latitude: 40.50251,
    longitude: -81.423778,
    bookingUrl: "https://www.oakshadowsgolf.com/tee-times/",
    teeTimes: []
  },
  {
    name: "Wilkshire Golf Course",
    city: "Bolivar, OH",
    latitude: 40.636738059988,
    longitude: -81.44818665347,
    bookingUrl: "https://wilkshire-golf-course.book.teeitup.com/",
    teeTimes: []
  },
  {
    name: "River Greens Golf Course",
    city: "West Lafayette, OH",
    latitude: 40.277816,
    longitude: -81.69626,
    bookingUrl: "https://apimanager-cc30.clubcaddie.com/webapi/view/eifdabab",
    teeTimes: []
  },
  {
    name: "Hickory Flats Golf Course",
    city: "West Lafayette, OH",
    latitude: 40.25775,
    longitude: -81.749625,
    bookingUrl: "https://www.golfnow.com/tee-times/facility/6066-hickory-flats-golf-course/search",
    bookingNote: "Tap Book to check Hickory Flats' online tee times.",
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
    bookingUrl: "https://www.5watersgolf.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 922-2182 for the first available tee time.",
    teeTimes: []
  },
  {
    name: "Big Bend Golf Course",
    city: "Uhrichsville, OH",
    latitude: 40.394,
    longitude: -81.355,
    bookingUrl: "https://bigbendgolfcourse.com/golf1-2243",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 229-7660 for the first available tee time.",
    teeTimes: []
  },
  {
    name: "Black Gold Golf Club",
    city: "Sugarcreek, OH",
    latitude: 40.526565,
    longitude: -81.618241,
    bookingUrl: "https://blackgoldgc.teesnap.net/",
    teeTimes: []
  },
  {
    name: "The Quarry Golf Club and Venue",
    city: "Canton, OH",
    latitude: 40.772227,
    longitude: -81.298935,
    bookingUrl: "https://vip.teeitup.com/the-quarry/tee-times/",
    teeTimes: []
  },
  {
    name: "Carroll Meadows Golf Course",
    city: "Carrollton, OH",
    latitude: 40.5884705,
    longitude: -81.0784467,
    bookingUrl: "https://www.chronogolf.com/club/carroll-meadows-golf-course",
    teeTimes: []
  },
  {
    name: "Great Trail Golf Course",
    city: "Minerva, OH",
    latitude: 40.72279,
    longitude: -81.080017,
    bookingUrl: "https://apimanager-cc20.clubcaddie.com/webapi/view/ggfdabab",
    teeTimes: []
  },
  {
    name: "Arrowhead Golf Club & Banquet Center",
    city: "North Canton, OH",
    latitude: 40.862,
    longitude: -81.426,
    bookingUrl: "https://arrowhead-golf-club-4.book-v2.teeitup.golf/",
    bookingNote: "1500 Rogwin Cir SW. Tap Book to check the live tee sheet.",
    teeTimes: []
  },
  {
    name: "Raintree Golf & Event Center",
    city: "Uniontown, OH",
    latitude: 40.969,
    longitude: -81.425,
    bookingUrl: "https://www.golfraintree.com/book-a-tee-time/",
    teeTimes: []
  },
  {
    name: "Edgewood Golf Club",
    city: "North Canton, OH",
    latitude: 40.88282,
    longitude: -81.361036,
    bookingUrl: "https://www.chronogolf.com/club/edgewood-golf-club-ohio",
    teeTimes: []
  },
  {
    name: "Sable Creek Golf Course",
    city: "Hartville, OH",
    latitude: 40.950798,
    longitude: -81.279248,
    bookingUrl: "https://sablecreekgolf.com/book-a-tee-time/",
    teeTimes: []
  },
  {
    name: "Pleasant View Golf Club",
    city: "Paris, OH",
    latitude: 40.83752,
    longitude: -81.126503,
    bookingUrl: "https://www.chronogolf.com/club/pleasant-view-golf-club-ohio",
    teeTimes: []
  },
  {
    name: "Fire Ridge Golf Course",
    city: "Millersburg, OH",
    latitude: 40.553110960225,
    longitude: -81.90175181534,
    bookingUrl: "https://www.fireridgegolfcourse.com/contact-us",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 674-3921 for the first available tee time.",
    teeTimes: []
  },
  {
    name: "The Pines Golf Club",
    city: "Orrville, OH",
    latitude: 40.836,
    longitude: -81.782,
    bookingUrl: "https://www.chronogolf.com/club/the-pines-golf-club-ohio",
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
    teeTimes: []
  }
];

const ALERT_FORM_ENDPOINT = "https://formspree.io/f/mpqbbkpr";
const FEATURED_COURSE_NAME = "Wilkshire Golf Course";

let userLocation = null;

document.querySelector("#courseCount").textContent = courses.length;

const teeTimeList = document.querySelector("#teeTimeList");
const resultCount = document.querySelector("#resultCount");
const locationStatus = document.querySelector("#locationStatus");
const featuredCourse = document.querySelector("#featuredCourse");
const template = document.querySelector("#teeTimeTemplate");
const courseSearch = document.querySelector("#courseSearch");
const alertForm = document.querySelector("#alertForm");
const alertMessage = document.querySelector("#alertMessage");
const filters = {
  day: document.querySelector("#dayFilter"),
  time: document.querySelector("#timeFilter"),
  players: document.querySelector("#playersFilter"),
  booking: document.querySelector("#bookingFilter"),
  distance: document.querySelector("#distanceFilter")
};

document.querySelector("#useLocationButton").addEventListener("click", getUserLocation);
Object.values(filters).forEach((filter) => filter.addEventListener("change", renderTeeTimes));
courseSearch.addEventListener("input", renderTeeTimes);
alertForm.addEventListener("submit", saveAlertSignup);
document.addEventListener("click", handleCourseLinkClick);

renderTeeTimes();
renderFeaturedCourse();

function getUserLocation() {
  if (!navigator.geolocation) {
    locationStatus.textContent = "Location is not available in this browser.";
    return;
  }

  locationStatus.textContent = "Finding nearby tee times...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      locationStatus.textContent = "Showing tee times closest to your current location.";
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

  const day = filters.day.value;
  const timeWindow = filters.time.value;
  const minPlayers = Number(filters.players.value);
  const bookingType = filters.booking.value;
  const maxDistance = Number(filters.distance.value);
  const searchTerm = courseSearch.value.trim().toLowerCase();

  const availableTimes = courses
    .flatMap((course) => getDisplayTimes(course).map((teeTime) => {
      const distance = userLocation
        ? calculateDistance(userLocation.latitude, userLocation.longitude, course.latitude, course.longitude)
        : null;

      return { ...teeTime, course, distance };
    }))
    .filter((teeTime) => matchesSearch(teeTime.course, searchTerm))
    .filter((teeTime) => teeTime.bookingOnly || day === "any" || teeTime.day === day)
    .filter((teeTime) => teeTime.bookingOnly || timeWindow === "any" || getTimeWindow(teeTime.time) === timeWindow)
    .filter((teeTime) => teeTime.players >= minPlayers)
    .filter((teeTime) => bookingType === "all" || getBookingType(teeTime.course) === bookingType)
    .filter((teeTime) => !userLocation || teeTime.distance <= maxDistance)
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
    empty.textContent = "No tee times match those filters yet.";
    teeTimeList.append(empty);
    return;
  }

  availableTimes.forEach((teeTime) => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector(".tee-card");
    const bookingType = card.querySelector(".booking-type");
    const courseBookingType = getBookingType(teeTime.course);

    card.querySelector("h2").textContent = teeTime.course.name;
    card.querySelector(".course-meta").textContent = teeTime.bookingOnly
      ? `${teeTime.course.city} - Live booking link`
      : `${teeTime.course.city} - ${capitalize(teeTime.day)}`;
    article.classList.toggle("call-card", courseBookingType === "call");
    bookingType.textContent = courseBookingType === "call" ? "Call" : "Online";
    bookingType.classList.toggle("call", courseBookingType === "call");
    card.querySelector(".distance-pill").textContent = teeTime.distance === null
      ? "Distance unknown"
      : `${teeTime.distance.toFixed(1)} mi`;
    card.querySelector(".time").textContent = teeTime.time;
    card.querySelector(".players").textContent = `${teeTime.players}`;
    card.querySelector(".price").textContent = teeTime.price === null ? "Live" : `$${teeTime.price}`;
    card.querySelector(".note").textContent = teeTime.note;
    const bookLink = card.querySelector(".book-link");
    bookLink.href = teeTime.course.bookingUrl;
    bookLink.textContent = teeTime.course.bookingLabel || "Book";
    bookLink.setAttribute("aria-label", `Book ${teeTime.time} at ${teeTime.course.name}`);
    addTrackingData(bookLink, teeTime.course, "course list");
    teeTimeList.append(card);
  });
}

function renderFeaturedCourse() {
  const course = courses.find((item) => item.name === FEATURED_COURSE_NAME) || courses[0];
  const firstAvailable = getDisplayTimes(course)[0];
  const bookingType = getBookingType(course);

  featuredCourse.innerHTML = `
    <div class="featured-copy">
      <p class="alert-kicker">Course of the week</p>
      <h2>${course.name}</h2>
      <p>${course.city} - ${bookingType === "call" ? "Call for the first available tee time." : "Tap through to check the first available tee time."}</p>
    </div>
    <div class="featured-details">
      <div>
        <span>First available</span>
        <strong>${firstAvailable.time}</strong>
      </div>
      <div>
        <span>Booking</span>
        <strong>${bookingType === "call" ? "Call / Info" : "Online"}</strong>
      </div>
      <a class="book-link" href="${course.bookingUrl}" target="_blank" rel="noreferrer">${course.bookingLabel || "Book"}</a>
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
  const clickRecord = {
    eventType: "course_click",
    course: click.course,
    city: click.city,
    source: click.source,
    bookingType: click.bookingType,
    bookingUrl: click.url,
    message: `Course click: ${click.course} from ${click.source}`,
    page: location.href,
    createdAt: new Date().toISOString()
  };

  if (isLocalPreview() || !ALERT_FORM_ENDPOINT) {
    saveLocalCourseClick(clickRecord);
    return;
  }

  fetch(ALERT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...clickRecord,
      _subject: `Tee Drop course click: ${click.course}`
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

async function saveAlertSignup(event) {
  event.preventDefault();

  const signup = {
    contact: document.querySelector("#alertContact").value.trim(),
    area: document.querySelector("#alertArea").value.trim() || "Any area",
    time: document.querySelector("#alertTime").value,
    players: document.querySelector("#alertPlayers").value,
    createdAt: new Date().toISOString()
  };

  document.querySelector("#alertCreatedAt").value = signup.createdAt;

  try {
    if (isLocalPreview() || !ALERT_FORM_ENDPOINT) {
      saveLocalAlertSignup(signup);
    } else {
      await submitAlertToFormspree();
    }

    alertMessage.textContent = ALERT_FORM_ENDPOINT
      ? `Saved. You are on the early alert list for ${signup.area}, ${signup.time.toLowerCase()}, ${signup.players} player${signup.players === "1+" ? "" : "s"}.`
      : "Saved locally for now. Add the Formspree endpoint to collect real alert signups.";
    alertForm.reset();
  } catch (error) {
    saveLocalAlertSignup(signup);
    alertMessage.textContent = "Saved locally for now. Formspree did not accept the submission yet.";
  }
}

function isLocalPreview() {
  return location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);
}

function saveLocalAlertSignup(signup) {
  const signups = JSON.parse(localStorage.getItem("teeDropAlertSignups") || "[]");

  signups.push(signup);
  localStorage.setItem("teeDropAlertSignups", JSON.stringify(signups));
}

function saveLocalCourseClick(click) {
  const clicks = JSON.parse(localStorage.getItem("teeDropCourseClicks") || "[]");

  clicks.push(click);
  localStorage.setItem("teeDropCourseClicks", JSON.stringify(clicks));
}

async function submitAlertToFormspree() {
  const formData = new FormData(alertForm);
  formData.append("eventType", "alert_signup");
  formData.append("_subject", "Tee Drop early alert signup");

  const response = await fetch(ALERT_FORM_ENDPOINT, {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: formData
  });

  if (!response.ok) {
    throw new Error("Formspree submission failed");
  }
}

function getBookingType(course) {
  return course.bookingLabel ? "call" : "online";
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
      time: firstAvailable.time || (isCallOnly ? "Call course" : "Check live"),
      players: firstAvailable.players || 4,
      price: firstAvailable.price ?? null,
      note: firstAvailable.note || course.bookingNote || "Tap Book to see the first available tee time.",
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
