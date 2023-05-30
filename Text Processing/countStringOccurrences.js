function solve(text, word) {
    let str = text.split(" ");
    let count = 0;

    for (const i of str) {
        if (i === word) {
            count++;
        }
    }

    console.log(count);
}
solve('This is a word and it also is a sentence', 'is')