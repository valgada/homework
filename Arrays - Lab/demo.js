function reversedInPlace(arr) {
    
    for(let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }

    console.log(arr.join(" "));

}
reversedInPlace(['a', 'b', 'c', 'd', 'e']);
reversedInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reversedInPlace(['33', '123', '0', 'dd']);