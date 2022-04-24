import React from "react";
import Button from "./Button";
import "./Criteria.css";
import { useSelector, useDispatch } from "react-redux";
import {
	updateAn1,
	updateAn2,
	updateAn3,
	updateAn4,
	updateAnC,
} from "../redux/scoreSlice";

const Analysis = () => {
	const An1state = useSelector((state) => state.score.An1);
	const An2state = useSelector((state) => state.score.An2);
	const An3state = useSelector((state) => state.score.An3);
	const An4state = useSelector((state) => state.score.An4);
	const AnCstate = useSelector((state) => state.score.AnC);
	const dispatch = useDispatch();
	return (
		<>
			<div className='criteria rd'>
				<p>Raw Data</p>
				<Button
					onClick={() => dispatch(updateAn1(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateAn1(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateAn1(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateAn1(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateAn1(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateAn1(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateAn1(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria pd'>
				<p>Processed Data</p>
				<Button
					onClick={() => dispatch(updateAn2(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateAn2(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateAn2(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateAn2(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateAn2(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateAn2(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateAn2(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria uncertainties'>
				<p>Impact of Uncertainties</p>
				<Button
					onClick={() => dispatch(updateAn3(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateAn3(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateAn3(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateAn3(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateAn3(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateAn3(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateAn3(6))}
					type='button'
					className='btn teal'>
					6
				</Button>
			</div>
			<br />
			<div className='criteria interpretation'>
				<p>Interpretation of Processed Data</p>
				<Button
					onClick={() => dispatch(updateAn4(0))}
					type='button'
					className='btn primary'>
					0
				</Button>
				<Button
					onClick={() => dispatch(updateAn4(1))}
					type='button'
					className='btn red'>
					1
				</Button>
				<Button
					onClick={() => dispatch(updateAn4(2))}
					type='button'
					className='btn orange'>
					2
				</Button>
				<Button
					onClick={() => dispatch(updateAn4(3))}
					type='button'
					className='btn yellow'>
					3
				</Button>
				<Button
					onClick={() => dispatch(updateAn4(4))}
					type='button'
					className='btn chartreuse'>
					4
				</Button>
				<Button
					onClick={() => dispatch(updateAn4(5))}
					type='button'
					className='btn green'>
					5
				</Button>
				<Button
					onClick={() => dispatch(updateAn4(6))}
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
					value={AnCstate}
					onChange={(event) => dispatch(updateAnC(event.target.value))}
				/>
			</div>
			<p>
				An1: {An1state}, An2: {An2state}, An3: {An3state}, A4: {An4state},
				Comment: {AnCstate}
			</p>
		</>
	);
};

export default Analysis;
