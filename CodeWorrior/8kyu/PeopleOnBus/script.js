/**
 * Given an Array of ppl getting and leaving the Bus at each stop.
 * Returns Number of ppl in the bus after the last stop.
 * @param {Array} busStops Array of pairs [getOnBus,leaveBus]
 */
var number = function (busStops) {
  let onBus = 0;
  busStops.forEach((element) => {
    onBus += element[0];
    onBus -= element[1];
  });
  return onBus;
};

busStops = [
  [5, 0],
  [5, 0],
  [5, 0],
  [5, 10],
];

console.log(number(busStops));
