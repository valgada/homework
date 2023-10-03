function addSubtract(array) {
    let oldSum = 0;
    let newSum = 0;

    for(let i = 0; i < array.length; i++) {
        let num = array[i];

        oldSum += num

        if (num % 2 === 0) {
            num += i;
        } else {
            num -= i;
        }

        newSum += num
        array[i] = num
    }

    console.log(array);
    console.log(oldSum);
    console.log(newSum);

}
addSubtract([5, 15, 23, 56, 35]);
addSubtract([-5, 11, 3, 0, 2]);
