/**
 * https://leetcode-cn.com/problems/design-circular-queue/
 * 622  设计循环队列
 * isFull isEmpty 查看头，尾指针是否相同，且指针指向的元素是否为空
 * python ,java版
 * https://unclegem.cn/2018/08/20/Leetcode%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-622-%E8%AE%BE%E8%AE%A1%E5%BE%AA%E7%8E%AF%E9%98%9F%E5%88%97/
 */

var MyCircularQueue = function(k) {
    // 数据存储容器
    this.queue = new Array(k);
    this.head = -1;
    this.tail = -1;
    this.size = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return;
    if(this.isEmpty()) this.head = 0;
    let tail = (this.tail + 1) % this.size;
    this.queue[tail] = value;
    this.tail = tail;
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    let head = (this.head + 1) % this.size;
    if(this.head === this.tail){
        this.head = -1;
        this.tail = -1;
    } else {
        this.head = head;
    }
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1;
    return this.queue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1;
    return this.queue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
   return this.head === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.tail + 1) % this.size  === this.head
};

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = []
    this.front = 0;
    this.rear = 0;
    this.max = k;
    this.count = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.max;
    this.count++;
    return true;
    
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    this.queue[this.front] = '';
    this.front = (this.front + 1) % this.max;
    this.count--;
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1;
    return this.queue[this.front];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1;
    return this.rear == 0 ? this.queue[this.max - 1] : this.queue[this.rear - 1];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
   return this.count == this.max
};