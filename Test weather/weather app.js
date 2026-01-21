/* http://api.weatherapi.com/v1/current.json?key=ca90f91d1e4e48a2bf5125532251409&q=San Francisco&aqi=no */

let defaultLocation = "San Francisco";

let temperature = document.getElementsByClassName("temp1")[0];
let place = document.getElementsByClassName("city")[0];
let time = document.getElementsByClassName("time")[0];
let state = document.getElementsByClassName("state")[0];
let condition = document.getElementsByClassName("condition")[0];
let searchForm = document.querySelector("form");
let inPut = document.getElementsByClassName("inPut")[0];
//   let inPut = document.querySelector('.inPut');
// let Btn1 = document.getElementById('btn');

//Btn1.addEventListener("click", searchFun);  //button  goes with a listener of click hence the buttontype will be button
searchForm.addEventListener("submit", searchFun); //Form goes with an event listener of submit

const fetchResult = async function (city) {
  let url = `http://api.weatherapi.com/v1/current.json?key=ca90f91d1e4e48a2bf5125532251409&q=${city}&aqi=no`;
  let resu = await fetch(url);
  const newResu = await resu.json(); //() is very important to execute this function

  console.log(newResu);

  let temperatureData = newResu.current.temp_c;
  let placeData = newResu.location.name;
  let timeData = newResu.location.localtime;
  let regionData = newResu.location.region;
  let conditionData = newResu.current.condition.text;
  //   console.log(condition); //testing
  updateDisplay(
    temperatureData,
    placeData,
    timeData,
    regionData,
    conditionData
  );
};

function updateDisplay(
  temperatureData,
  placeData,
  timeData,
  regionData,
  conditionData
) {

  let splitDate = timeData.split(" ")[0];
  let splitTime = timeData.split(" ")[1];
  let presentDay = dayName(new Date(splitDate).getDay()) ;

//   This has to be under
  temperature.innerHTML = temperatureData;
  place.innerText = placeData;
  time.innerText = `${splitDate} ${presentDay} ${splitTime}`
  state.innerHTML = regionData;
  condition.innerText = conditionData;

}

function dayName(number) {
  switch (number) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

function searchFun(e) {
  e.preventDefault();

  defaultLocation = inPut.value;
  fetchResult(defaultLocation);
}

fetchResult(defaultLocation);
