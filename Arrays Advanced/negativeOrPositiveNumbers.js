function negativeOrPositive(inputArr) {
    let result = [];

    for (let num of inputArr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}

negativeOrPositive(['7', '-2', '8', '9']);