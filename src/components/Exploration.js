import React from "react";
import Button from "./Button";
import "./Criteria.css";
import { useSelector, useDispatch } from "react-redux";
import {
	updateEx1,
	updateEx2,
	updateEx3,
	updateEx4,
	updateExC,
} from "../redux/scoreSlice";

const Exploration = () => {
	const Ex1state = useSelector((state) => state.score.Ex1);
	const Ex2state = useSelector((state) => state.score.Ex2);
	const Ex3state = useSelector((state) => state.score.Ex3);
	const Ex4state = useSelector((state) => state.score.Ex4);
	const ExCstate = useSelector((state) => state.score.ExC);
	const dispatch = useDispatch();

	return (
		<>
			<div className='criteria rq'>
				<p>Research Question</p>
				<Button
					onClick={() => dispatch(updateEx1(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateEx1(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateEx1(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateEx1(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateEx1(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateEx1(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateEx1(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria background'>
				<p>Background Information</p>
				<Button
					onClick={() => dispatch(updateEx2(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateEx2(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateEx2(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateEx2(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateEx2(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateEx2(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateEx2(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria mnm'>
				<p>Method and Methodology</p>
				<Button
					onClick={() => dispatch(updateEx3(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateEx3(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateEx3(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateEx3(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateEx3(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateEx3(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateEx3(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria see'>
				<p>Safety, Ethics and Environment</p>
				<Button
					onClick={() => dispatch(updateEx4(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateEx4(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateEx4(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateEx4(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateEx4(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateEx4(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateEx4(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className=' criteria comment'>
				<p>Additional Comment</p>
				<textarea
					type='text-area'
					placeholder='Strengths and limitations...'
					value={ExCstate}
					onChange={(event) => dispatch(updateExC(event.target.value))}
				/>
			</div>
			<p>
				Ex1: {Ex1state}, Ex2: {Ex2state}, Ex3: {Ex3state}, Ex4: {Ex4state},
				Comment: {ExCstate}
			</p>
		</>
	);
};

export default Exploration;
