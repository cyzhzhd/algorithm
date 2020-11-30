// https://leetcode.com/problems/kth-largest-element-in-a-stream/
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums;
};

KthLargest.prototype.add = function (val) {
  this.nums.push(val);
  this.nums.sort((a, b) => b - a);
  return this.nums[this.k - 1];
};

var obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj);
var param_1 = obj.add(3);
console.log(param_1);
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
