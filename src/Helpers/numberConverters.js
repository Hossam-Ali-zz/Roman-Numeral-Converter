export const fromRoman = (str) => {
  let englishNumbers = str.toUpperCase(),
    num = 0,
    m;
  const validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
  const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
  const key = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  if (!(englishNumbers && validator.test(englishNumbers))) {
    return 'Invalid Input';
  }
  while ((m = token.exec(englishNumbers))) {
    num += key[m[0]];
  }
  return num;
};

export const toRoman = (num) => {
  if (num > 9999999) return 'Input is too large';
  if (num < 1) return 'Invalid Input';
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = '';
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
};
