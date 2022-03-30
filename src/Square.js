import React from 'react';

function Square(props) {
		let buttonStyle = props.value === 'X' ? "square square-x" : "square square-o";

		return (
			<button className={buttonStyle}
					onClick={props.onClick}>
				
				{props.value}
			
			</button>)
	
}

export default Square;