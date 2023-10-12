(string, n) => {
    let repeat = "";

    for(let i = 0; i < n; i++) {
        repeat += string
    }
    
    return repeat;

    

}
console.log(repeat("abc", 3));
console.log(repeat("String", 2))