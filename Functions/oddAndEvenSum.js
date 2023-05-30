function oddAndEvenSum(number) {
    let arr = String(number).split('');
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {
        const digit = Number(arr[i]);

        if (digit % 2 == 0) {
            sumEven += digit;
        } else {
            sumOdd += digit;
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

console.log(oddAndEvenSum(1000435));