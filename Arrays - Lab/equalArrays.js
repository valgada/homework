function equalArrays (array1, array2) {
        for(let i = 0; i < array1.length; i++) {
            array1[i] = Number(array1[i]);
        }

        for(let i = 0; i < array2.length; i++) {
            array2[i] = Number(array2[i]);
        }   

        let sum = 0;
        let isIdentical = true

        for(let i = 0; i < array1.length; i++) {
            if(array1[i] !== array2[i]) {
                console.log(`Arrays are not identical. Found difference at ${i} index`); 
                isIdentical = false;
                break;
            } else {
                sum += array1[i]
               
            }
        }

        if(isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
        }

}
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);