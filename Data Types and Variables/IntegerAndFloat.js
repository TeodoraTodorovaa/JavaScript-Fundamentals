function IntegerAndFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let wholePart = parseInt(sum);
    if (wholePart == sum) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

IntegerAndFloat(9, 100, 1.1);