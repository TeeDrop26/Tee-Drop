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
      note: "Open Zoar's tee time link to check availability."
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
    bookingNote: "Open Hickory Flats' tee time link to check availability.",
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
    bookingNote: "Call (740) 922-2182 to check tee time availability.",
    teeTimes: []
  },
  {
    name: "Big Bend Golf Course",
    city: "Uhrichsville, OH",
    latitude: 40.394,
    longitude: -81.355,
    bookingUrl: "https://bigbendgolfcourse.com/golf1-2243",
    bookingLabel: "Call / Info",
    bookingNote: "Call (740) 229-7660 to check tee time availability.",
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
    bookingNote: "1500 Rogwin Cir SW. Open the tee time link to check availability.",
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
    name: "Raymond C. Firestone Golf Course",
    city: "Akron, OH",
    latitude: 41.014555552933,
    longitude: -81.50688001586,
    bookingUrl: "https://www.firestone9.com/book-a-tee-time/",
    bookingNote: "Public 9-hole course. Open the tee time link to check availability.",
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
    bookingNote: "Call (330) 674-3921 to check tee time availability.",
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
  },
  {
    name: "Spring Valley Golf Course",
    city: "East Sparta, OH",
    latitude: 40.723104,
    longitude: -81.391027,
    bookingUrl: "https://www.svgcanton.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 484-1886 to check tee time availability.",
    teeTimes: []
  },
  {
    name: "Clearview Golf Club",
    city: "East Canton, OH",
    latitude: 40.779,
    longitude: -81.286,
    bookingUrl: "https://www.clearviewgolfclub.com/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 488-0404 to check tee time availability.",
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
    bookingUrl: "https://www.facebook.com/profile.php?id=100063908499193",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 833-2668 to check tee time availability.",
    teeTimes: []
  },
  {
    name: "Black Diamond Golf Course",
    city: "Millersburg, OH",
    latitude: 40.61443,
    longitude: -81.868461,
    bookingUrl: "https://www.ohiogolf.com/golfcourses/black-diamond-golf",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 674-6110 to check tee time availability.",
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
    teeTimes: []
  },
  {
    name: "Chenoweth Golf Course",
    city: "Akron, OH",
    latitude: 40.990,
    longitude: -81.465,
    bookingUrl: "https://www.chenowethgolf.com/tee-times/",
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
    bookingUrl: "http://www.tannenhaufgolf.net/",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 823-4402 to check tee time availability.",
    teeTimes: []
  },
  {
    name: "Riceland Golf Course",
    city: "Orrville, OH",
    latitude: 40.7965129,
    longitude: -81.7649999,
    bookingUrl: "https://ricelandgolfcourse.com/book-a-tee-time/",
    teeTimes: []
  },
  {
    name: "Round Lake Golf Course",
    city: "Lakeville, OH",
    latitude: 40.629,
    longitude: -82.141,
    bookingUrl: "https://www.roundlakegolfcourse.com/",
    teeTimes: []
  },
  {
    name: "Big Dawg's Golf Course",
    city: "Minerva, OH",
    latitude: 40.730,
    longitude: -81.152,
    bookingUrl: "https://www.golflink.com/golf-courses/oh/minerva/big-dawg-s-golf-course",
    bookingLabel: "Call / Info",
    bookingNote: "Call (330) 868-3294 to check tee time availability.",
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
    bookingUrl: "https://www.localgolfspot.com/golf-clubs/mulligan-springs-golf-course",
    bookingLabel: "Call / Info",
    bookingNote: "Par 3 course. Call (330) 628-5139 to check availability.",
    teeTimes: []
  }
];

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
  "Salt Fork State Park Golf Course"
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
      ? `${teeTime.course.city} - Tee time link`
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
    card.querySelector(".price").textContent = teeTime.price === null ? "Live" : `$${teeTime.price}`;
    card.querySelector(".note").textContent = teeTime.note;
    const bookLink = card.querySelector(".book-link");
    bookLink.href = teeTime.course.bookingUrl;
    bookLink.textContent = teeTime.course.bookingLabel || "Check Times";
    bookLink.setAttribute("aria-label", `Open tee time link for ${teeTime.course.name}`);
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
      <p>${course.city} - ${bookingType === "call" ? "Call the course to check tee time availability." : "Open the course link to check tee time availability."}</p>
    </div>
    <div class="featured-details">
      <div>
        <span>Availability</span>
        <strong>${firstAvailable.time}</strong>
      </div>
      <div>
        <span>Booking</span>
        <strong>${bookingType === "call" ? "Call / Info" : "Online"}</strong>
      </div>
      <a class="book-link" href="${course.bookingUrl}" target="_blank" rel="noreferrer">${course.bookingLabel || "Check Times"}</a>
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

  if (isLocalPreview() || !TRACKING_FORM_ENDPOINT) {
    saveLocalCourseClick(clickRecord);
    return;
  }

  fetch(TRACKING_FORM_ENDPOINT, {
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
      note: firstAvailable.note || course.bookingNote || "Open the course link to check tee time availability.",
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

functio
