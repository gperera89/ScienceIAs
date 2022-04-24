import React from "react";
import Button from "./Button";
import "./Criteria.css";
import { useSelector, useDispatch } from "react-redux";
import {
	updateEv1,
	updateEv2,
	updateEv3,
	updateEv4,
	updateEvC,
} from "../redux/scoreSlice";
const Evaluation = () => {
	const Ev1state = useSelector((state) => state.score.Ev1);
	const Ev2state = useSelector((state) => state.score.Ev2);
	const Ev3state = useSelector((state) => state.score.Ev3);
	const Ev4state = useSelector((state) => state.score.Ev4);
	const EvCstate = useSelector((state) => state.score.EvC);
	const dispatch = useDispatch();
	return (
		<>
			<div className='criteria conc'>
				<p>Conclusion</p>
				<Button
					onClick={() => dispatch(updateEv1(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateEv1(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateEv1(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateEv1(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateEv1(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateEv1(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateEv1(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria scicont'>
				<p>Comparison to Scientific Content</p>
				<Button
					onClick={() => dispatch(updateEv2(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateEv2(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateEv2(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateEv2(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateEv2(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateEv2(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateEv2(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria swl'>
				<p>Strengths, Weaknessess and Limitation</p>
				<Button
					onClick={() => dispatch(updateEv3(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateEv3(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateEv3(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateEv3(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateEv3(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateEv3(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateEv3(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria improv'>
				<p>Improvements and Ententions</p>
				<Button
					onClick={() => dispatch(updateEv4(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateEv4(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateEv4(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateEv4(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateEv4(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateEv4(5))}
					type='button'
					className='btn grey'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateEv4(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className=' criteria comment'>
				<p>Additional Commext</p>
				<textarea
					type='text-area'
					placeholder='Strengths and limitations...'
					value={EvCstate}
					onChange={(event) => dispatch(updateEvC(event.target.value))}
				/>
			</div>
			<p>
				Ev1: {Ev1state}, Ev2: {Ev2state}, Ev3: {Ev3state}, Ev4: {Ev4state},
				Comment: {EvCstate}
			</p>
		</>
	);
};

export default Evaluation;
