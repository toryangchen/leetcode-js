/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  if (gas.length != cost.length) {
    return -1;
  }
  var rest = 0,
    station = 0,
    curr = 0;

  for (var i = 0; i < gas.length; i++) {
    rest += gas[i] - cost[i]; // 累加剩余的总油量
    curr += gas[i] - cost[i]; // 判断当前的油量
    if (curr < 0) {
      station = i + 1;
      curr = 0;
    }
  }

  return rest < 0 ? -1 : station;
};
const gas1 = [1, 2, 3, 4, 5];
const cost1 = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas1, cost1));
