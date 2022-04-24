import React, { useEffect, useRef } from "react";
import Button from "./Button";
import "./Criteria.css";
import { useSelector, useDispatch } from "react-redux";
import {
	updateCo1,
	updateCo2,
	updateCo3,
	updateCoC,
} from "../redux/scoreSlice";
import { giveGuidance } from "../redux/guidanceSlice";

const Communication = () => {
	const Co1state = useSelector((state) => state.score.Co1);
	const Co2state = useSelector((state) => state.score.Co2);
	const Co3state = useSelector((state) => state.score.Co3);
	const CoCstate = useSelector((state) => state.score.CoC);
	const dispatch = useDispatch();
	const isMounted = useRef(false);

	//Relevance and Concise
	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Co1state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The report is not well structured and is unclear: the necessary information on focus, process and outcomes is missing or is presented in an incoherent or disorganized way";
					break;
				case 3:
				case 4:
					statement =
						"The report is well structured and clear: the necessary information on focus, process and outcomes is present and presented in a coherent way. ";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Co1state, dispatch]);

	//Focus, Processes and Outcomes
	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Co2state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The understanding of the focus, process and outcomes of the investigation is obscured by the presence of inappropriate or irrelevant information";
					break;
				case 3:
				case 4:
					statement =
						"The report is relevant and concise thereby facilitating a ready understanding of the focus, process and outcomes of the investigation. ";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Co2state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Co3state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"There are many errors in the use of subject-specific terminology and conventions.";
					break;
				case 3:
				case 4:
					statement =
						"The use of subject-specific terminology and conventions is appropriate and correct. Any errors do not hamper understanding.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Co3state, dispatch]);

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
				<p>Relevance and Conciseness</p>
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
