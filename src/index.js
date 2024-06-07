const { log } = require('console');
const fs = require('fs');
const { text } = require('stream/consumers');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'UTF-8', (erro, text) => {
    if (erro) {
       console.log('What is the error?', erro.code);
       return 
    }

    countWords(text);
})

function countWords (text) {
    const paragraphs = extractParagraphs(text)
    const count = paragraphs.flatMap((paragraph) => {
        if ( !paragraph ) return [];
        return verifyDupiclateWords(paragraph); 
    })
    console.log(count)
}

function extractParagraphs (text) {
    return text.toLowerCase().split('\n');
}

function paragraphBreak (text) {

}
        

function cleanWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verifyDupiclateWords (text) {
    const wordList = text.split(' ');
    const result = {};
    // object[propriety] = value;
    wordList.forEach(word => {
        if ( word.length >= 3 ) {
            const cleanWord = cleanWords(word);
            result[cleanWord] = (result[cleanWord] || 0) + 1;
        }
    })
    return result;
}