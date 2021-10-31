import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './Calculator.css';

export const Calculator = () => {
	return (
		<Container className="calculator">
			<Row className="output-row">
				<Col>HELLO</Col>
			</Row>
			<Row className="operations-row">
				<Col>
					<Button className="calculatorBtn">AC</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">+/-</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">%</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">/</Button>
				</Col>
			</Row>
			<Row className="operations-row">
				<Col>
					<Button className="calculatorBtn">7</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">8</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">9</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">X</Button>
				</Col>
			</Row>
			<Row className="operations-row">
				<Col>
					<Button className="calculatorBtn">4</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">5</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">6</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">-</Button>
				</Col>
			</Row>
			<Row className="operations-row">
				<Col>
					<Button className="calculatorBtn">1</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">2</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">3</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">+</Button>
				</Col>
			</Row>
			<Row className="operations-row">
				<Col md={{ span: 6 }}>
					<Button className="calculatorBtn stretchBtn">0</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">.</Button>
				</Col>
				<Col>
					<Button className="calculatorBtn">=</Button>
				</Col>
			</Row>
		</Container>
	);
};
