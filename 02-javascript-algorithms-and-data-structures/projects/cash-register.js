/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {
  // Calculate the change due amount and store the value
  let changeDue = cash - price;
  // Create an array with the values of currencies in the same order than cid array
  const CURR_VALUES = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  // Create an object where we'll store the result
  let result = { status: '', change: [] };

  // Define a function to calculate remaining total cash in drawer
  const totalCashInDrawer = () => {
    return cid.reduce((acc, next) => {
      return (acc += next[1]);
    }, 0);
  };

  // Handle case where cash in drawer is equal to changeDue
  if (changeDue === totalCashInDrawer()) {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  }

  // Loop through values of currencies from higher to lower
  for (let i = CURR_VALUES.length - 1; i >= 0; i--) {
    // Declare the amount of currency needed and set to 0
    let amount = 0;
    let currency = CURR_VALUES[i];
    // For each currency, while changeDue is greater than currency value and there is currency in cid
    while (changeDue >= currency && cid[i][1]) {
      debugger;
      // Add currency value to amount
      amount += currency;
      // Subtract currency value from changeDue
      changeDue -= currency;
      // Round changeDue to deal with precision errors
      changeDue = Math.round(changeDue * 100) / 100;
      // Subtract value from this currency in cid
      cid[i][1] -= currency;
    }
    // Add amount of currency to result if used
    if (amount) result.change.push([cid[i][0], amount]);
    // Set this currency to 0 in cid and test if there is enough remaining cash in drawer
    cid[i][1] = 0;
    if (changeDue > totalCashInDrawer()) {
      result.status = 'INSUFFICIENT_FUNDS';
      result.change = [];
      return result;
    }
  }

  // When changeDue has been completed, set status to OPEN
  result.status = 'OPEN';
  // Here is your change, ma'am.
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
]);
