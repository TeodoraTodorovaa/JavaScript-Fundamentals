function solve(words, str) {
    let wordsArr = words.split(", ").sort((a, b) => b.length - a.length);

    for (let word of wordsArr) {
        str = str.replace('*'.repeat(word.length), word);
    }

    console.log(str);
}

solve('great, learning',
    'softuni is ***** place for ******** new programming languages');
