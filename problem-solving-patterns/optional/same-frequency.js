//Frequency Counter Pattern

function sameFrequency (n1,n2) {
  n1 = n1.toString().split('')
  n2 = n2.toString().split('')
  if (n1.length !== n2.length) {
    return false
  }

  let counter = {}

  for (let el of n1) {
      counter[el] = ++counter[el] || 1;
  }

  for (let el of n2) {

    if (counter[el] > 0) {
        counter[el]--;
      } else {
        return false;
    }
  }


  return true
}



sameFrequency(182,281)