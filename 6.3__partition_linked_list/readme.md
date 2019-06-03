## 数据结构
  LinkedList 服务于各种算法
  
  模块化 一个文件一个类
  - node 不支持es6 模块化,
    原生支持的是require commonJS  所以要compile presets(预处理)
  append()
  - index.js 业务代码
  - ADT
    抽象数据类型  链表  配套方法  append()  toArray()  toString()

## algorithm OO写法
  封装成class export default
## webpack 看见效果

链表分割，小于的节点放左边，大于的放后面，不影响之前的顺序
1->2->2 左链表
3->4->5 右链表