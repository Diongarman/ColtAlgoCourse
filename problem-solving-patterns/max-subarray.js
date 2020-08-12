//Sliding Window Pattern

function maxSubarray(arr, n) {

  if (n> arr.length) {
    return null
  }

  let max = 0;
  let temp = 0;

  //create first sum
  for (let i = 0; i<n; i++) {
    temp+= arr[i]
    }

  max = temp;

  //slide window
    //update max as we go
  for (let j = 0; j<arr.length-n; j++) {
    temp = temp - arr[j] + arr[n + j]
    max = Math.max(temp, max)
  }
  return max

}


//maxSubarray([1,2,5,2,8,1,5],2)

maxSubarray([1,2,5,2,8,1,5],4)

// maxSubarray([4,2,1,6],1)


//Step 1: understand the problem


//Restate problem in own words

/*
Given an array of integers, arr, and a subarray size, n; find the largest summed subarray within arr.

*/

//2)What are the inputs?

/*

an array of integers 

*/


//3)What are the outputs?

/*
an integer of the largest summed subarray
*/


//4)Do I have enough info? Can the outputs be determined from the inputs

/*
if empty array return null
*/



//CONCRETE EXAMPLES

/*

maxSubarray([1,2,(5,2),8,1,5],2) //10


maxSubarray([1,2,5,2,8,1,5],4) //17


*/


//PSEUDO CODE

/*

let max = 0
let temp = 0

for i in (0,(n-1))
  temp+= arr[i]

max = temp

for j in (0, (arr.length - 1) - n)
  temp = temp - temp[j] + arr[n + j]

  if (temp > max) {
    max = temp
  }

  return max


*/