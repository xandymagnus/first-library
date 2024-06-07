import fs from 'fs';
import handleErrors from './error/errorFunctions.js'

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'UTF-8', (erro, text) => {
    try {
        if (erro) throw erro
        countWords(text);
    } catch(erro) {
        handleErrors(erro);
    }
})