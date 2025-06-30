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

  test("should return sum of comma separated numbers", () => {
    const sumForSingleNumber = Add("1");
    expect(sumForSingleNumber).toBe(1);

    const sumForMultipleNumbers = Add("1,2,3");
    expect(sumForMultipleNumbers).toBe(6);
  });

  test("should return sum of comma/newline separated numbers", () => {
    const sum = Add("1\n2,3");
    expect(sum).toBe(6);
  });

  test("should support change of operator", () => {
    const semicolonOperatorSum = Add("//;\n1;2");
    expect(semicolonOperatorSum).toBe(3);

    const commaOperatorSum = Add("//,\n1,2,3");
    expect(commaOperatorSum).toBe(6);
  });

  test("should throw exception for negative numbers", () => {
    expect(() => Add("//;\n-1;2;-5")).toThrow(
      "negative numbers not allowed -1,-5"
    );
  });
});
