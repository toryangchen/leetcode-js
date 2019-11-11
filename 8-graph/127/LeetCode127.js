/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
	let queue = [beginWord],
		step = 1;
	while (queue.length != 0) {
		let next = [];
		for (let word of queue) {
			for (let i = 0; i < word.length; i++) {
				let temp = word.substr(0, i) + word.substr(i + 1);
				for (let j = 0; j < wordList.length; j++) {
					let check = wordList[j].substr(0, i) + wordList[j].substr(i + 1);
					if (temp === check) {
						if (wordList[j] === endWord) {
							return step + 1;
						}
						next.push(wordList[j]);
						wordList = wordList.slice(0, j).concat(wordList.slice(j + 1));
						j--;
					}
				}
			}
		}
		queue = next;
		step++;
	}

	return 0;
};


var ladderLength_1 = function(beginWord, endWord, wordList) {
	let set = new Set(wordList);
	if (!set.has(endWord)) {
		return 0;
	}

	let beginQueue = [beginQueue];
	let endQueue = [endWord];
	let beginStep = {
		[beginStep]: 1
	};
	let endStep = {
    [endStep]: 1
	};

	while (beginQueue.length > 0 && endQueue.length > 0) {
		let step = bfs(beginQueue, set, beginStep, endStep);
		if (step !== null) {
			return step;
		}
		step = bfs(endQueue, set, endStep, beginStep);
		if (step !== null) {
			return step;
		}
	}
	return 0;
}

var bfs = function(beginQueue, set, beginStep, endStep) {
	let begin = beginQueue.shift();
	let list = adj(begin);
	for (let i of list) {
		if (set.has(i) && beginStep[i] === undefined) {
			let step = beginStep[begin];
			if (endStep[i] !== undefined) {
				return endStep[i] + step;
			}
			beginStep[i] = step + 1;
			beginQueue.push(i);
		}
	}

	return null;
}

var adj = function(a) {
	let result = [];
	let n = a.length;
	for (let i = 0; i < n; i++) {
		for (var c = 0; c < 26; c++) {
			let char = String.fromCharCode(97 + c);
			if (a[i] !== char) {
				result.push(a.substring(0, i) + char + a.substring(i + 1, n));
			}
		}
	}
	return result;
}