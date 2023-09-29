function printAndSum(num1, num2) {
    let numsStr = '';
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        numsStr += i + " ";
        sum+=i;
    }
        console.log(numsStr);
        console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
//printAndSum(0, 26);
//printAndSum(50, 60);