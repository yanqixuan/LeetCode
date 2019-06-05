/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var arr = s.split('');
  if (arr.length <= 0) {
    return 0;
  } else {
    let len = 0;
    let len2 = 0;
    let arr2 = [];
    arr.forEach(item => {
      if (arr2.length == 0) {
        arr2.push(item)
        len = 1;
      } else {
        if (arr2.includes(item)) {
          arr2 = arr2.slice( arr2.lastIndexOf(item)+1)
          arr2.push(item);
          len =(len>arr2.length?len:arr2.length)
        } else {
          arr2.push(item)
          len2 =(len2>arr2.length?len2:arr2.length)
        }
      }
    })
    return (len > len2 ? len : len2);
  }

};

