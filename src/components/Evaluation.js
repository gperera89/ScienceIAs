import React, { useEffect, useRef } from "react";
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
import { giveGuidance } from "../redux/guidanceSlice";

const Evaluation = () => {
	const Ev1state = useSelector((state) => state.score.Ev1);
	const Ev2state = useSelector((state) => state.score.Ev2);
	const Ev3state = useSelector((state) => state.score.Ev3);
	const Ev4state = useSelector((state) => state.score.Ev4);
	const EvCstate = useSelector((state) => state.score.EvC);
	const dispatch = useDispatch();
	const isMounted = useRef(false);

	//Conlcusion guidance
	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Ev1state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below";
					break;
				case 1:
				case 2:
					statement =
						"A conclusion is outlined which is not relevant to the research question or is not supported by the data presented.";
					break;
				case 3:
				case 4:
					statement =
						"A conclusion is described which is relevant to the research question and supported by the data presented.";
					break;
				case 5:
				case 6:
					statement =
						"A detailed conclusion is described and justified which is entirely relevant to the research question and fully supported by the data presented.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Ev1state, dispatch]);

	//Scientific Context
	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Ev2state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The conclusion makes superficial comparison to the accepted scientific context.";
					break;
				case 3:
				case 4:
					statement =
						"A conclusion is described which makes some relevant comparison to the accepted scientific context.";
					break;
				case 5:
				case 6:
					statement =
						"A conclusion is correctly described and justified through relevant comparison to the accepted scientific context.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Ev2state, dispatch]);
	//Strengths and Weaknesses
	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Ev3state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are outlined but are restricted to an account of the practical or procedural issues faced. ";
					break;
				case 3:
				case 4:
					statement =
						"Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are described and provide evidence of some awareness of the methodological issues involved in establishing the conclusion.";
					break;
				case 5:
				case 6:
					statement =
						"Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are discussed and provide evidence of a clear understanding of the methodological issues involved in establishing the conclusion.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Ev3state, dispatch]);

	//Improvement and extensions
	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Ev4state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The student has outlined very few realistic and relevant suggestions for the improvement and extension of the investigation.";
					break;
				case 3:
				case 4:
					statement =
						"The student has described some realistic and relevant suggestions for the improvement and extension of the investigation.";
					break;
				case 5:
				case 6:
					statement =
						"The student has discussed realistic and relevant suggestions for the improvement and extension of the investigation.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Ev4state, dispatch]);

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
					className='btn green'>
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
