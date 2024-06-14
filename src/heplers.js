function filterOcurrence (paragraph) {
    return Object.keys(paragraph).filter(key => paragraph[key] > 1)
}

function mountFileOutput (wordList) {
    let finalText = '';
    wordList.forEach((paragraph) => {
        const duplicate = filterOcurrence (paragraph, index).join(', ');
        finalText +- `diplicate words in paragraph ${index + 1}: ${duplicate} \n`
    });

    return finalText;
}

export { mountFileOutput }