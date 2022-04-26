import React, { useEffect, useRef } from "react";
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
import { giveGuidance } from "../redux/guidanceSlice";

const Exploration = () => {
	const Ex1state = useSelector((state) => state.score.Ex1);
	const Ex2state = useSelector((state) => state.score.Ex2);
	const Ex3state = useSelector((state) => state.score.Ex3);
	const Ex4state = useSelector((state) => state.score.Ex4);
	const ExCstate = useSelector((state) => state.score.ExC);
	const dispatch = useDispatch();
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Ex1state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The topic of the investigation is identified and a research question of some relevance is stated but it is not focused";
					break;
				case 3:
				case 4:
					statement =
						"The topic of the investigation is identified and a relevant but not fully focused research question is described.";
					break;
				case 5:
				case 6:
					statement =
						"The topic of the investigation is identified and a relevant and fully focused research question is clearly described.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Ex1state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Ex2state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The background information provided for the investigation is superficial or of limited relevance and does not aid the understanding of the context of the investigation.";
					break;
				case 3:
				case 4:
					statement =
						"The background information provided for the investigation is mainly appropriate and relevant and aids the understanding of the context of the investigation.";
					break;
				case 5:
				case 6:
					statement =
						"The background information provided for the investigation is entirely appropriate and relevant and enhances the understanding of the context of the investigation. ";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Ex2state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Ex3state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The methodology of the investigation is only appropriate to address the research question to a very limited extent since it takes into consideration few of the significant factors that may influence the relevance, reliability and sufficiency of the collected data";
					break;
				case 3:
				case 4:
					statement =
						"The methodology of the investigation is mainly appropriate to address the research question but has limitations since it takes into consideration only some of the significant factors that may influence the relevance, reliability and sufficiency of the collected data";
					break;
				case 5:
				case 6:
					statement =
						"The methodology of the investigation is highly appropriate to address the research question because it takes into consideration all, or nearly all, of the significant factors that may influence the relevance, reliability and sufficiency of the collected data.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Ex3state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (Ex4state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The report shows evidence of limited awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation.";
					break;
				case 3:
				case 4:
					statement =
						"The report shows evidence of some awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation";
					break;
				case 5:
				case 6:
					statement =
						"The report shows evidence of full awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [Ex4state, dispatch]);

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
					0sw
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
