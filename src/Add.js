const getNumbersArray = (stringInput = "") => {
  let delimiter = /[\n,]/;
  let numbersPart = stringInput;

  // check for delimiter change
  if (stringInput.startsWith("//")) {
    const parts = stringInput.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbersPart = parts[1];
  }
  return numbersPart.split(delimiter).map((input) => Number(input));
};

const Add = (input) => {
  // check for input type
  if (typeof input !== "string") {
    throw "non-string input is not allowed";
  }

  if (!input?.trim()?.length) {
    return 0;
  } else {
    // get all numbers in an array
    const allNumbers = getNumbersArray(input);

    // check for negative numbers
    const negatives = allNumbers.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw `negative numbers not allowed ${negatives.join(",")}`;
    }

    // calculate sum
    const sum = allNumbers.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
    return sum;
  }
};

module.exports = {
  Add,
};
