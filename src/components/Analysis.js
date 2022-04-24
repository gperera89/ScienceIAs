import React, { useEffect, useRef } from "react";
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
import { giveGuidance } from "../redux/guidanceSlice";

const Analysis = () => {
	const An1state = useSelector((state) => state.score.An1);
	const An2state = useSelector((state) => state.score.An2);
	const An3state = useSelector((state) => state.score.An3);
	const An4state = useSelector((state) => state.score.An4);
	const AnCstate = useSelector((state) => state.score.AnC);
	const dispatch = useDispatch();
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (An1state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The report includes insufficient relevant raw data to support a valid conclusion to the research question.";
					break;
				case 3:
				case 4:
					statement =
						"The report includes relevant but incomplete quantitative and qualitative raw data that could support a simple or partially valid conclusion to the research question";
					break;
				case 5:
				case 6:
					statement =
						"The report includes sufficient relevant quantitative and qualitative raw data that could support a detailed and valid conclusion to the research question.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [An1state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (An2state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"Some basic data processing is carried out but is either too inaccurate or too insufficient to lead to a valid conclusion.";
					break;
				case 3:
				case 4:
					statement =
						"Appropriate and sufficient data processing is carried out that could lead to a broadly valid conclusion but there are significant inaccuracies and inconsistencies in the processing.";
					break;
				case 5:
				case 6:
					statement =
						"Appropriate and sufficient data processing is carried out with the accuracy required to enable a conclusion to the research question to be drawn that is fully consistent with the experimental data.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [An2state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (An3state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The report shows evidence of little consideration of the impact of measurement uncertainty on the analysis.";
					break;
				case 3:
				case 4:
					statement =
						"The report shows evidence of some consideration of the impact of measurement uncertainty on the analysis.";
					break;
				case 5:
				case 6:
					statement =
						"The report shows evidence of full and appropriate consideration of the impact of measurement uncertainty on the analysis.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [An3state, dispatch]);

	useEffect(() => {
		if (isMounted.current) {
			let statement;
			switch (An4state) {
				case 0:
					statement =
						"The student's report does not reach a standard described by the descriptors below.";
					break;
				case 1:
				case 2:
					statement =
						"The processed data is incorrectly or insufficiently interpreted so that the conclusion is invalid or very incomplete.";
					break;
				case 3:
				case 4:
					statement =
						"The processed data is interpreted so that a broadly valid but incomplete or limited conclusion to the research question can be deduced.";
					break;
				case 5:
				case 6:
					statement =
						"The processed data is correctly interpreted so that a completely valid and detailed conclusion to the research question can be deduced.";
					break;
				default:
					statement = "";
			}
			dispatch(giveGuidance(statement));
		} else {
			isMounted.current = true;
		}
	}, [An4state, dispatch]);
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
