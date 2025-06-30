const { expect, test } = require("@jest/globals");
const { Add } = require("../src/Add.js");

describe("Add", () => {
  test("Add method exists", () => {
    expect(typeof Add).toBe("function");
  });

  test("should return exception for non-string input", () => {
    expect(() => Add(null)).toThrow("non-string input is not allowed");
  });

  test("should return 0 for empty string", () => {
    const sum = Add("");
    expect(sum).toBe(0);
  });

  test("should return sum of numbers", () => {
    const sumForSingleNumber = Add("1");
    expect(sumForSingleNumber).toBe(1);

    const sumForMultipleNumbers = Add("1,2,3");
    expect(sumForMultipleNumbers).toBe(6);
  });
});
