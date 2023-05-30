function rightPlace(firstWord, char, secondWord) {
    let matchWord = '';

    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] === '_') {
            matchWord += char;
        } else {
            matchWord += firstWord[i];
        }
    }

    if (matchWord === secondWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i', 'String');