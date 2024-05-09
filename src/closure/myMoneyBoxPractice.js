function moneyBox() {
  let savedCoins = 0;

  // Closure
  function countCoins(coins) {
    savedCoins += coins;
    console.log(`MoneyBox: $${savedCoins}`);
  }

  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAdrian = moneyBox();
moneyBoxAdrian(10);
moneyBoxAdrian(15);
moneyBoxAdrian(5);
