// 1. Функция для проверки длины строки
function checkLength(string, maxLength) {
  return string.length <= maxLength;
}

// 2. Палиндром
function isPalindrome(string) {
  const normal = string.replaceAll(' ', '').toLowerCase();
  let reversed = '';

  for (let i = normal.length - 1; i >= 0; i--) {
    reversed += normal[i];
  }

  return reversed === normal;
}

// 3. Извлечение цифр из строки
function extractDigits(value) {
  const string = value.toString();
  let digits = '';

  for (let i = 0; i < string.length; i++) {
    const digit = parseInt(string[i], 10);

    if (!Number.isNaN(digit)) {
      digits += digit;
    }
  }

  if (digits === '') {
    return NaN;
  }

  return parseInt(digits, 10);
}


checkLength('проверяемая строка', 20); // true
checkLength('проверяемая строка', 18); // true
checkLength('проверяемая строка', 10); // false

isPalindrome('топот');                    // true
isPalindrome('ДовОд');                    // true
isPalindrome('Кекс');                     // false
isPalindrome('Лёша на полке клопа нашёл '); // true

extractDigits('2023 год');            // 2023
extractDigits('ECMAScript 2022');     // 2022
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007');           // 7
extractDigits('а я томат');           // NaN
extractDigits(2023);                  // 2023
extractDigits(-1);                    // 1
extractDigits(1.5);                   // 15
