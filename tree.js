function treeConstructor(strArr) {
	let parents = {};
	let children = {};
	for (let j = 0; j < strArr.length; j++) {
		//use regular exp for convert ("1,2") => ["1", "2"]
		let pair = strArr[j].replace(/[()]/g, "").split(",");
		let child = pair[0];
		let parent = pair[1];

		if (parents[parent]) {
			parents[parent].push(child);
		} else {
			parents[parent] = [child];
		}

		if (parents[parent].length > 2) {
			return false;
		}

		if (children[child]) {
			return false;
		} else {
			children[child] = parent;
		}
	}
	let root_count = 0;
	let parent_values = Object.keys(parents);
	for (let j = 0; j < parent_values.length; j++) {
		if (!children[parent_values[j]]) {
			root_count += 1;
		}
		if (root_count > 1) {
			return false;
		}
	}
	return true;
}

console.log(treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(treeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
