export default class Calcx {
	// to-do
	// 1. data={ inputStr: '', curr: 0, numbers: [], operations: [] }
	// 2. split inputStr and loop over each el, el is number ? numbers.push(el) : operations.push(el)
	// 3. concat elements before pushing to data.numbers until el is not number
	// 4. data.operations.length != 0 ? calculateInputStr() : return;
	n1: number;
	history: number = 0;
	inputStr: string;
	output: string;
	curr: number;
	numbers: number[];
	operations: string[];
	constructor() {
		this.n1 = 0;
		this.history = 0;
		// @dev
		this.inputStr = '';
		this.output = '';
		this.curr = 0;
		this.numbers = [];
		this.operations = [];
	}

	setN1(n: number) {
		this.n1 = n;
		return this.n1;
	}
	// @dev
	setCurr(n: number) {
		console.log('setCurr');
		this.curr = n;
		console.log(this.curr);
		return this.curr;
	}
	addInput(n: string) {
		console.log('addInput');
		if (!isNaN(parseInt(n)) || n === '.') {
			console.log('input is number');
			console.log(this.curr.toString());
			if (n === '.' && this.n1.toString().includes('.')) {
				console.log('number already has DOT ( . )');
				return;
			}
			this.setCurr(parseFloat(this.curr + '' + n));
			if (this.numbers.length >= 1 && this.operations.length >= 1) {
				this.calculateInputStr();
			}
		} else {
			console.log('input is operation');
			this.operationAdded(n);
		}
		this.inputStr += n;
		console.log(this.inputStr);
		return this.inputStr;
	}
	operationAdded(op: string) {
		console.log('operationAdded');
		this.numbers.push(this.curr);
		this.operations.push(op);
		this.setCurr(0);
		this.calculateInputStr();
	}
	calculateInputStr() {
		console.log('calculateInputStr');
		console.log(this.inputStr);
		console.log(this.output);
		console.log(this.curr);
		console.log(this.numbers);
		console.log(this.operations);
		if (
			this.numbers.length <= 1 &&
			this.operations.length <= 1 &&
			this.curr === 0
		) {
			console.log('no calculation needed');
			return;
		} else {
			this.operations.forEach((op, i) => {
				console.log(
					`${this.numbers[i]} ${op} ${this.numbers[i + 1] || this.curr}`
				);
			});
		}
	}
	// @dev

	setHistory(n: number) {
		this.history = n;
		return this.history;
	}

	add = (a: number, b: number) => {
		console.log(`${a} + ${b} = ${a + b}`);
		this.history = a + b;
		return this.history;
	};

	subtract = (a: number, b: number) => {
		console.log(`${a} - ${b} = ${a - b}`);
		this.history = a - b;
		return this.history;
	};

	multiply = (a: number, b: number) => {
		console.log(`${a} * ${b} = ${a * b}`);
		this.history = a * b;
		return this.history;
	};

	divide = (a: number, b: number) => {
		console.log(`${a} / ${b} = ${a / b}`);
		this.history = a / b;
		return this.history;
	};
}
