//sliding window pattern
function minSubArrayLen(arr,n) {

  let minLenTemp = 0;
  let minLen = Number.MAX_VALUE;

  let runningTotal = 0

  //sliders
  let l = -1;
  let r = 0;



  while (l < arr.length) {

    if (runningTotal < n) {
      runningTotal+=arr[r]
      r++
      minLenTemp++

 
    }

    else if (runningTotal >= n) {
      l++
      runningTotal -= arr[l]
      minLenTemp--

      minLen = Math.min(minLenTemp, minLen)
            
    }
  }
  
    return minLen

}




//minSubArrayLen([2,3,1,2,4,3],7) //2
minSubArrayLen([4,3,3,8,1,2,3,11],11) //1
//minSubArrayLen([4,3,3,8,1,2,3],11) //2

[1,2,3]

/*


   PSEUDO CODE


   while runningTotal < n: slide open window
   while runningTotal >= m slide closed

   save min length as you go   

   must stop left and right at last index

*/