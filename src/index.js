const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
}

module.exports = function toReadable (number) {
    if (number <= 19) {
        return numbers[number];
    }

    const hundredths = Math.floor(number / 100);

    if (hundredths) {
        if (number % 100 === 0) {
            return `${numbers[hundredths]} ${numbers[100]}`;
        } else {
            return `${numbers[hundredths]} ${numbers[100]} ${toReadable(number - hundredths * 100)}`;
        }
    }

    const tenths = Math.floor((number - hundredths * 100) / 10);

    if (number % 10 === 0) {
        return `${numbers[tenths * 10]}`
    } else {
        return `${numbers[tenths * 10]} ${toReadable(number - tenths * 10)}`
    }
}

