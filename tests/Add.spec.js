const { expect, test } = require("@jest/globals");
const { Add } = require("../src/Add.js");

describe("Add", () => {
  test("Add method exists", () => {
    expect(typeof Add).toBe("function");
  });

  test("should return exception for non-string input", () => {
    expect(() => Add(null)).toThrow("non-string input is not allowed");
  });
});
