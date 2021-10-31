import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './Calculator.css';

export const Calculator = () => {
	const [n1, setN1] = useState('Hello');

	const row0 = ['AC', '+/-', '%', '/'].map((el) => <CalculatorBtn key={el} val={el} />);
	const row1 = [7, 8, 9, 'X'].map((el) => <CalculatorBtn key={el} val={el} />);
	const row2 = [4, 5, 6, '-'].map((el) => <CalculatorBtn key={el} val={el} />);
	const row3 = [1, 2, 3, '+'].map((el) => <CalculatorBtn key={el} val={el} />);
	const row4 = ['.', '='].map((el) => <CalculatorBtn key={el} val={el} />);

	useEffect(() => {
		console.log(document.querySelectorAll('.calculatorBtn'));
		const calcBtns = Array.from(document.querySelectorAll('.calculatorBtn'));
		calcBtns.forEach((btn) => {
			btn.addEventListener('click', (ev) => {
				console.log(`Button Clicked: ${ev.target.value}`);
			});
		});

		console.log(document.querySelectorAll('.numberBtn'));
		const numberBtns = Array.from(document.querySelectorAll('.numberBtn'));
		numberBtns.forEach((btn) => {
			btn.addEventListener('click', (ev) => {
				console.log(`numberBtn Clicked: ${ev.target.value}`);
				let _n1 = n1 === 'Hello' ? '' : n1;
				setN1(_n1 + '' + ev.target.value);
			});
		});
	});

	return (
		<Container className="calculator">
			<Row className="output-row">
				<Col>{n1}</Col>
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
	console.log(`${val}: ${!isNaN(val)}`);
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
