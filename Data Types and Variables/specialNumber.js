function specialNumber(n) {

    for (let i = 1; i <= n; i++) {
        let a = parseInt(i / 10);
        let b = i % 10;
        if (a + b == 5 || a + b == 7 || a + b == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumber(15);
