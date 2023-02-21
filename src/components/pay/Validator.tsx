const cardNumberRegex = new RegExp(/^\d{17}$/);
const cardCVVCodeRegex = new RegExp(/^\d{3}$/);
const cardExpireRegex = new RegExp(/^\d\d\/\d\d$/);
const cartExpireWriteRegex = new RegExp(
  /^\d$|^\d\d$|^\d\d\/$|^\d\d\/\d$|^\d\d\/\d\d$/
);

export const checkNumber = (number: string) => cardNumberRegex.test(number);

export const checkCVVCode = (CVVCode: string) => cardCVVCodeRegex.test(CVVCode);

export const checkExpire = (expire: string) => cardExpireRegex.test(expire);

export const checkExpireWrite = (expire: string) =>
  cartExpireWriteRegex.test(expire);

export const isDigit = (char: string) => /\d/.test(char);
