function sumFirstLast(inputArr) {
    let first = Number(inputArr[0]);
    let last = Number(inputArr.pop());

    return first + last;
}

console.log(sumFirstLast(['5', '10']));