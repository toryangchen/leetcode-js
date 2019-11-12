/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
	const reqToCourse = {},
		degreeMap = {},
		res = [],
		queue = []

	for (const pair of prerequisites) {
		reqToCourse[pair[1]] ? reqToCourse[pair[1]].push(pair[0]) : reqToCourse[pair[1]] = [pair[0]]
	}
	for (let i = 0; i < numCourses; i++) {
		degreeMap[i] = 0
	}
	for (const req in reqToCourse) {
		for (const course of reqToCourse[req]) {
			degreeMap[course]++
		}
	}

	for (const course in degreeMap) {
		if (degreeMap[course] === 0) {
			queue.push(course)
		}
	}


	while (queue.length) {
		const course = queue.shift()
		res.push(course)
		if (reqToCourse[course]) {
			for (const course2 of reqToCourse[course]) {
				degreeMap[course2]--
				if (degreeMap[course2] === 0) {
					queue.push(course2)
				}
			}
		}
	}

	return res.length === Object.keys(degreeMap).length ? res : []
};