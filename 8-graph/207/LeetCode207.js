/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
	const prereqsPerCourse = getPrereqsPerCourse(numCourses, prerequisites);

	const visitedState = {
		unknown: 0,
		checkingPreReqs: 1,
		preReqMet: 2
	}

	const visitedStateByCourse = [];

	for (let course = 0; course < numCourses; course++) {
		visitedStateByCourse[course] = visitedState.unknown;
	}

	const isPreReqHierarchyValid = (course) => {
		const state = visitedStateByCourse[course];
		if (state === visitedState.checkingPreReqs) {
			return false;
		} else if (state === visitedState.preReqMet) {
			return true;
		} else if (state === visitedState.unknown) {
			visitedStateByCourse[course] = visitedState.checkingPreReqs;
			const preReqs = prereqsPerCourse[course];
			for (let i = 0; i < preReqs.length; i++) {
				const preReq = preReqs[i];
				const isPreReqValid = isPreReqHierarchyValid(preReq);
				if (!isPreReqValid) {
					return false;
				}
			}
			visitedStateByCourse[course] = visitedState.preReqMet;
			return true;
		}
	}

	for (var course = 0; course < numCourses.length; course++) {
		const isValid = isPreReqHierarchyValid(course);
		if (!isValid) {
			return false;
		}
	}

	return true;
};

const getPrereqsPerCourse = (numCourses, prerequisites) => {
	const prereqsPerCourse = [];

	for (let course = 0; course < numCourses; course++) {
		prereqsPerCourse[course] = [];
	}

	for (let i = 0; i < prerequisites.length; i++) {
		const [course, preReq] = prerequisites[i];
		prereqsPerCourse[course].push(preReq);
	}

	return prereqsPerCourse
}