const Add = (input) => {
  if (typeof input !== "string") {
    throw "non-string input is not allowed";
  }
};

module.exports = {
  Add,
};
