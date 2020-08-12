function validAnagram(s1,s2) {

  if (s1.length !== s2.length) {
    return false
  }

  let counter = {}


  for (let char of s1) {
    //if key exists: increment, else: initialise
    counter[char] = ++counter[char] || 1;
  }


  for (let char of s2) {

    //if key exists and is greater than 0
    if (counter[char]) {
      counter[char]--
    } else {
      return false
    }
  }

  return true
}

validAnagram('redrum', 'murder')