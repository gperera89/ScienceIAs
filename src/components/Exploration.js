import React from "react";
import Button from "./Button";
import "./Criteria.css";

const Exploration = () => {
	return (
		<>
			<div className='criteria rq'>
				<p>Research Question</p>
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
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria background'>
				<p>Background Information</p>
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
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria mnm'>
				<p>Method and Methodology</p>
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
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria see'>
				<p>Safety, Ethics and Environment</p>
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
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => console.log("click!")}
					type='button'
					className='btn teal'>
					6
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

export default Exploration;
