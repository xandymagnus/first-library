const { log } = require('console');
const fs = require('fs');
const { text } = require('stream/consumers');

const filePath = process.argv;
const link = filePath[2];

fs.readFile(link, 'UTF-8', (erro, text) => {
    verifyDupiclateWords(text)
})

// {
//     "web": 5,
//     "desktop": 4
// }

function verifyDupiclateWords (text) {
    const wordList = text.split(' ');
    const result = {};
    // object[propriety] = value;
    wordList.forEach(word => {
        result[word] = (result[word] || 0) + 1;
    })
    console.log(result);
}