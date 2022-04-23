import React from "react";
import Button from "./Button";
import "./Criteria.css";

const Analysis = () => {
	return (
		<>
			<div className='criteria rd'>
				<p>Raw Data</p>
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
			<div className='criteria pd'>
				<p>Processed Data</p>
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
			<div className='criteria uncertainties'>
				<p>Impact of Uncertainties</p>
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
			<div className='criteria interpretation'>
				<p>Interpretation of Processed Data</p>
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

export default Analysis;
