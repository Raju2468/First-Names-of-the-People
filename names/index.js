const names = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");

const getPeopleInCity = (names) => {
  return getFirstName(names);
};
module.exports = getPeopleInCity;
