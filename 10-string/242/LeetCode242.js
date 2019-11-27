/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	let arr1 = [...s]
	let arr2 = [...t]

	for (let i = 0; i < arr1.length; i++) {
		let index = arr2.indexOf(arr1[i])
		if (index !== -1) {
			arr2.splice(index, 1)
		}
	}

	return arr2.length === 0;

};