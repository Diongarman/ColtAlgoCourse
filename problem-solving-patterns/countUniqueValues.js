//Multiple Pointers patters

function countUniqueValues(arr) {


  let left = 0
  let right = 1

  let counter = 0

  while (right < arr.length+1) 

    if(arr[right] === arr[left]) {
      right++
    } else {
      counter++
      left = right
      
    }

    return counter

}

countUniqueValues([1,2,3,3,4,4])

//PSEUDO CODE

/*

left = 0
right = 0

counter = 00

while (right < arr.length) 

  if(arr[right] !=== arr[left]) {
    right++
  } else {
    right++
    left = right
    counter++
  }

  return counter

*/