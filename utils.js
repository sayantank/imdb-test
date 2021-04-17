export const getLetters = () => {
  const capitals = [];
  for (let i = 0; i < 26; i++) {
    const capital = String.fromCharCode(65 + i);
    capitals.push(capital);
  }
  capitals.push(",");
  capitals.push(".");
  return capitals;
};

export const getDigits = () => {
  const digits = [];
  for (let i = 1; i <= 3; i++) {
    digits.push(i);
  }
  digits.push("&");
  digits.push("#");
  digits.push("(");
  digits.push(")");
  for (let i = 4; i <= 6; i++) {
    digits.push(i);
  }
  digits.push("@");
  digits.push("!");
  digits.push("?");
  digits.push(":");
  for (let i = 7; i <= 9; i++) {
    digits.push(i);
  }
  digits.push("0");
  digits.push(".");
  digits.push("_");
  digits.push('"');
  return digits;
};
