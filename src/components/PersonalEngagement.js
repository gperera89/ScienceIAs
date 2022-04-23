import React from "react";
import Button from "./Button";
import "./Criteria.css";
import { useSelector, useDispatch } from "react-redux";
import {
	updatePE1,
	updatePE2,
	updatePE3,
	updatePEC,
} from "../redux/scoreSlice";

const PersonalEngagement = () => {
	//assiging the state of PE1, PE2 and PEC stored in the scoreSlide as these varibles
	const PE1state = useSelector((state) => state.score.PE1);
	const PE2state = useSelector((state) => state.score.PE2);
	const PE3state = useSelector((state) => state.score.PE3);
	const PECstate = useSelector((state) => state.score.PEC);
	const dispatch = useDispatch();

	return (
		<>
			<div className='criteria eng-exp'>
				<p>Personal Engagement with Exploration</p>
				<Button
					onClick={() => dispatch(updatePE1(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updatePE1(1))}
					type='button'
					className='btn yellow'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updatePE1(2))}
					type='button'
					className='btn teal'>
					2
				</Button>
			</div>
			<br />
			<div className='criteria sig-int'>
				<p>Personal Signficance or Interest</p>
				<Button
					onClick={() => dispatch(updatePE2(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updatePE2(1))}
					type='button'
					className='btn yellow'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updatePE2(2))}
					type='button'
					className='btn teal'>
					2
				</Button>
			</div>
			<br />
			<div className='criteria it-init'>
				<p>Independent Thinking or Initiative</p>
				<Button
					onClick={() => dispatch(updatePE3(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updatePE3(1))}
					type='button'
					className='btn yellow'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updatePE3(2))}
					type='button'
					className='btn teal'>
					2
				</Button>
			</div>
			<br />
			<div className=' criteria comment'>
				<p>Additional Comment</p>
				<textarea
					type='text-area'
					placeholder='Strengths and limitations...'
					value={PECstate}
					onChange={(event) => dispatch(updatePEC(event.target.value))}
				/>
			</div>
			<div>
				<p>
					PE1: {PE1state}, PE2: {PE2state}, PE3: {PE3state}, Comment: {PECstate}
				</p>
			</div>
		</>
	);
};

export default PersonalEngagement;
