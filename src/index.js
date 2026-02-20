export function capitalize(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num1 === 0 || num2 === 0) throw new Error("Zero is not divisible");
    return num1 / num2;
  }
}

export function ceasarCipher(string, shift) {
  let split = string.split("");
  split = split.map((char) => {
    const code = char.charCodeAt(0);

    if (code < 65 || (code > 90 && code < 97) || code > 122) {
      return String.fromCharCode(code);
    }

    const isCapital = code >= 65 && code <= 90;

    const index = isCapital
      ? (code + shift - 65) % 26
      : (code + shift - 97) % 26;

    return isCapital
      ? String.fromCharCode(index + 65)
      : String.fromCharCode(index + 97);
  });
  return split.join("");
}

export function analyzeArray(array) {
  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / 4,
    length: array.length,
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => b - a)[0],
  };
}
