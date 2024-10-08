function generatePassword(length, includesLowercase, includesUppercase, includesNumbers, includesSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChar = "1234567890";
    const symbolChars = "!@#$%^&*()_+~?/><:;";

    let allowedChars = "";
    let password = "";

    allowedChars += includesLowercase ? lowercaseChars : "";
    allowedChars += includesUppercase ? uppercaseChars : "";
    allowedChars += includesNumbers ? numbersChar : "";
    allowedChars += includesSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At lease 1 set of characters need to be selected)`;
    } 

    for (let i = 0; i <= length; i++){
        const random_index = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[random_index];
    }

    return password;
   
}

const passwordLength = 12;
const includesLowercase = true;
const includesUppercase = true;
const includesNumbers = true;
const includesSymbols = true;

const password = generatePassword(passwordLength,
                                  includesLowercase,
                                  includesUppercase,
                                  includesNumbers,
                                  includesSymbols
)     

console.log(password);