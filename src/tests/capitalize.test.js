import { capitalize } from "../index.js";

it("capitalize 'odin'", () => {
  expect(capitalize("odin")).toBe("Odin");
});

it("capitalize 'project'", () => {
  expect(capitalize("project")).toBe("Project");
});

it("capitalize 'webdev'", () => {
  expect(capitalize("webdev")).toBe("Webdev");
});

it("capitalize multi words string", () => {
  expect(capitalize("the odin project")).toBe("The Odin Project");
});
