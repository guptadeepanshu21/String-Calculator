const getNumbersArray = (stringInput = "") => {
  return stringInput.split(",");
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
