// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0) {
    return 0;
  }

  let wedges = 0;
  let antal = 0;
  let i = 0;
  while (wedges < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case "small":
        wedges += 6;
        antal++;
        break;
      case "medium":
        wedges += 8;
        antal++;
        break;
      case "large":
        wedges += 10;
        antal++;
        break;
    }
    i++;
  }
  return antal;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeTaken = 0;
  let drinkIndex = 0;
  let drinksLeft = [];
  while (timeTaken < timeLeft) {
    let nextDrink = timeToMixJuice(orders[drinkIndex]);
    timeTaken += nextDrink;
    drinkIndex++;
  }
  for (let i = drinkIndex; i < orders.length; i++) {
    drinksLeft.push(orders[i]);
  }

  return drinksLeft;
}
