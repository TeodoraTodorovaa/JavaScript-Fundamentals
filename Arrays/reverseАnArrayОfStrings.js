function reversedString(arr) {
    let lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        let buffer = arr[i];
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = buffer;
    }

    console.log(arr.join(" "));

}
reversedString(['a', 'b', 'c', 'd', 'e']);