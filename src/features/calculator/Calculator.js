import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Calc from './calc';

import './Calculator.css';
// @bug every component in Calculator rerenderes
// 	whenever a number is clicked or a key is pressed
export const Calculator = () => {
	/* const [n1, setN1] = useState('Hello'); */
	const Calcx = new Calc();

	const row0 = ['C', '%', 'x', '/'].map((el) => (
		<CalculatorBtn key={el} val={el} />
	));
	const row1 = [7, 8, 9, 'X'].map((el) => <CalculatorBtn key={el} val={el} />);
	const row2 = [4, 5, 6, '-'].map((el) => <CalculatorBtn key={el} val={el} />);
	const row3 = [1, 2, 3, '+'].map((el) => <CalculatorBtn key={el} val={el} />);
	const row4 = ['.', '='].map((el) => <CalculatorBtn key={el} val={el} />);

	useEffect(() => {
		// console.log(document.querySelectorAll('.calculatorBtn'));
		const calcBtns = Array.from(document.querySelectorAll('.calculatorBtn'));
		calcBtns.forEach((btn) => {
			btn.addEventListener('click', (ev) => {
				console.log(`Button Clicked: ${ev.target.value}`);
			});
		});

		const outputNode = document.querySelector('.output-row .col');
		const historyNode = outputNode.childNodes[0];
		const numberNode = outputNode.childNodes[1];
		let numberValue = 0;
		let historyValue = 0;

		function resetCalc() {
			console.log('reset everything');
			historyNode.textContent = 'prev number';
			numberNode.textContent = 'Hello';
		}

		// @bug gets called multiple times as the state changes
		// gets called atleast one time for each number on the output screen
		function appendNumber(n) {
			console.log(`Number Entered: ${n}`);
			let historyTxt = historyNode.textContent;
			if (historyTxt[historyTxt.length - 2] === '=') {
				console.log('reset everything');
				historyNode.textContent = 'prev number';
				numberNode.textContent = n;
				/* resetCalc(); */
				return;
			}
			// selects output screen
			let currN = numberNode.textContent;

			if (n === '.' && currN.includes('.')) {
				console.log('number already has DOT ( . )');
				return;
			}
			// selects related dom element
			// const node = document.querySelector(`button[value="${n}"]`);
			let outNumber = currN === 'Hello' || currN === '0' ? '' : currN;
			outNumber = outNumber + '' + n;
			console.log(`outNumber: ${outNumber}`);
			numberNode.textContent = outNumber;
			numberValue = parseFloat(outNumber);
			Calcx.setN1(parseFloat(outNumber));

			// @bug n1 is always 'Hello'
			// @bug n1 =  state(0) => state(1) => state(2) => state(1 + 2)
			// setN1(outNumber);
		}

		function enterPressed() {
			console.log(`enterPressed`);
			if (historyValue === 0) {
				historyNode.textContent = `${parseFloat(numberNode.textContent)} = `;
				return;
			}
			const op = historyNode.textContent.split(' ')[1];
			historyNode.textContent += `${parseFloat(numberNode.textContent)} = `;
			let res = 0;

			switch (op) {
				case '+':
					console.log('addFunction(a, b)');
					res = Calcx.add(historyValue, numberValue);
					break;
				case '-':
					console.log('subtractFunction(a, b)');
					res = Calcx.subtract(historyValue, numberValue);
					break;
				case '*':
					console.log('multiplyFunction(a, b)');
					res = Calcx.multiply(historyValue, numberValue);
					break;
				case '/':
					console.log('divisionFunction(a, b)');
					res = Calcx.divide(historyValue, numberValue);
					break;
				default:
					break;
			}
			console.log('numberValue');
			console.log(numberValue);
			console.log('historyValue');
			console.log(historyValue);
			numberNode.textContent = res;
		}

		function operationPressed(op) {
			console.log(`operationPressed`);
			console.log(op);
			historyValue = parseFloat(numberNode.textContent);
			Calcx.setHistory(parseFloat(numberNode.textContent));

			/* historyNode.textContent += `${parseFloat(numberNode.textContent)} ${op} `; */
			appendHistoryNode(op);
			numberNode.textContent = '0'; // @bug if '' p element disappears until N is added
			switch (op) {
				case '+':
					console.log('addFunction(a, b)');
					Calcx.add(historyValue, numberValue);
					break;
				case '-':
					console.log('subtractFunction(a, b)');
					Calcx.subtract(historyValue, numberValue);
					break;
				case '*':
					console.log('multiplyFunction(a, b)');
					Calcx.multiply(historyValue, numberValue);
					break;
				case '/':
					console.log('divisionFunction(a, b)');
					Calcx.divide(historyValue, numberValue);
					break;
				default:
					break;
			}
		}

		function appendHistoryNode(op) {
			if (historyNode.textContent === 'prev number') {
				historyNode.textContent = `${parseFloat(
					numberNode.textContent
				)} ${op} `;
			} else
				historyNode.textContent += `${parseFloat(
					numberNode.textContent
				)} ${op} `;
		}

		function keyPressed(ev) {
			const operations = ['+', '-', '*', '/'];
			console.log(`keyPressed`);
			console.log(ev.key);
			if ((!isNaN(ev.key) && ev.key !== ' ') || ev.key === '.')
				appendNumber(ev.key);
			else if (ev.key === 'Enter') enterPressed();
			else if (operations.includes(ev.key)) operationPressed(ev.key);
			else if (ev.key === 'c') resetCalc();
		}

		// handles when user press Numpad or Digits (0-9)
		// @bug adds eventListener on every render
		window.addEventListener('keydown', keyPressed);

		const numberBtns = Array.from(document.querySelectorAll('.numberBtn'));
		numberBtns.forEach((btn) => {
			// @bug adds eventListener on every render
			btn.addEventListener('click', (ev) => {
				console.log(`numberBtn Clicked: ${ev.target.value}`);
				appendNumber(ev.target.value);
				// removes focus from clicked element as it causes a bug with the keydown ev
				// if 'enter' key used while there is a focused element
				ev.target.blur();
				/* let _n1 = n1 === 'Hello' ? '' : n1;
				setN1(_n1 + '' + ev.target.value); */
			});
		});

		const resetBtn = document.querySelector('button[value="C"]');
		resetBtn.addEventListener('click', (ev) => {
			resetCalc();
			ev.target.blur();
		});
	});

	return (
		<Container className="calculator">
			<Row className="output-row">
				<Col>
					<p>prev number</p>
					<p>Hello</p>
				</Col>
			</Row>
			<Row className="operations-row">{row0}</Row>

			<Row className="operations-row">{row1}</Row>
			<Row className="operations-row">{row2}</Row>
			<Row className="operations-row">{row3}</Row>
			<Row className="operations-row">
				<Col md={{ span: 6 }}>
					<Button className="numberBtn" value={0}>
						0
					</Button>
				</Col>
				{row4}
			</Row>
		</Container>
	);
};

const CalculatorBtn = ({ val }) => {
	let _className;
	if (isNaN(val)) {
		if (val === '=') {
			_className = 'equalsBtn';
		} else if (val === '.') {
			_className = 'dotBtn';
		} else {
			_className = 'operationBtn';
		}
	} else {
		_className = 'numberBtn';
	}
	return (
		<Col md={{ span: 3 }}>
			<Button className={_className} value={val}>
				{val}
			</Button>
		</Col>
	);
};
