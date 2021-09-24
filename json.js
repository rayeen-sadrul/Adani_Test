const awards = [
	{
		name: "James Peebles",
		category: "Physics",
		research: "Theoretical discoveries in physical cosmology",
		year: 2019,
	},
	{
		name: "Michel Mayor",
		category: "Physics",
		research: "Discovery of an exoplanet orbiting a solar-type star",
		year: 2019,
	},
	{
		name: "Didier Queloz",
		category: "Physics",
		research: "Discovery of an exoplanet orbiting a solar-type star",
		year: 2019,
	},
	{
		name: "John B. Goodenough",
		category: "Chemistry",
		research: "Development of lithium-ion batteries",
		year: 2019,
	},
	{
		name: "M. Stanley Whittingham",
		category: "Chemistry",
		research: "Development of lithium-ion batteries",
		year: 2019,
	},
	{
		name: "Akira Yoshino",
		category: "Chemistry",
		research: "Development of lithium-ion batteries",
		year: 2019,
	},
	{
		name: "Arthur Ashkin",
		category: "Physics",
		research:
			"Optical tweezers and their application to biological systems",
		year: 2018,
	},
	{
		name: "Gerard Mourou",
		category: "Physics",
		research:
			"Method of generating high-intensity, ultra-short optical pulses",
		year: 2018,
	},
	{
		name: "Donna Strickland",
		category: "Physics",
		research:
			"Method of generating high-intensity, ultra-short optical pulses",
		year: 2018,
	},
	{
		name: "Frances H. Arnold",
		category: "Chemistry",
		research: "Directed evolution of enzymes",
		year: 2018,
	},
	{
		name: "George P. Smith",
		category: "Chemistry",
		research: "Phage display of peptides and antibodies.",
		year: 2018,
	},
	{
		name: "Sir Gregory P. Winter",
		category: "Chemistry",
		research: "Phage display of peptides and antibodies.",
		year: 2018,
	},
];

function compareYear(a, b) {
	if (a.year > b.year) {
		return -1;
	}
	if (a.year < b.year) {
		return 1;
	}
	return 0;
}

// function compareCategory(a, b) {
// 	if (a.category > b.category) {
// 		return -1;
// 	}
// 	if (a.category < b.category) {
// 		return 1;
// 	}
// 	return 0;
// }

awards.sort(compareYear);
// awards.sort(compareCategory);
let arr = [];
let obj = {};
obj["category"] = "Physics";
obj["year"] = 2019;
obj["winners"] = [];
let obj1 = {};
obj1["category"] = "Chemistry";
obj1["year"] = 2019;
obj1["winners"] = [];
let obj2 = {};
obj2["category"] = "Physics";
obj2["year"] = 2018;
obj2["winners"] = [];
let obj3 = {};
obj3["category"] = "Chemistry";
obj3["year"] = 2018;
obj3["winners"] = [];
for (let key of awards) {
	if (key.category === "Physics" && key.year === 2019) {
		let inObj = {};
		inObj["name"] = key.name;
		inObj["share"] = 0.5;
		obj.winners = [...obj.winners, { inObj }];
		arr = [...arr, { obj }];
	} else if (key.category === "Chemistry" && key.year === 2019) {
		let inObj1 = {};
		inObj1["name"] = key.name;
		inObj1["share"] = 0.33;
		obj1.winners = [...obj1.winners, { inObj1 }];
		arr = [...arr, { obj1 }];
	} else if (key.category === "Physics" && key.year === 2018) {
		let inObj2 = {};
		inObj2["name"] = key.name;
		inObj2["share"] = 0.5;
		obj2.winners = [...obj2.winners, { inObj2 }];
		arr = [...arr, { obj2 }];
	} else if (key.category === "Chemistry" && key.year === 2018) {
		let inObj3 = {};
		inObj3["name"] = key.name;
		inObj3["share"] = 0.5;
		obj3.winners = [...obj3.winners, { inObj3 }];
		arr = [...arr, { obj3 }];
	}
	// arr = [...arr, { obj, obj1, obj2, obj3 }];

	// let arr1 = [];
	// if (obj.category === "physics" && key.year === 2019) {
	// 	const obj1 = {};
	// 	obj1["name"] = key.name;
	// 	obj1["share"] = 0.5;
	// 	arr1 = [...obj1];
	// }
	// obj["winners"] = arr1;
	// console.log(obj);
}
