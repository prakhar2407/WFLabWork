data = [
  {
    coord: { lon: 77.2167, lat: 28.6667 },
    weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }],
    base: "stations",
    main: {
      temp: 303.2,
      feels_like: 310.2,
      temp_min: 303.2,
      temp_max: 303.2,
      pressure: 1009,
      humidity: 84,
    },
    visibility: 1800,
    wind: { speed: 2.06, deg: 140 },
    clouds: { all: 75 },
    dt: 1632718993,
    sys: {
      type: 1,
      id: 9165,
      country: "IN",
      sunrise: 1632703314,
      sunset: 1632746542,
    },
    timezone: 19800,
    id: 1273294,
    name: "Delhi",
    cod: 200,
  },
];

function getInfo(data, nameOfCity) {
  var resultantIndex = -1;
  for (i = 0; i < data.length; i++) {
    if (data[i].name === nameOfCity) {
      resultantIndex = i;
    }
  }
  return resultantIndex;
}

function printInfo(callback) {
  var cityName = document.getElementById("items").value;
  var index = callback(data, cityName);
  if (index != -1) {
    document.getElementsById("weatherReport").innerHTML = (
      <ol>
        <li>Temprature: ${data[index].main.temp}</li>
        <li>Humidity: ${data[index].main.humidity}</li>
        <li>Feels Like: ${data[index].main.feels_like}</li>
        <li>Pressure: ${data[index].main.pressure}</li>
        <li>Visibility: ${data[index].visibility}</li>
        <li>Clouds: ${data[index].clouds.all}</li>
      </ol>
    );
  } else {
    document.getElementsById("weatherReport").innerHTML = <p>Data not found</p>;
  }
}

data = [
  {
    coord: { lon: 77.2167, lat: 28.6667 },
    weather: [{ id: 701, main: "Mist", description: "mist", icon: "50d" }],
    base: "stations",
    main: {
      temp: 303.2,
      feels_like: 310.2,
      temp_min: 303.2,
      temp_max: 303.2,
      pressure: 1009,
      humidity: 84,
    },
    visibility: 1800,
    wind: { speed: 2.06, deg: 140 },
    clouds: { all: 75 },
    dt: 1632718993,
    sys: {
      type: 1,
      id: 9165,
      country: "IN",
      sunrise: 1632703314,
      sunset: 1632746542,
    },
    timezone: 19800,
    id: 1273294,
    name: "Delhi",
    cod: 200,
  },
];

function getInfo(data, nameOfCity) {
  var resultantIndex = -1;
  for (i = 0; i < data.length; i++) {
    if (data[i].name == nameOfCity) {
      resultantIndex = i;
    }
  }
  return resultantIndex;
}

function printInfo(callback) {
  const cityName = window.prompt("Enter city name");
  var index = callback(data, cityName);
  if (index === -1) {
    console.log("Data not found");
  } else {
    console.log("Data is ==>");
    console.log("Temprature: " + data[index].main.temp);
    console.log("Humidity: " + data[index].main.humidity);
    console.log("Feels Like: " + data[index].main.feels_like);
    console.log("Pressure: " + data[index].main.pressure);
    console.log("Visibility: " + data[index].visibility);
    console.log("Clouds: " + data[index].clouds.all);
  }
}
