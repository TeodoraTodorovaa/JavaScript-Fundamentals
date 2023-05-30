function solve(arr) {
    let text = '';
    for (let letters of arr) {
        if (letters !== text[text.length - 1]) {
            text += letters
        }
    }
    console.log(text);
}
solve('aaaaabbbbbcdddeeeedssaa');