function reversedInPlace (array) {

    for(let i = 0; i < array.length / 2; i++) {
        let j = array.length - 1 - i;

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    console.log(array.join(" "));

}
reversedInPlace(['a', 'b', 'c', 'd', 'e']);
reversedInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reversedInPlace(['33', '123', '0', 'dd']);