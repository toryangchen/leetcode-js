/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
	if (!head) {
		return null;
	}

	const clones = new Map();
	let n = head;
	while (n) {
		clones.set(n, new Node(n.val, n.next, n.random));
		n = n.next();
	}
	n = head;

	while (n) {
		clones.get(n).next = clones.get(n.next) || null
		clones.get(n).random = clones.get(n.random) || null
		n = n.next;
	}
	return clones.get(head);
};

var copyRandomList = function(head) {
	let visited = new Map();

	let helper = (node) => {
		if (!node) return null;
		if (visited.has(node)) {
			return visited.get(node)
		}
		let newNode = new Node(node.val)
		visited.set(node, newNode)
		newNode.next = helper(node.next)
		newNode.random = helper(node.random)
		return newNode;
	}

	return helper(head);
}