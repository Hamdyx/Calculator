import React from 'react';
import { Col, Button } from 'react-bootstrap';

const CalculatorBtn: React.FC<{ val: string | number }> = ({ val }) => {
	let _className;
	if (isNaN(Number(val))) {
		if (val === '=') {
			_className = 'operationBtn equalsBtn';
		} else if (val === '.') {
			_className = 'numberBtn';
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

export default CalculatorBtn;
