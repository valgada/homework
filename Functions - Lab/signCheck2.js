function signCheck(a, b, c) {

    let arr = [a, b, c];
    let count = 0;
    

    for (let el of arr) {
        if (el < 0) {
            count++
        }
    }   

    if (count % 2 !== 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}
signCheck(5,12,-15);
signCheck(-1,-2,-3);
signCheck(-5,1,1);
signCheck(-6,-12,14);