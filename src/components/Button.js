import React from "react";
import "./Button.css";

const Button = ({ children, type, onClick, className }) => {
	return (
		<button onClick={onClick} type={type} className={className}>
			{children}
		</button>
	);
};

export default Button;

// Citation: https://www.youtube.com/watch?v=JfNjGLGaxR4&t=153s
