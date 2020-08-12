
//Kata: https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  
  let subqueues = new Array(n).fill(0);

  for (let customer of customers) {
    let minIndex = subqueues.indexOf(Math.min(...subqueues))
    subqueues[minIndex] += customer
  }

  return Math.max(...subqueues)

}
queueTime([1,2,3], 1)





//Step 1: understand the problem


//Restate problem in own words

/* 
fingure out time taken to process queue given n tills and an array of times that each represent a customers queue times

*/


//2)What are the inputs?

/*
n = number of tills

array of positive integers representing queue times of a customer

*/


//3)What are the outputs?

/*
integer of total time
*/ 


//4)Do I have enough info? Can the outputs be determined from the inputs

/*
-What is empty array? return 0

-what if 1 till? simply sum array

-what if more tills than customers? simply take max of array

*/




//CONCRETE EXAMPLES

/*

queueTime([10,2,3,3], 2)


// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.



{
  till_1:[10],
  till_2: [2,3,3]

}

return max(sum(till_1), sum(still_2))


queueTime([2,2,3,3,4,4], 2)

// should return 9



{
  till_1:[2,3,4],
  till_2: [2,3,4]

}


queueTime([10,2,3,3,3], 2)

should return 11

{
  till_1:[10],
  till_2: [2,3,3,3]

}



queueTime([10,2,3,6,8], 3)

should return 11

{
  till_1:[10],
  till_2: [2,6]

  till_3:[3,8]

}


*/


//PSEUDO CODE

/*

create object where each till/subqueue is represented by a key

loop customers
  place customer into shortest subqueue

sum subqueues
return max subqueue



*/