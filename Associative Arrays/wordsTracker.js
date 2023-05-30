function solve(arr) {
    let wordsObject = {};

    let words = arr.shift().split(' ');

    for (let word of words) {
        wordsObject[word] = 0;
    }

    for (let word of arr) {
        if (wordsObject.hasOwnProperty(word)) {
            wordsObject[word]++;
        }
    }

    Object.keys(wordsObject)
        .sort((a, b) => wordsObject[b] - wordsObject[a])
        .forEach(element => {
            console.log(`${element} - ${wordsObject[element]}`);
        })

}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)