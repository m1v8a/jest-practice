import { reverseString } from "../index.js";

it("reverseString is defined", () => {
  expect(reverseString).toBeDefined();
});

it("reversed 'Odin'", () => {
  expect(reverseString("Odin")).toBe("nidO");
});

it("reversed 'Project'", () => {
  expect(reverseString("Project")).toBe("tcejorP");
});

it("reversed 'Fullstack'", () => {
  expect(reverseString("Fullstack")).toBe("kcatslluF");
});

it("reversed multi words 'Fullstack Javascript'", () => {
  expect(reverseString("Fullstack")).toBe("kcatslluF");
});
