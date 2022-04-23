import React from "react";
import Button from "./Button";
import "./Criteria.css";

const PersonalEngagement = () => {
	return (
		<>
			<div className='criteria sig-int'>
				<p>Personal Engagement with Exploration</p>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					1
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					2
				</Button>
			</div>
			<br />
			<div className='criteria sig-int'>
				<p>Personal Signficance or Interest</p>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					1
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					2
				</Button>
			</div>
			<br />
			<div className='criteria it-init'>
				<p>Independent Thinking or Initiative</p>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					1
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					2
				</Button>
			</div>
			<br />
			<div className=' criteria comment'>
				<p>Additional Comment</p>
				<textarea type='text-area' placeholder='Strengths and limitations...' />
			</div>
		</>
	);
};

export default PersonalEngagement;
