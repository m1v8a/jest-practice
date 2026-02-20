import { ceasarCipher } from "../index.js";

it("cipher 'abc' -> 'efg', with a shift of 4", () => {
  expect(ceasarCipher("abc", 4)).toBe("efg");
});

it("cipher using shift 5", () => {
  expect(ceasarCipher("the", 5)).toBe("ymj");
});

it("wraps around when shifting pass 'z'", () => {
  expect(ceasarCipher("xyz", 3)).toBe("abc");
});

it("works on capital letters", () => {
  expect(ceasarCipher("aXeE", 3)).toBe("dAhH");
});

it("don't shift non-letters", () => {
  expect(ceasarCipher("a!bce", 3)).toBe("d!efh");
});

it("works with super high shift value, lowercase", () => {
  expect(ceasarCipher("abc", 5320)).toBe("qrs");
});

it("works with super high shift value, uppercase", () => {
  expect(ceasarCipher("ABC", 333)).toBe("VWX");
});

it("works with super high shift value, uppercase", () => {
  expect(ceasarCipher("abc", 26)).toBe("abc");
});
