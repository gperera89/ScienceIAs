import React from "react";
import Button from "./Button";
import "./Criteria.css";
import { useSelector, useDispatch } from "react-redux";
import {
	updateCo1,
	updateCo2,
	updateCo3,
	updateCoC,
} from "../redux/scoreSlice";
const Communication = () => {
	const Co1state = useSelector((state) => state.score.Co1);
	const Co2state = useSelector((state) => state.score.Co2);
	const Co3state = useSelector((state) => state.score.Co3);
	const CoCstate = useSelector((state) => state.score.CoC);
	const dispatch = useDispatch();
	return (
		<>
			<div className='criteria struc'>
				<p>Report Structure</p>
				<Button
					onClick={() => dispatch(updateCo1(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateCo1(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateCo1(2))}
					type='button'
					className='btn yellow'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateCo1(3))}
					type='button'
					className='btn green'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateCo1(4))}
					type='button'
					className='btn teal'>
					4
				</Button>
			</div>
			<br />
			<div className='criteria rel'>
				<p>Relevent and Concise</p>
				<Button
					onClick={() => dispatch(updateCo2(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateCo2(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateCo2(2))}
					type='button'
					className='btn yellow'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateCo2(3))}
					type='button'
					className='btn green'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateCo2(4))}
					type='button'
					className='btn teal'>
					4
				</Button>
			</div>
			<br />
			<div className='criteria sst'>
				<p>Subject-speicific Terminology and Conventions</p>
				<Button
					onClick={() => dispatch(updateCo3(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateCo3(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateCo3(2))}
					type='button'
					className='btn yellow'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateCo3(3))}
					type='button'
					className='btn green'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateCo3(4))}
					type='button'
					className='btn teal'>
					4
				</Button>
			</div>
			<br />
			<div className=' criteria comment'>
				<p>Additional Comment</p>
				<textarea
					type='text-area'
					placeholder='Strengths and limitations...'
					value={CoCstate}
					onChange={(event) => dispatch(updateCoC(event.target.value))}
				/>
			</div>
			<p>
				Co1: {Co1state}, Co2: {Co2state}, Co3: {Co3state}, Comment: {CoCstate}
			</p>
		</>
	);
};

export default Communication;
