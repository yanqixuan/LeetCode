/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2);
    arr = arr.sort((a,b)=>{
      return a-b;
    });
    index = Math.floor(arr.length/2);
    if(arr.length %2 == 1){
      console.log(arr)
      return arr[index]
    } else {
      return (arr[index-1]+arr[index])/2
    }
};

