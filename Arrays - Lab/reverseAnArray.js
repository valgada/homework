function reverse(n, nums) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result[i] = nums[i]
    }

    let reversed = [];

    for (let i = n - 1; i >= 0; i--) {
        reversed[reversed.length] = result[i];
    }

    console.log(reversed.join(" "));

}
reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);