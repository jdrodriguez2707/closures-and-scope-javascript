// function moneyBox(coins) {
//   let savedCoins = 0;
//   savedCoins += coins;
//   console.log(`Money box: $${savedCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

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
moneyBoxAdrian(20);
moneyBoxAdrian(5);

function questionSurvey(questionNumber) {
  let numberOfAnswers = 0;
  return function countAnswers(isAnswered) {
    if (isAnswered) {
      numberOfAnswers += 1;
      console.log(`Question ${questionNumber}\nAnswers: ${numberOfAnswers}`);
    }
  };
}

const firstQuestion = questionSurvey(1);
firstQuestion(true);
firstQuestion(true);
firstQuestion(true);

const secondQuestion = questionSurvey(2);
secondQuestion(true);
secondQuestion(true);
secondQuestion(true);
secondQuestion(true);
secondQuestion(true);

// function questionSurvey(questionNumber) {
//   let numberOfAnswers = 0;
//   return {
//     countAnswers: function (isAnswered) {
//       if (isAnswered) {
//         numberOfAnswers += 1;
//         console.log(`Question ${questionNumber}\nAnswers: ${numberOfAnswers}`);
//       }
//     },
//   };
// }

// const firstQuestion = questionSurvey(1);
// firstQuestion.countAnswers(true);
// firstQuestion.countAnswers(true);
// firstQuestion.countAnswers(true);

// const secondQuestion = questionSurvey(2);
// secondQuestion.countAnswers(true);
// secondQuestion.countAnswers(true);
// secondQuestion.countAnswers(true);
// secondQuestion.countAnswers(true);
// secondQuestion.countAnswers(true);
