import React from "react";
import Button from "./Button";

import "./Criteria.css";

const Communication = () => {
	return (
		<>
			<div className='criteria struc'>
				<p>Report Structure</p>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					2
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn green'>
					3
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					4
				</Button>
			</div>
			<br />
			<div className='criteria rel'>
				<p>Relevent and Concise</p>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					2
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn green'>
					3
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					4
				</Button>
			</div>
			<br />
			<div className='criteria sst'>
				<p>Subject-speicific Terminology and Conventions</p>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					2
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn green'>
					3
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					4
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

export default Communication;
