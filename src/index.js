const { log } = require('console');
const fs = require('fs');
const { text } = require('stream/consumers');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'UTF-8', (erro, text) => {
    paragraphBreak(text)
    // verifyDupiclateWords(text)
})

// {
//     "web": 5,
//     "desktop": 4
// }

function paragraphBreak (text) {
    const paragraphs =  text.toLowerCase().split('\n');
    const count = paragraphs.map((paragraph) => {
        return verifyDupiclateWords(paragraph); 
    })
    console.log(count);
}

function verifyDupiclateWords (text) {
    const wordList = text.split(' ');
    const result = {};
    // object[propriety] = value;
    wordList.forEach(word => {
        result[word] = (result[word] || 0) + 1;
    })
    return result;
}