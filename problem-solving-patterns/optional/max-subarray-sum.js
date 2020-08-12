//sliding window pattern

function maxSubarraySum(arr,n){

  if (arr.length < n) {
    return null
    }

  let temp = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    temp += arr[i]
    }

  max = temp

  for (let i = 0; i < arr.length - n; i++) {

    temp = temp - arr[i] + arr[i+n]
    max = Math.max(temp, max)
    }


  return max
}

maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) //5

//maxSubarraySum([2,3], 3) //null
//maxSubarraySum([100,200,300,400],2) //700
