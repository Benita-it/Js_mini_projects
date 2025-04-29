const passLen = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = '';
    let password = '';

    if (length <= 0) {
        return 'Password length should be greater than 0';
    }

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        return 'At least one character type should be selected';
    }

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password; 
}

const password = generatePassword(passLen, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);
