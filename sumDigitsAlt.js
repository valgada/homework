function demo (num) {
    let sum = 0;

        while (num !== 0) {
            let units = num % 10;
            num -= units;
            num /= 10;
            sum += units
            
        }
        console.log(sum);
}
demo (543);
demo (245678);
demo (97561);