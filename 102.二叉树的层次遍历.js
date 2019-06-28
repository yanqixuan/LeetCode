/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if(!root) return [];
  const arr = [];
  const queue = [root,null];
  let levelNodes = [];
  while(queue.length>0){
    const t = queue.shift();
    if(t){
      levelNodes.push(t.val);
      if(t.left){
        queue.push(t.left);
      }
      if(t.right){
        queue.push(t.right);
      }
    } else {
      arr.push(levelNodes);
      levelNodes = [];
      if(queue.length>0){
        queue.push(null);
      }
    }
  }

  return arr;
};

