/* exports.add = (a, b) => {
	console.log(`${a} + ${b} = ${a + b}`);
	return a + b;
};

exports.subtract = (a, b) => {
	console.log(`${a} - ${b} = ${a - b}`);
	return a - b;
};

exports.multiply = (a, b) => {
	console.log(`${a} * ${b} = ${a * b}`);
	return a * b;
};

exports.divide = (a, b) => {
	console.log(`${a} / ${b} = ${a / b}`);
	return a / b;
}; */

/* export default  */
export default class Calcx {
	constructor() {
		this.n1 = 0;
		this.history = 0;
	}

	setN1(n) {
		this.n1 = n;
		return this.n1;
	}

	setHistory(n) {
		this.history = n;
		return this.history;
	}

	add = (a, b) => {
		console.log(`${a} + ${b} = ${a + b}`);
		this.history = a + b;
		return this.history;
	};

	subtract = (a, b) => {
		console.log(`${a} - ${b} = ${a - b}`);
		this.history = a - b;
		return this.history;
	};

	multiply = (a, b) => {
		console.log(`${a} * ${b} = ${a * b}`);
		this.history = a * b;
		return this.history;
	};

	divide = (a, b) => {
		console.log(`${a} / ${b} = ${a / b}`);
		this.history = a / b;
		return this.history;
	};
}
