function printAndSum(start, end) {
    let sum = 0;
    let print = "";

    for (let i = start; i <= end; i++) {
        print += i + " ";
        sum += i;
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);