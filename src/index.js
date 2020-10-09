const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let code = expr.match(/(.{1,10})/gim);
    return dotsDashiesReplace(code);
}

function dotsDashiesReplace(code) {
     let string = code.map(elem => {
        if (elem === '**********') {
            elem = ' ';
        } else {
            let symbols = '';
            elem = parseInt(elem).toString();
            for (let i = 0; i < elem.length; i += 2) {
                if (elem[i + 1] === '0') symbols += '.';
                if (elem[i + 1] === '1') symbols += '-';
            }
            elem = MORSE_TABLE[symbols];
        }
        return elem;
    }).join('');

    return string;
}

module.exports = {
    decode
}