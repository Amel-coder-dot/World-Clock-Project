function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAnegelesDateElement = losAngelesElement.querySelector(".date");
  let losAnegelesTimeElement = losAngelesElement.querySelector(".time");
  let losAnegelesTime = moment().tz("America/Los_Angeles");

  losAnegelesDateElement.innerHTML = losAnegelesTime.format("MMMM Do YYYY");
  losAnegelesTimeElement.innerHTML = losAnegelesTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small]");
}

updateTime();
setInterval(updateTime, 1000);
