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
