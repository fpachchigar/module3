function printCitydetails(city) {
  for (let key in city) {
    console.log(`${key}: ${city[key]}`);
  }
}
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

printCitydetails(sydney);

function printCitydetails(city) {
  for (let key in city) {
    console.log(`${key}: ${city[key]}`);
  }
}
const newyork = {
  name: "New York",
  population: 8_258_000,
  state: "New York",
  founded: "1624",
  timezone: "NY, USA",
};

printCitydetails(newyork);

function printCitydetails(city) {
  for (let key in city) {
    console.log(`${key}: ${city[key]}`);
  }
}
const auckland = {
  name: "Auckland",
  population: 1_530_500,
  state: "Auckland",
  founded: "18 September 1840",
  timezone: "New Zealand/Auckland",
};

printCitydetails(auckland);
