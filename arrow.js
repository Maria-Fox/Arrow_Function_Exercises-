const double = (arr) => arr.map((val) => val * 2);

// declare, set parameter, set arrow, set function

// New Section

const squareAndFindEvens = (numbers) => {
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
};
