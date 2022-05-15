import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateGuidance } from "../redux/guidanceSlice";

export const guidanceData = {
	zero: "The student's report does not reach a standard described by the descriptors below.",
	pe1Low:
		"The evidence of personal engagement with the exploration is  limited with little independent thinking, initiative or creativity.",
	pe1Med:
		"The evidence of personal engagement with the exploration is  clear with significant independent thinking, initiative or creativity.",
	pe2Low:
		"The justification given for choosing the research question and/or the topic under investigation does not demonstrate personal significance, interest or curiosity",
	pe2Med:
		"The justification given for choosing the research question and/or the topic under investigation demonstrates personal significance, interest or curiosity.",
	pe3Low:
		"There is little evidence of personal input and initiative in the designing, implementation or presentation of the investigation.",
	pe3Med:
		"There is evidence of personal input and initiative in the designing, implementation or presentation of the investigation.",
	ex1Low:
		"The topic of the investigation is identified and a research question of some relevance is stated but it is not focused",
	ex1Med:
		"The topic of the investigation is identified and a relevant but not fully focused research question is described",
	ex1High:
		"The topic of the investigation is identified and a relevant and fully focused research question is clearly described",
	ex2Low:
		"The background information provided for the investigation is superficial or of limited relevance and does not aid the understanding of the context of the investigation.",
	ex2Med:
		"The background information provided for the investigation is mainly appropriate and relevant and aids the understanding of the context of the investigation.",
	ex2High:
		"The background information provided for the investigation is entirely appropriate and relevant and enhances the understanding of the context of the investigation.",
	ex3Low:
		"The methodology of the investigation is only appropriate to address the research question to a very limited extent since it takes into consideration few of the significant factors that may influence the relevance, reliability and sufficiency of the collected data.",
	ex3Med:
		"The methodology of the investigation is mainly appropriate to address the research question but has limitations since it takes into consideration only some of the significant factors that may influence therelevance, reliability and sufficiency of the collected data.",
	ex3High:
		"The methodology of the investigation is highly appropriate to address the research question because it takes into consideration all, or nearly all, of the significant factors that may influence the relevance, reliability and sufficiency of the collected data.",
	ex4Low:
		"The report shows evidence of limited awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation.",
	ex4Med:
		"The report shows evidence of some awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation",
	ex4High:
		"The report shows evidence of full awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation",
	an1Low:
		"The report includes insufficient relevant raw data to support a valid conclusion to the research question.",
	an1Med:
		"The report includes relevant but incomplete quantitative and qualitative raw data that could support a simple or partially valid conclusion to the research question",
	an1High:
		"The report includes sufficient relevant quantitative and qualitative raw data that could support a detailed and valid conclusion to the research question",
	an2Low:
		"Some basic data processing is carried out but is either too inaccurate or too insufficient to lead to a valid conclusion.",
	an2Med:
		"Appropriate and sufficient data processing is carried out that could lead to a broadly valid conclusion but there are significant inaccuracies and inconsistencies in the processing.",
	an2High:
		"Appropriate and sufficient data processing is carried out with the accuracy required to enable a conclusion to the research question to be drawn that isfully consistent with the experimental data",
	an3Low:
		"The report shows evidence of little consideration of the impact of measurement uncertainty on the analysis.",
	an3Med:
		"The report shows evidence of some consideration of the impact of measurement uncertainty on the analysis.",
	an3High:
		"The report shows evidence of full and appropriate consideration of the impact of measurement uncertainty on the analysis.",
	an4Low:
		"The processed data is incorrectly or insufficiently interpreted so that the conclusion is invalid or very incomplete.",
	an4Med:
		"The processed data is interpreted so that a broadly valid but incomplete or limited conclusion to the research question can be deduced.",
	an4High:
		"The processed data is correctly interpreted so that a completely valid and detailed conclusion to the research question can be deduced.",
	ev1Low:
		"A conclusion is outlined which is not relevant to the research question or is not supported by the data presented.",
	ev1Med:
		"A conclusion is described which is relevant to the research question and supported by the data presented.",
	ev1High:
		"A detailed conclusion is described and justified which is entirely relevant to the research question and fully supported by the data presented.",
	ev2Low:
		"The conclusion makes superficial comparison to the accepted scientific context.",
	ev2Med:
		"A conclusion is described which makes some relevant comparison to the accepted scientific context.",
	ev2High:
		"A conclusion is correctly described and justified through relevant comparison to the accepted scientific context.",
	ev3Low:
		"Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are outlined but are restricted to an account of the practical or procedural issues faced.",
	ev3Med:
		"Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are described and provide evidence of some awareness of the methodological issues involved in establishing the conclusion.",
	ev3High:
		"Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are discussed and provide evidence of a clear understanding of the methodological issues involved in establishing the conclusion.",
	ev4Low:
		"The student has outlined very few realistic and relevant suggestions for the improvement and extension of the investigation.",
	ev4Med:
		"The student has described some realistic and relevant suggestions for the improvement and extension of the investigation.",
	ev4High:
		"The student has discussed realistic and relevant suggestions for the improvement and extension of the investigation.",
	co1Low:
		"The presentation of the investigation is unclear, making it difficult to understand the focus, process and outcomes.",
	co1Med:
		"The presentation of the investigation is clear. Any errors do not hamper understanding of the focus, process and outcomes.",
	co2Low:
		"The report is not well structured and is unclear: the necessary information on focus, process and outcomes is missing or is presented in an incoherent or disorganized way.",
	co2Med:
		"The report is well structured and clear: the necessary information on focus, process and outcomes is present and presented in a coherent way.",
	co3Low:
		"The understanding of the focus, process and outcomes of the investigation is obscured by the presence of inappropriate or irrelevant information.",
	co3Med:
		"The report is relevant and concise thereby facilitating a ready understanding of the focus, process and outcomes of the investigation.",
	co4Low:
		"There are many errors in the use of subject specific terminology and conventions.",
	co4Med:
		"The use of subject specific terminology and conventions is appropriate and correct. Any errors do not hamper understanding.",
};

