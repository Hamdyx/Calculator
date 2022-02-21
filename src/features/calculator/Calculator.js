import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './Calculator.css';
// @bug every component in Calculator rerenderes
// 	whenever a number is clicked or a key is pressed
export const Calculator = () => {
	const [n1, setN1] = useState('Hello');

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

		function appendNumber(n) {
			console.log(`Number Entered: ${n}`);
			// selects related dom element
			// const node = document.querySelector(`button[value="${n}"]`);
			let _n1 = n1 === 'Hello' ? '' : n1;
			console.log(n1);
			console.log(_n1);
			console.log(n);
			console.log(_n1 + '' + n);
			_n1 = _n1 + '' + n;
			console.log(_n1);
			// @bug n1 is always 'Hello'
			setN1(_n1);
		}

		function enterPressed() {
			console.log(`enterPressed`);
		}

		function keyPressed(ev) {
			console.log(`keyPressed`);
			console.log(ev.key);
			if (!isNaN(ev.key) && ev.key !== ' ') appendNumber(ev.key);
			if (ev.key === 'Enter') enterPressed();
		}

		// handles when user press Numpad or Digits (0-9)
		window.addEventListener('keydown', keyPressed);

		const numberBtns = Array.from(document.querySelectorAll('.numberBtn'));
		numberBtns.forEach((btn) => {
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
	}, []);

	return (
		<Container className="calculator">
			<Row className="output-row">
				<Col>
					<p>
						<small>prev number</small>
					</p>
					{n1}
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
