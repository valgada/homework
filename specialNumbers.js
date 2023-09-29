function specialNumbers(num) {

   for (let i = 1; i <= num; i++) {
    let str = "";

    let lastDigit = (i % 10);
    
    let sum = parseInt(i / 10);
    

    sum += lastDigit;
    


    if (sum === 5 || sum === 7 || sum === 11) {
        str = "True";
    } else {
        str = "False";
    }
    console.log(`${i} -> ${str}`);
   }

}
specialNumbers(15);
//specialNumbers(20);
//specialNumbers(1);
//specialNumbers(2);
//specialNumbers(3);
//specialNumbers(4);
//specialNumbers(5);