/**
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/submissions/
 * 232. 用栈实现队列
 * 
 * 用两个堆栈 stack1 和 stack2 来模拟队列
 * 入队列时：向 stack1 中压入元素
 * 出队列时：将 stack1 中的元素依次弹出堆栈，并压入 stack2 中，最后弹出 stack2 的栈顶元素
 */

 // 最佳， 利用js的数组能做队列的原因
 var MyQueue = function() {
     this.queue = [];
     this.count = 0;
 }
/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
 MyQueue.prototype.push = function (x) {
     this.queue.push(x);
     this.count++;
 }
 /**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
 MyQueue.prototype.pop = function () {
     if(!this.empty()) {
         this.count--;
         return this.queue.shift()
     }
 }
/**
 * Get the front element.
 * @return {number}
 */
 MyQueue.prototype.peek = function () {
     if(!this.empty()) return this.queue[0];
 }

 /**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.count == 0;
}

// 两个栈模拟
var MyQueue = function() {
    this.stackA = [];
    this.stackB = [];
  };
  
  MyQueue.prototype.push = function(x) {
    this.stackA.push(x);
  };
  
  MyQueue.prototype.pop = function() {
    if (!this.stackB.length) {
      while(this.stackA.length) {
        this.stackB.push(this.stackA.pop())
      }
    }
    return this.stackB.pop()
  };
  
  MyQueue.prototype.peek = function() {
    if (!this.stackA.length) {
      while(this.stackB.length) {
        this.stackA.push(this.stackB.pop())
      }
    }
    return this.stackA[0]
  };
  
  MyQueue.prototype.empty = function() {
    if (this.stackA.length || this.stackB.length) {
      return false
    } 
    return true
  };

