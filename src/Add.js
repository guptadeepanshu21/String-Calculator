const getNumbersArray = (stringInput = "") => {
  let delimiter = /[\n,]/;
  let numbersPart = stringInput;

  if (stringInput.startsWith("//")) {
    const parts = stringInput.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbersPart = parts[1];
  }
  return numbersPart.split(delimiter);
};

const Add = (input) => {
  if (typeof input !== "string") {
    throw "non-string input is not allowed";
  }

  if (!input?.trim()?.length) {
    return 0;
  } else {
    const allNumbers = getNumbersArray(input);
    const sum = allNumbers.reduce(
      (prevValue, currentValue) => prevValue + Number(currentValue),
      0
    );
    return sum;
  }
};

module.exports = {
  Add,
};
