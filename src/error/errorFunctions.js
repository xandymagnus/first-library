function handleErrors (erro) {
    if (erro.code === 'ENOENT') {
        throw new Error('file not found');
    } else {
        return 'aplication error';
    }
}

module.exports = handleErrors;