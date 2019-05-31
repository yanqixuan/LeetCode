/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let x = 1;
  let value1 = 0, value2 = 0;
  while (l1 || l2) {
    if (l1) { 
      value1 += l1.val * x;
      l1 = l1.next;
     }
    if (l2) { 
      value2 += l2.val * x;
      l2 = l2.next;
     }
    x *= 10;
  }
  let value = value1 + value2;
  console.log(value)
  let head = value % 10
  let lsHead = new ListNode(head)
  value = parseInt(value / 10)
  while (value > 0) {
    let val = value % 10
    let node = new ListNode(val)
    ls = lsHead;
    while(ls.next){
      ls = ls.next
    }
    ls.next = node;
    value = parseInt(value/10);
  }
  return lsHead;
};
