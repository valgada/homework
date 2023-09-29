function triples(numAsString) {

    let num = Number(numAsString)

    let chars = "abcdefghijklmnopqrstuvwxyz"

    for(let a = 0; a < num; a++) {
        for(let b = 0; b < num; b++) {
            for(let c= 0; c < num; c++)
            console.log(chars[a] + chars [b] + chars[c]);
        }
    }

}
triples("3");