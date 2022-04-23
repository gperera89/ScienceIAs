import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";

// active toggle controls when an accordion is unfolded or not.
// height determies the height of the content inside the accordion and sets the scrollHeight
// rotate rotates the chevron when the accordion is active

function Accordion(props) {
	const [activeToggle, setActiveToggle] = useState("");
	const [height, setHeight] = useState("0px");
	const [rotate, setRotate] = useState("accordion_icon");

	const content = useRef(null);

	// toggleAccordion will be activated when clicked and set the height of the accordion (making butons appear) and rotate the chevron
	const toggleAccordion = () => {
		setActiveToggle(activeToggle === "" ? "active" : "");
		setHeight(
			activeToggle === "active" ? "0px" : `${content.current.scrollHeight}px`
		);
		setRotate(
			activeToggle === "active" ? "accordion_icon" : "accordion_icon rotate"
		);
	};
	return (
		<div className='accordion-section'>
			<button className={`accordion ${activeToggle}`} onClick={toggleAccordion}>
				<p className='accordion_title'>{props.title}</p>
				<Chevron className={`${rotate}`} width={10} fill={"#777"} />
			</button>
			<div
				ref={content}
				style={{ maxHeight: `${height}` }}
				className='accordion_context'>
				<div>{props.content}</div>
			</div>
		</div>
	);
}

export default Accordion;

// Citation: https://www.youtube.com/watch?v=MAD2HnUFjgg
