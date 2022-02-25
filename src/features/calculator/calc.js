export default class Calcx {
	// to-do
	// 1. data={ inputStr: '', curr: 0, numbers: [], operations: [] }
	// 2. split inputStr and loop over each el, el is number ? numbers.push(el) : operations.push(el)
	// 3. concat elements before pushing to data.numbers until el is not number
	// 4. data.operations.length != 0 ? calculateInputStr() : return;
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
