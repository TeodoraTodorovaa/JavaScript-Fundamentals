function solve(input) {
    let occ = new Map;

    let arr = input.split(' ');

    for (let word of arr) {
        word = word.toLowerCase();
        if (!occ.has(word)) {
            occ.set(word, 0);
        }

        let newVal = occ.get(word) + 1;
        occ.set(word, newVal);
    }

    let keys = Array.from(occ.keys())
        .filter(x => occ.get(x) % 2 !== 0)
        .join(' ')
    console.log(keys);

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')