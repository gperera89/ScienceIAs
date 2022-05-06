import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateGuidance } from "../redux/guidanceSlice";

export const guidanceData = {
	zero: (
		<Typography variant='body2'>
			The student's report does not reach a standard described by the
			descriptors below.
		</Typography>
	),
	pe1Low: (
		<Typography variant='body2'>
			The evidence of personal engagement with the exploration is
			<strong> limited</strong> with <strong>little</strong> independent
			thinking, initiative or creativity.
		</Typography>
	),
	pe1Med: (
		<Typography variant='body2'>
			The evidence of personal engagement with the exploration is
			<strong> clear with significant</strong> independent thinking, initiative
			or creativity.
		</Typography>
	),
	pe2Low: (
		<Typography variant='body2'>
			The justification given for choosing the research question and/or the
			topic under investigation <strong>does not demonstrate</strong> personal
			significance, interest or curiosity.
		</Typography>
	),
	pe2Med: (
		<Typography variant='body2'>
			The justification given for choosing the research question and/or the
			topic under investigation <strong>demonstrates</strong> personal
			significance, interest or curiosity.
		</Typography>
	),
	pe3Low: (
		<Typography variant='body2'>
			There is <strong>little evidence</strong> of personal input and initiative
			in the designing, implementation or presentation of the investigation.
		</Typography>
	),
	pe3Med: (
		<Typography variant='body2'>
			There is <strong>evidence</strong> of personal input and initiative in the
			designing, implementation or presentation of the investigation.
		</Typography>
	),
	ex1Low: (
		<Typography variant='body2'>
			The topic of the investigation is identified and a research question of
			some relevance is stated but it is <strong>not focused</strong>.
		</Typography>
	),
	ex1Med: (
		<Typography variant='body2'>
			The topic of the investigation is identified and a relevant but{" "}
			<strong>not fully focused</strong> research question is described
		</Typography>
	),
	ex1High: (
		<Typography variant='body2'>
			The topic of the investigation is identified and a relevant and{" "}
			<strong>fully focused</strong> research question is clearly described
		</Typography>
	),
	ex2Low: (
		<Typography variant='body2'>
			The background information provided for the investigation is{" "}
			<strong>superficial or of limited relevance</strong> and{" "}
			<strong>does not aid the understanding</strong> of the context of the
			investigation.
		</Typography>
	),
	ex2Med: (
		<Typography variant='body2'>
			The background information provided for the investigation is{" "}
			<strong>mainly appropriate and relevant</strong> and aids the
			understanding of the context of the investigation.
		</Typography>
	),
	ex2High: (
		<Typography variant='body2'>
			The background information provided for the investigation is
			<strong> entirely appropriate and relevant</strong> and
			<strong> enhances the understanding</strong> of the context of the
			investigation.
		</Typography>
	),
	ex3Low: (
		<Typography variant='body2'>
			The methodology of the investigation is only appropriate to address the
			research question to a <strong>very limited extent</strong> since it takes
			into consideration<strong> few</strong> of the significant factors that
			may influence the relevance, reliability and sufficiency of the collected
			data.
		</Typography>
	),
	ex3Med: (
		<Typography variant='body2'>
			The methodology of the investigation is
			<strong> mainly appropriate</strong> to address the research question but
			has limitations since it takes into consideration only
			<strong> some</strong> of the significant factors that may influence the
			relevance, reliability and sufficiency of the collected data.
		</Typography>
	),
	ex3High: (
		<Typography variant='body2'>
			The methodology of the investigation is{" "}
			<strong>highly appropriate</strong> to address the research question
			because it takes into consideration <strong>all, or nearly all,</strong>
			of the significant factors that may influence the relevance, reliability
			and sufficiency of the collected data.
		</Typography>
	),
	ex4Low: (
		<Typography variant='body2'>
			The report shows evidence of <strong>limited</strong> awareness of the
			significant safety, ethical or environmental issues that are relevant to
			the methodology of the investigation.
		</Typography>
	),
	ex4Med: (
		<Typography variant='body2'>
			The report shows evidence of <strong>some</strong> awareness of the
			significant safety, ethical or environmental issues that are relevant to
			the methodology of the investigation
		</Typography>
	),
	ex4High: (
		<Typography variant='body2'>
			The report shows evidence of <strong>full</strong> awareness of the
			significant safety, ethical or environmental issues that are relevant to
			the methodology of the investigation
		</Typography>
	),
	an1Low: (
		<Typography variant='body2'>
			The report includes <strong>insufficient relevant </strong>raw data to
			support a valid conclusion to the research question.
		</Typography>
	),
	an1Med: (
		<Typography variant='body2'>
			The report includes <strong>relevant but incomplete </strong>quantitative
			and qualitative raw data that could support a
			<strong> simple or partially valid</strong>
			conclusion to the research question
		</Typography>
	),
	an1High: (
		<Typography variant='body2'>
			The report includes <strong>sufficient relevant </strong>quantitative and
			qualitative raw data that
			<strong> could support a detailed and valid </strong>conclusion to the
			research question
		</Typography>
	),
	an2Low: (
		<Typography variant='body2'>
			Some <strong>basic </strong>data processing is carried out but is either
			<strong>too inaccurate or too insufficient </strong>to lead to a valid
			conclusion.
		</Typography>
	),
	an2Med: (
		<Typography variant='body2'>
			Appropriate and sufficient data processing is carried out that could lead
			to a <strong>broadly valid </strong>conclusion but there are{" "}
			<strong>significant inaccuracies and inconsistencies </strong>in the
			processing.
		</Typography>
	),
	an2High: (
		<Typography variant='body2'>
			Appropriate and sufficient data processing is carried out with the
			accuracy required to enable a conclusion to the research question to be
			drawn that is<strong>fully consistent</strong> with the experimental data
		</Typography>
	),
	an3Low: (
		<Typography variant='body2'>
			The report shows evidence of <strong>little </strong>consideration of the
			impact of measurement uncertainty on the analysis.
		</Typography>
	),
	an3Med: (
		<Typography variant='body2'>
			The report shows evidence of <strong>some </strong>consideration of the
			impact of measurement uncertainty on the analysis.
		</Typography>
	),
	an3High: (
		<Typography variant='body2'>
			The report shows evidence of <strong>full and appropriate</strong>{" "}
			consideration of the impact of measurement uncertainty on the analysis.
		</Typography>
	),
	an4Low: (
		<Typography variant='body2'>
			The processed data is <strong>incorrectly or insufficiently </strong>
			interpreted so that the conclusion is invalid or very incomplete.
		</Typography>
	),
	an4Med: (
		<Typography variant='body2'>
			The processed data is interpreted so that a{" "}
			<strong>broadly valid but incomplete or limited </strong>conclusion to the
			research question can be deduced.
		</Typography>
	),
	an4High: (
		<Typography variant='body2'>
			The processed data is <strong>correctly interpreted</strong> so that a{" "}
			<strong>completely valid and detailed </strong>conclusion to the research
			question can be deduced.
		</Typography>
	),
	ev1Low: (
		<Typography variant='body2'>
			A conclusion is <strong>outlined</strong> which is{" "}
			<strong>not relevant</strong> to the research question or is{" "}
			<strong>not supported</strong> by the data presented.
		</Typography>
	),
	ev1Med: (
		<Typography variant='body2'>
			A conclusion is <strong>described</strong> which is{" "}
			<strong>relevant</strong> to the research question and
			<strong>supported</strong> by the data presented.
		</Typography>
	),
	ev1High: (
		<Typography variant='body2'>
			A <strong>detailed</strong> conclusion is{" "}
			<strong>described and justified</strong> which is{" "}
			<strong>entirely relevant</strong> to the research question and{" "}
			<strong>fully supported</strong> by the data presented.
		</Typography>
	),
	ev2Low: (
		<Typography variant='body2'>
			The conclusion makes <strong>superficial</strong> comparison to the
			accepted scientific context.
		</Typography>
	),
	ev2Med: (
		<Typography variant='body2'>
			A conclusion is described which makes <strong>some</strong> relevant
			comparison to the accepted scientific context.
		</Typography>
	),
	ev2High: (
		<Typography variant='body2'>
			A conclusion is <strong>correctly described and justified</strong> through
			relevant comparison to the accepted scientific context.
		</Typography>
	),
	ev3Low: (
		<Typography variant='body2'>
			Strengths and weaknesses of the investigation, such as limitations of the
			data and sources of error, are <strong>outlined</strong> but are
			<strong>
				restricted to an account of the practical or procedural
			</strong>{" "}
			issues faced.
		</Typography>
	),
	ev3Med: (
		<Typography variant='body2'>
			Strengths and weaknesses of the investigation, such as limitations of the
			data and sources of error, are <strong>described</strong> and provide
			evidence of <strong>some awareness of the methodological issues</strong>{" "}
			involved in establishing the conclusion.
		</Typography>
	),
	ev3High: (
		<Typography variant='body2'>
			Strengths and weaknesses of the investigation, such as limitations of the
			data and sources of error, are <strong>discussed</strong> and provide
			evidence of a{" "}
			<strong>clear understanding of the methodological issues</strong> involved
			in establishing the conclusion.
		</Typography>
	),
	ev4Low: (
		<Typography variant='body2'>
			The student has <strong>outlined very few</strong> realistic and relevant
			suggestions for the improvement and extension of the investigation.
		</Typography>
	),
	ev4Med: (
		<Typography variant='body2'>
			The student has <strong>described some</strong> realistic and relevant
			suggestions for the improvement and extension of the investigation.
		</Typography>
	),
	ev4High: (
		<Typography variant='body2'>
			The student has <strong>discussed</strong> realistic and relevant
			suggestions for the improvement and extension of the investigation.
		</Typography>
	),
	co1Low: (
		<Typography variant='body2'>
			The presentation of the investigation is <strong>unclear</strong>, making
			it <strong>difficult to understand</strong> the focus, process and
			outcomes.
		</Typography>
	),
	co1Med: (
		<Typography variant='body2'>
			The presentation of the investigation is <strong>clear</strong>. Any
			errors <strong>do not hamper understanding</strong> of the focus, process
			and outcomes.
		</Typography>
	),
	co2Low: (
		<Typography variant='body2'>
			The report is <strong>not well structured</strong> and is{" "}
			<strong>unclear</strong>: the necessary information on focus, process and
			outcomes is <strong>missing</strong> or is presented in an{" "}
			<strong>incoherent or disorganized</strong> way.
		</Typography>
	),
	co2Med: (
		<Typography variant='body2'>
			The report is <strong>well structured and clear</strong>: the necessary
			information on focus, process and outcomes is present and presented in a
			<strong>coherent </strong>way.
		</Typography>
	),
	co3Low: (
		<Typography variant='body2'>
			The understanding of the focus, process and outcomes of the investigation
			is <strong>obscured</strong> by the presence of{" "}
			<strong>inappropriate or irrelevant</strong> information.
		</Typography>
	),
	co3Med: (
		<Typography variant='body2'>
			The report is <strong>relevant and concise</strong> thereby facilitating a
			<strong>ready understanding</strong> of the focus, process and outcomes of
			the investigation.
		</Typography>
	),
	co4Low: (
		<Typography variant='body2'>
			There are <strong>many errors</strong> in the use of subject specific
			terminology and conventions.
		</Typography>
	),
	co4Med: (
		<Typography variant='body2'>
			The use of subject specific terminology and conventions is{" "}
			<strong>appropriate and correct</strong>. Any errors do not hamper
			understanding.
		</Typography>
	),
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
	return guidance;
};

export default GuidanceBox;
