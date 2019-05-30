// 会溢出  用链表
function ListNode(val){
  this.val = val;
  this.next = null;
}
/**
 * 
 * @param {linklist} l1 
 * @param {linklist} l2 
 */
var addTwoNumbers = function (l1, l2) {
  let a =[],
  b =[],
  // 引用赋值
  newL1 = l1,
  newL2 = l2;

  // 数组需要倒置  而这个链表是单向的
  // array  reverse();
  while(newL1){
    a.push(newL1.val);
    newL1 = newL1.next;
  }
  while(newL2){
    b.push(newL2.val);
    newL2 = newL2.next;
  }

  a.reverse();
  b.reverse();
  console.log(a,b);

  let ans = []; //两位相加的结果
  let carry = 0;//是否进位
  while(a.length||b.length){
    let c = a.length?a.shift():0;
    let d = b.length?b.shift():0;
    let sum = c+d+carry;
    ans.push(sum%10);
    if(sum>=10){
      carry = 1;
    } else {
      carry = 0;
    }
  }
  carry && (ans.push(carry));
  ans.reverse();
  // 要返回也应该是个节点  头节点
  let ret = [];
  for (let i=0,len = ans.length;i<len;i++){
    ret[i] = new ListNode(ans[i]);
  }
  // 链起来
  for (let i=0,len = ans.length;i<len-1;i++){
    ret[i].next = ret[i+1];
  }
  return ret[0];


  // return ans.join('');
}

// 链表初始化
let a1 = new ListNode(3),
a2 = new ListNode(2),
a3 = new ListNode(3);
a1.next = a2;
a2.next = a3;

let b1 = new ListNode(7),
b2 = new ListNode(8),
b3 = new ListNode(9);
b1.next = b2;
b2.next = b3;

// console.log( addTwoNumbers(a1,b1));
let ret = addTwoNumbers(a1,b1);
while(ret){
  console.log(ret.val);
  ret = ret.next;
}
// let node = n1;
// while(node){
//   console.log(node.val)
//   node = node.next
// }