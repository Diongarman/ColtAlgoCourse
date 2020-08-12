//sliding window pattern

//MY A POSTERIORI SOLUTION
function minSubArrayLen(arr,n) {

  

  let runningTotal = 0
  //sliders
  let l = 0;
  let r = 0;
  let minLen = Number.MAX_VALUE;

  while (l < arr.length) {

    if ((runningTotal < n) && r < arr.length) {
      runningTotal+=arr[r]
      r++
    }

    else if (runningTotal >= n) {

        minLen = Math.min(minLen, r-l)
        runningTotal -= arr[l]
        l++
      
 
            
    } else {
      break
    }
 
  }

  
    return minLen === Number.MAX_VALUE ? 0: minLen

}

//CONCRETE TESTS

//minSubArrayLen([2,3,1,2,4,3],7) //2
//minSubArrayLen([4,3,3,8,1,2,3,11],11) //1
//minSubArrayLen([4,3,3,8,1,2,3],11) //2

//minSubArrayLen([4,3,3,8,1,2,3],100) 





/*







My Original SOLUTION

function minSubArrayLen(arr,n) {

  let minLenTemp = 0;
  let minLen = Number.MAX_VALUE;

  let runningTotal = 0

  //sliders
  let l = -1;
  let r = 0;

  while (l < arr.length) {

    if ((runningTotal < n) && r < (arr.length)) {
      runningTotal+=arr[r]
      r++
      minLenTemp++

 
    }

    else  {

      if (runningTotal >= n) {
        minLen = Math.min(minLenTemp, minLen)
      }
      l++
      minLenTemp--
      runningTotal -= arr[l]
 
            
    }
 
  }

  
    return minLen === Number.MAX_VALUE ? 0: minLen

}


*/





/*


   PSEUDO CODE


   while runningTotal < n: slide open window
   while runningTotal >= m slide closed


    save min length as you go   

   restrictions
   

   must stop left and right at last index

*/



/*

COLT'S SOLUTION

Notes - Very close to mine

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

*/