import LinkedList from './LinkedList';

const list = new LinkedList();
list
  .append(1)
  .append(4)
  .append(3)
  .append(5)
  .append(2)
  .append(6)
  .append(2)
  .append(7)
  console.log(list)
console.log(list.toString())

const partition = (head, x) => {
  // let l1 = new LinkedList;
  // let l2 = new LinkedList;
  let listNode = head;
  let next,preHead,preTail,afterHead,afterTail
  if(!listNode){
    return null;
  }

  while (listNode) {
  // console.log(listNode.value)
    next = listNode.next;
    listNode.next = null;
    if(listNode.value<x){
      if(!preHead){
        preHead = listNode;
        preTail = listNode;
      } else{
        preTail.next = listNode;
        preTail = listNode;
      }
    } else{
      if(!afterHead){
        afterHead = listNode;
        afterTail = listNode;
      } else{
        afterTail.next = listNode;
        afterTail = listNode;
      }
    }
    listNode = next;
  }

  if(preTail){
    preTail.next = afterHead;
    return preHead;
  } else{
    return afterHead;
  }
}
// console.log(list)
let li = partition(list.head,3)
// console.log(li)

let curNode = li;
while(curNode){
  console.log(curNode.value);
  curNode = curNode.next;
}

