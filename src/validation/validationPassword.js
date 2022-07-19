export default function ValidationPassword(password) {
    let res = Validation(password);
    return res;
}

function Validation(password) {

    let smallLetters = false;
    let capitalLetters = false;
    let number = false;
    
    // verifica se tem letras minusculas
    if(/[a-z]/gm.test(password)) {
        smallLetters = true;
    }

    // verifica se tem letra maiusculas
    if (/[A-Z]/gm.test(password)) {
        capitalLetters = true;
    }

    // verifica se tem numeros
    if (/[0-9]/gm.test(password)) {
        number = true;
    }

    if (!smallLetters || !capitalLetters || !number) {
        return false;
    }else if (smallLetters && capitalLetters && number) {
        // verifica se tem pelo menos 6 caracteres
        if(password.length < 6) {
            return false;
        }else {
            return true;
        }

    }
}