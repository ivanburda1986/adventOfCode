/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)
 */

export const sameFrequency = (number1: number, number2: number) => {
    const number1Digits: Record<string, number> = {};
    const number2Digits: Record<string, number> = {};

    for (const digit of String(number1).split("")) {
        number1Digits[digit] = (number1Digits[digit] || 0) + 1;
    }

    for (const digit of String(number2).split("")) {
        number2Digits[digit] = (number2Digits[digit] || 0) + 1;
    }

    for (let digit in number1Digits) {
        if (!(digit in number2Digits)) {
            return false;
        }
        if (number1Digits[digit] !== number2Digits[digit]) {
            return false;
        }

    }
    return true;
};