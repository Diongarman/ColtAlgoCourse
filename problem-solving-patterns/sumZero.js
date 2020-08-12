//Multiple Pointers Pattern

function sumZero(arr) {

  if (arr.length === 0) {
    return undefined
  }


  let left = 0;
  let right = arr.length -1;

  while(left < right){

    let sum = arr[left] + arr[right]

    if (sum === 0) {
      return [arr[left], arr[right]]
    }
    else if (sum >0) {
      right--
    }

    else {
      left++
    }

 
  }

  return undefined;


}





//Step 1: understand the problem


//Restate problem in own words

/*
find and return first pair of values in a sorted array that sum to the value of 0

*/



//2)What are the inputs?

/*

a sorted array of integers 

*/


//3)What are the outputs?


/*

if find pair: an array 

else: undefined

*/


//4)Do I have enough info? Can the outputs be determined from the inputs


/*
if empty array: return undefined


*/


//CONCRETE EXAMPLES



/*
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]


sumZero([]) // undefined

sumZero([1,2,3,4]) //undefined

sumZero([-5,-4,-3,-1,0,1,2,3,7])

sum           l   r
              0   8
-5+7=2        0   7
-5+3=-2       1   7
-3+3=-1       2   7
-3+-3=0


output: [-3,3]


*/


//PSEUDO CODE

/*

left = 0
right = arr.length

while left < right
  if arr[left] + arr[right] > 0
    right--
  if arr[left] + arr[right] < 0
    left++

  if arr[left] + arr[right] === 0
    return [arr[left], arr[right]]

  return undefined


*/
