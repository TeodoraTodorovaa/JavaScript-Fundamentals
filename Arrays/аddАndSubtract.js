function sumSub(arr) {
    let firstSum = 0;
    let secondSum = 0;
    let newArr = [];

    for (const el of arr) {
        firstSum += el;
    }

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }


    }

    for (const el of arr) {
        secondSum += el;
    }
    console.log(arr);
    console.log(firstSum);
    console.log(secondSum);

}

solve([-5, 11, 3, 0, 2])