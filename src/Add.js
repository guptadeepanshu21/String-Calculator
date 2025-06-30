const Add = (input) => {
  if (typeof input !== "string") {
    throw "non-string input is not allowed";
  }

  if (!input?.trim()?.length) {
    return 0;
  }
};

module.exports = {
  Add,
};
