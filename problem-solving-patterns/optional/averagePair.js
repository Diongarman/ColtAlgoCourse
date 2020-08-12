function averagePair(arr, targetAv){
  // add whatever parameters you deem necessary - good luck!

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {

    let average = (arr[l] + arr[r])/2;

    if (average === targetAv ) {
      return true
    }

    else if (average < targetAv) {
      l++
    } else {
      r--
    }
  }
  return false
}
//concrete


/*
averagePair([1,2,3], 2.5) //true


*/