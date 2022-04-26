import React, { useEffect, useRef } from "react";
import Button from "./Button";
import "./Criteria.css";
import { useSelector, useDispatch } from "react-redux";
import {
	updatePE1,
	updatePE2,
	updatePE3,
	updatePEC,
} from "../redux/scoreSlice";
import { giveGuidance } from "../redux/guidanceSlice";

const PersonalEngagement = () => {
	//assiging the state of PE1, PE2 and PEC stored in the scoreSlide as these varibles
	const PE1state = useSelector((state) => state.score.PE1);
	const PE2state = useSelector((state) => state.score.PE2);
	const PE3state = useSelector((state) => state.score.PE3);
	const PECstate = useSelector((state) => state.score.PEC);
	const dispatch = useDispatch();
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (PE1state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
					statement =
						"The evidence of personal engagement with the exploration is limited with little independent thinking, initiative or creativity.";
					break;
				case 2:
					statement =
						"The evidence of personal engagement with the exploration is clear with significant independent thinking, initiative or creativity.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [PE1state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (PE2state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
					statement =
						"The justification given for choosing the research question and/or the topic under investigation does not demonstrate personal significance, interest or curiosity";
					break;
				case 2:
					statement =
						"The justification given for choosing the research question and/or the topic under investigation demonstrates personal significance, interest or curiosity.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [PE2state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (PE3state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
					statement =
						"There is little evidence of personal input and initiative in the designing, implementation or presentation of the investigation.";
					break;
				case 2:
					statement =
						"There is evidence of personal input and initiative in the designing, implementation or presentation of the investigation.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [PE3state, dispatch]);

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
				<div className='grade'>
					PE1: {PE1state}, PE2: {PE2state}, PE3: {PE3state} Comment: {PECstate}
				</div>
			</div>
		</>
	);
};

export default PersonalEngagement;
