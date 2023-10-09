function equal(arr) {
    let result = "no";

    for(let i = 0; i < arr.length; i++){
        let rightSum = 0;
        let leftSum = 0;

        for(let j = 0; j < i; j++) {
            leftSum += arr[j]
        }

            for(let k = i + 1; k < arr.length; k++) {
                rightSum += arr[k];
            }

            if (leftSum == rightSum) {
                result = i;
                break;
            }
    }

    console.log(result);


}
equal([1, 2, 3, 3])
equal([1, 2])
equal([1])