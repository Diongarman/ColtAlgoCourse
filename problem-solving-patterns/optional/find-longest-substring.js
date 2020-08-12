function findLongestSubstring(s) {
  let cache = {}

  let l = 0
  let r = 0

  let temp = 0
  let max = 0


  while (r < s.length) {
    console.log(s[r])
    if (!(s[r] in cache)) {
      cache[s[r]] = r;
      r++;
      temp++;
      max = Math.max(temp, max);
      
      } else {
        temp = 0
        l = cache[s[r]] + 1
        r = l
        cache = {}
      }
    }
  return max
  
}


//findLongestSubstring('rithmschool') //7
//findLongestSubstring('bbbbb')
//findLongestSubstring('longestsubstring')
//findLongestSubstring('thecatinthehat') //7
//findLongestSubstring('thisishowwedoit') //6