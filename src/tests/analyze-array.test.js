import { analyzeArray } from "../index.js";

it("returns an object", () => {
  const returnValue = analyzeArray([1, 23, 4, 5]);
  expect(
    typeof returnValue === "object" && !Array.isArray(returnValue)
  ).toBeTruthy();
});

it("returns the min, max, average & length of an array", () => {
  const expectedResult = {
    average: 20.5,
    min: 1,
    max: 54,
    length: 4,
  };

  expect(analyzeArray([1, 23, 4, 54])).toEqual(expectedResult);
});
