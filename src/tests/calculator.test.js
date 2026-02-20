import { calculator } from "../index.js";

it("4 + 3 = 7", () => {
  expect(calculator(4, 3, "+")).toBe(7);
});

it("6 + 6 = 12", () => {
  expect(calculator(6, 6, "+")).toBe(12);
});

it("6 - 6 = 0", () => {
  expect(calculator(6, 6, "-")).toBe(0);
});

it("3 - 6 = -3", () => {
  expect(calculator(3, 6, "-")).toBe(-3);
});

it("6 * 6 = 36", () => {
  expect(calculator(6, 6, "*")).toBe(36);
});

it("6 / 6 = 1", () => {
  expect(calculator(6, 6, "/")).toBe(1);
});
it("6 / 0 = error", () => {
  expect(() => calculator(6, 0, "/")).toThrow();
});

it("0 / 6 = error", () => {
  expect(() => calculator(0, 6, "/")).toThrow();
});
