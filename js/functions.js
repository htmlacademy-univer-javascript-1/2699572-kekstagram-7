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
