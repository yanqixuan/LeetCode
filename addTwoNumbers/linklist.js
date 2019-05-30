function ListNode(val){
    // 将数字的每一位变成一个类 ListNode的实例
    // 线性表
    this.val = val;
    this.next = null;
}

let num = 1234567890;
let n1 = new ListNode(1);
console.log(n1);
let n2 = new ListNode(2);
n1.next = n2;
let n3 = new ListNode(3);
n2.next = n3;
// console.log(n1,n2);
// console.log(n1.next.val);
let node = n1;
while(node){
    console.log(node.val);
    node = node.next;
}
let n ;
let arr = [];
for(let i =1;i<10;i++){
    n = new ListNode(i);
    arr.push(n);
    n.next = new ListNode(i+1);
    // console.log(n);
}
console.log(arr);