/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
	this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
	const bs = (n) => {
		let start = 0;
		let end = this.arr.length;
		while (start < end) {
			let mid = (start + end) >> 1;
			if (n > this.arr[mid]) {
				start = mid + 1;
			} else {
				end = mid;
			}
		}
		this.arr.splice(start, 0, n);
	}

	if (this.arr.length === 0) {
		this.arr.push(num);
	} else {
		bs(num);
	}
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
	const mid = Math.floor(this.arr.length / 2);
	return (this.arr.length % 2 === 0) ? (this.arr[mid - 1] + this.arr[mid]) / 2 : this.arr[mid];
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