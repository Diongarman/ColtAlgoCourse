function same (a1,a2) {

  if (a1.length !== a2.length) {
    return false
  }

  let counter = {}

  for (let el of a1) {
      counter[el**2] = ++counter[el**2] || 1;
  }

  for (let el of a2) {

    if (counter[el] > 0) {
        counter[el]--;
      } else {
        return false;
    }
  }


  return true
}



// function same(val1, val2) {
//     if (val1.length !== val2.length) {
//         return false;
//     }
//     const expectedValue = {};
//     val1.forEach((val) => {
//         const squareValue = val ** 2;
//         expectedValue[squareValue] = (expectedValue[squareValue] || 0) + 1;
//     });

//     console.log(expectedValue)
//     for (let val of val2) {
//       console.log(expectedValue)
//         if (expectedValue[val] > 0) {
//             expectedValue[val]--;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }


same([1,2,2,5], [25, 4, 4, 1]) 