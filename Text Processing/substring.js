function solve(text, start, end) {
    let result = text.substring(start, start + end);
    //let result = text.substr(start, end);
    console.log(result);
}

solve('ASentence', 1, 8);