/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let arr = s.split('');  //cbbd    babad
  let arr2 = s.split('').reverse(); //dbbc    dabab
  let s2 = arr2.join('');
  let result = '';
  let len = 0;
  // console.log(s,arr,arr2,s2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr[i]) { //i=1,j=1   i=0,j=2
        let res = s.substring(i, arr.length - j)
        // console.log(res,s2.slice(j,arr.length-i))
        if (res === s2.substring(j, arr.length - i)) {
          if (len <= res.length) {
            len = res.length;
            result = res
          }
        }
      }
    }
  }
  return result;
};

