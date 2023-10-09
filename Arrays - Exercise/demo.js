function equalSums(arr) {
    let flag = true;
    if (arr.length == 1) {
      console.log("0");
    } else {
      for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < arr.length; j++) {
          if (j < i) {
            sumLeft += Number(arr[j]);
          } else if (j > i) {
            sumRight += Number(arr[j]);
          }
        }
        if (sumLeft == sumRight && arr.length > 1) {
          console.log(i);
          flag = false;
          break;
        }
      }
      if (flag) {
        console.log("no");
      }
    }
  }
//equalSums([1, 2, 3, 3] );
//equalSums([1, 2]);
equalSums([1]);
//equalSums([1, 2, 3]);
//equalSums([10, 5, 5, 99,3, 4, 2, 5, 1,1, 4]);