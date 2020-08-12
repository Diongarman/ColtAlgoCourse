function isSubsequence(s1,s2) {
  // good luck. Add any arguments you deem necessary.

  let l = 0;
  let r = 0;

  while (r < s2.length - 1) {

    if (l === s1.length - 1) {
      return true
    }

    if (s1[l] === s2[r]) {
      l++
      r++
    } else {
      r++
    }

  }

  return false
}

isSubsequence('hello', 'hello world'); //true

//isSubsequence('abc', 'acb'); //false