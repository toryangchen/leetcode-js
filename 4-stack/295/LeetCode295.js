/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
	this.maxHeap = [];
	this.minHeap = [];
	this.max_maxHeap = Number.MIN_VALUE;
	this.min_maxHeap = Number.MAX_VALUE;
	this.max_minHeap = Number.MIN_VALUE;
	this.min_minHeap = Number.MAX_VALUE;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

	if (this.maxHeap.length === this.minHeap.length) {
		this.saveInMaxHeap(num);
		return;
	}

	if (this.minHeap.length === 0) {
		if (this.min_maxHeap < num) {
			this.max_maxHeap = Number.MIN_VALUE;
			this.min_maxHeap = Number.MAX_VALUE;
			var pre = this.maxHeap.pop();
			this.saveInMaxHeap(num);
			this.saveInMinHeap(pre.val);
		} else {
			this.saveInMinHeap(num);
		}
		return;
	}

	if (this.maxHeap[this.maxHeap.length - 1].min > num) {
		this.saveInMinHeap(num);
	} else {
		this.max_maxHeap = Number.MIN_VALUE;
		this.min_maxHeap = Number.MAX_VALUE;
		var pre = this.maxHeap.pop();
		this.saveInMaxHeap(num);
		this.saveInMinHeap(pre.val);
	}

};

MedianFinder.prototype.saveInMinHeap = function(num) {
	this.min_minHeap = this.minHeap.length !== 0 ? Math.min(num, this.minHeap[this.minHeap.length - 1].min) : num;
	this.max_minHeap = this.minHeap.length !== 0 ? Math.max(num, this.minHeap[this.minHeap.length - 1].max) : num;
	this.minHeap.push({
		val: num,
		min: this.min_minHeap,
		max: this.max_minHeap,
	});
};

MedianFinder.prototype.saveInMaxHeap = function(num) {
	this.min_maxHeap = this.maxHeap.length !== 0 ? Math.min(num, this.maxHeap[this.maxHeap.length - 1].min) : num;
	this.max_maxHeap = this.maxHeap.length !== 0 ? Math.max(num, this.maxHeap[this.maxHeap.length - 1].max) : num;
	this.maxHeap.push({
		val: num,
		min: this.min_maxHeap,
		max: this.max_maxHeap,
	});
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
	var num1 = this.maxHeap[this.maxHeap.length - 1].min;
	var num2 = this.minHeap[this.minHeap.length - 1].max;

	console.log("result", this.maxHeap.length);
	console.log("result", this.minHeap.length);
	return this.maxHeap.length === this.maxHeap.length ?
		Math.round((num1 + num2) / 2 * 10) / 10 :
		this.maxHeap.length > this.maxHeap.length ? num1 : num2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var a = new MedianFinder();
a.addNum(1);
a.addNum(2);
console.log(a.findMedian());
a.addNum(3);
console.log(a.findMedian());