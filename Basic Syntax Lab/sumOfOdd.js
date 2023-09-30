function printNextOddNumbersAndSum(n) {
    let sum = 0;
    let count = 0;
  
    for (let i = 1; count < n; i += 2) {
      console.log(i);
      sum += i;
      count++;
    }
  
    console.log(`Sum: ${sum}`);
  }
printNextOddNumbersAndSum(5);
printNextOddNumbersAndSum(3);
