import fs from 'fs';
import handleErrors from './error/errorFunctions.js';
import { countWords } from './index.js';

const filePath = process.argv;
const link = filePath[2];
const address = filePath[3];

fs.readFile(link, 'UTF-8', (erro, text) => {
    try {
        if (erro) throw erro
       const result = countWords(text);
       createAndSaveFile(result, address);
    } catch(erro) {
        handleErrors(erro);
    }
})

async function createAndSaveFile (wordList, address) {
    const newFile = `${address}/result.txt`;
    const textWords = JSON.stringify(wordList);

    try {
        await fs.promises.writeFile(newFile, textWords);
        console.log('file created');
    } catch(erro) {
        throw erro;
    }
}