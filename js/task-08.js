// Сгенерировать обьект с рандомными названиями ключей.
// После этого в значение каждого ключа поместить число, это количество символов ключа умноженное
// на порядковый номер в алфавите последней буквы ключа.

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const generateRandomString = function (minLength, maxLength) {
  const strLength = parseInt(
    Math.random() * (maxLength - minLength) + minLength,
  );
  let stringResponse = '';
  for (let i = 0; i < strLength; i++)
    stringResponse += alphabet.charAt(
      parseInt(Math.random() * alphabet.length),
    );
  return stringResponse;
};

const generateRandomObject = function (minLength, maxLength) {
  const objectResponse = {};
  const keyCount = parseInt(
    Math.random() * (maxLength - minLength) + minLength,
  );
  for (let i = 0; i < keyCount; i++) {
    let randomString = generateRandomString(5, 8);
    objectResponse[randomString] =
      randomString.length * alphabet.indexOf(randomString.substr(-1));
  }
  return objectResponse;
};

console.log(generateRandomString(5, 8));
console.log(generateRandomObject(5, 8));