const GuidanceBox = () => {
	const PE1state = useSelector((state) => state.score.PE1);
	const PE2state = useSelector((state) => state.score.PE2);
	const PE3state = useSelector((state) => state.score.PE3);
	const Ex1state = useSelector((state) => state.score.Ex1);
	const Ex2state = useSelector((state) => state.score.Ex2);
	const Ex3state = useSelector((state) => state.score.Ex3);
	const Ex4state = useSelector((state) => state.score.Ex4);
	const An1state = useSelector((state) => state.score.An1);
	const An2state = useSelector((state) => state.score.An2);
	const An3state = useSelector((state) => state.score.An3);
	const An4state = useSelector((state) => state.score.An4);
	const Ev1state = useSelector((state) => state.score.Ev1);
	const Ev2state = useSelector((state) => state.score.Ev2);
	const Ev3state = useSelector((state) => state.score.Ev3);
	const Ev4state = useSelector((state) => state.score.Ev4);
	const Co1state = useSelector((state) => state.score.Co1);
	const Co2state = useSelector((state) => state.score.Co2);
	const Co3state = useSelector((state) => state.score.Co3);
	const Co4state = useSelector((state) => state.score.Co4);
	const dispatch = useDispatch();

	useEffect(() => {
		let statement;
		switch (PE1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
				statement = guidanceData.pe1Low;
				break;
			case 2:
				statement = guidanceData.pe1Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [PE1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (PE2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
				statement = guidanceData.pe2Low;
				break;
			case 2:
				statement = guidanceData.pe2Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [PE2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (PE3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
				statement = guidanceData.pe3Low;
				break;
			case 2:
				statement = guidanceData.pe3Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [PE3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ex1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ex1Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ex1Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ex1High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ex1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ex2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ex2Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ex2Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ex2High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ex2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ex3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ex3Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ex3Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ex3High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ex3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ex4state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ex4Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ex4Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ex4High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ex4state, dispatch]);

	useEffect(() => {
		let statement;
		switch (An1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.an1Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.an1Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.an1High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [An1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (An2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.an2Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.an2Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.an2High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [An2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (An3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.an3Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.an3Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.an3High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [An3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (An4state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.an4Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.an4Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.an4High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [An4state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ev1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ev1Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ev1Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ev1High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ev1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ev2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ev2Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ev2Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ev2High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ev2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ev3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ev3Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ev3Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ev3High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ev3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ev4state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ev4Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ev4Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ev4High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ev4state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Co1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.co1Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.co1Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Co1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Co2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.co2Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.co2Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Co2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Co3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.co3Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.co3Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Co3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Co4state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.co4Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.co4Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Co4state, dispatch]);

	const guidance = useSelector((state) => state.guidance.guidance);
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				boxShadow: 2,
				borderRadius: 2,
				p: 2,
				minWidth: 300,
				maxWidth: 500,
			}}>
			<Typography varient='body2'>{guidance}</Typography>
		</Box>
	);
};

export default GuidanceBox;
