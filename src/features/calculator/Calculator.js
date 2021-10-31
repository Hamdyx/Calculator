import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './Calculator.css';

export const Calculator = () => {
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
	});

	return (
		<Container className="calculator">
			<Row className="output-row">
				<Col>HELLO</Col>
			</Row>
			<Row className="operations-row">{row0}</Row>

			<Row className="operations-row">{row1}</Row>
			<Row className="operations-row">{row2}</Row>
			<Row className="operations-row">{row3}</Row>
			<Row className="operations-row">
				<Col md={{ span: 6 }}>
					<Button className="calculatorBtn" value={0}>
						0
					</Button>
				</Col>
				{row4}
			</Row>
		</Container>
	);
};

const CalculatorBtn = ({ val }) => {
	return (
		<Col md={{ span: 3 }}>
			<Button className="calculatorBtn" value={val}>
				{val}
			</Button>
		</Col>
	);
};
