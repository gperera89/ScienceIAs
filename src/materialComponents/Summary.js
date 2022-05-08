import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

const Summary = () => {
	const PE1state = useSelector((state) => state.score.PE1);
	const PE2state = useSelector((state) => state.score.PE2);
	const PE3state = useSelector((state) => state.score.PE3);
	const PECstate = useSelector((state) => state.score.PEC);
	const Ex1state = useSelector((state) => state.score.Ex1);
	const Ex2state = useSelector((state) => state.score.Ex2);
	const Ex3state = useSelector((state) => state.score.Ex3);
	const Ex4state = useSelector((state) => state.score.Ex4);
	const ExCstate = useSelector((state) => state.score.ExC);
	const An1state = useSelector((state) => state.score.An1);
	const An2state = useSelector((state) => state.score.An2);
	const An3state = useSelector((state) => state.score.An3);
	const An4state = useSelector((state) => state.score.An4);
	const AnCstate = useSelector((state) => state.score.AnC);
	const Ev1state = useSelector((state) => state.score.Ev1);
	const Ev2state = useSelector((state) => state.score.Ev2);
	const Ev3state = useSelector((state) => state.score.Ev3);
	const Ev4state = useSelector((state) => state.score.Ev4);
	const EvCstate = useSelector((state) => state.score.EvC);
	const Co1state = useSelector((state) => state.score.Co1);
	const Co2state = useSelector((state) => state.score.Co2);
	const Co3state = useSelector((state) => state.score.Co3);
	const Co4state = useSelector((state) => state.score.Co4);
	const CoCstate = useSelector((state) => state.score.CoC);
	const PEFinal = useSelector((state) => state.score.PEFinal);
	const ExFinal = useSelector((state) => state.score.ExFinal);
	const AnFinal = useSelector((state) => state.score.AnFinal);
	const EvFinal = useSelector((state) => state.score.EvFinal);
	const CoFinal = useSelector((state) => state.score.CoFinal);
	const nameState = useSelector((state) => state.score.name);

	const copyToClipboard = (e) => {
		navigator.clipboard
			.writeText(document.getElementById("output").innerText)
			.then(function () {
				setCopyButton("Copied! 😃");
				setTimeout(function () {
					setCopyButton("Copy to Clipboard");
				}, 1000);
			});
	};
	const [copyButton, setCopyButton] = useState("Copy to Clipboard");

	let reportOpening;
	if (nameState !== undefined) {
		reportOpening = `Report for the Internal Assessment written by ${nameState} `;
	} else {
		reportOpening = "Internal Assessment Report";
	}

	let independentThinking;
	switch (PE1state) {
		case 0:
			independentThinking = `There was no evidence of personal engagement with the exploration with insufficient independent thinking, initiative or creativity. `;
			break;
		case 1:
			independentThinking = `The evidence of personal engagement with the exploration is limited with little independent thinking, initiative or creativity. `;
			break;
		case 2:
			independentThinking = `The evidence of personal engagement with the exploration is clear with significant independent thinking, initiative or creativity. `;
			break;
		default:
			independentThinking = "";
	}

	let personalSignificance;
	switch (PE2state) {
		case 0:
			personalSignificance = `There is no justification given for choosing the research question and consequently the report did not demonstrate personal significance, interest or curiosity. `;
			break;
		case 1:
			personalSignificance = `The justification for choosing the research question and topic were limited and could not demonstrate personal significance, interest or curiosity. `;
			break;
		case 2:
			personalSignificance = `The justification given for choosing the research question and the topic under investigation demonstrated clear personal significance, interest and curiosity. `;
			break;
		default:
			personalSignificance = "";
	}

	let initiative;
	switch (PE3state) {
		case 0:
			initiative = `There is no evidence of personal input and initiative in the designing, implementation or presentation of the investigation. `;
			break;
		case 1:
			initiative = `There is some evidence of personal input and initiative in the designing, implementation or presentation of the investigation.`;
			break;
		case 2:
			initiative = `There is clear evidence of personal input and initiative in the designing, implementation or presentation of the investigation.`;
			break;
		default:
			initiative = "";
	}

	let researchQuestion;
	switch (Ex1state) {
		case 0:
			researchQuestion = `The topic of the investigation is wasn't identified and a research question of was not focused. `;
			break;
		case 1:
		case 2:
			researchQuestion = `The topic of the investigation is identified and a research question of some relevance is stated but it is not focused. `;
			break;
		case 3:
		case 4:
			researchQuestion = `The topic of the investigation is identified and a relevant but not fully focused research question is described. `;
			break;
		case 5:
		case 6:
			researchQuestion = `The topic of the investigation is identified and a relevant and fully focused research question is clearly described. `;
			break;
		default:
			researchQuestion = "";
	}

	let background;
	switch (Ex2state) {
		case 0:
			background = `The background information provided for the investigation is lacking significant details and largely irrelevant to the topic under investigation. `;
			break;
		case 1:
		case 2:
			background = `The background information provided for the investigation is superficial or of limited relevance and does not aid the understanding of the context of the investigation. `;
			break;
		case 3:
		case 4:
			background = `The background information provided for the investigation is mainly appropriate and relevant and aids the understanding of the context of the investigation. `;
			break;
		case 5:
		case 6:
			background = `The background information provided for the investigation is entirely appropriate and relevant and enhances the understanding of the context of the investigation. `;
			break;
		default:
			background = "";
	}

	let methodology;
	switch (Ex3state) {
		case 0:
			methodology = `The methodology of the investigation is doesn't address the research question as it doesn't take into consideration the significant factors that may influence the relevance, reliability and sufficiency of the collected data.`;
			break;
		case 1:
		case 2:
			methodology = `The methodology of the investigation is only appropriate to address the research question to a very limited extent since it takes into consideration few of the significant factors that may influence the relevance, reliability and sufficiency of the collected data. `;
			break;
		case 3:
		case 4:
			methodology = `The methodology of the investigation is mainly appropriate to address the research question but has limitations since it takes into consideration only some of the significant factors that may influence the relevance, reliability and sufficiency of the collected data. `;
			break;
		case 5:
		case 6:
			methodology = `The methodology of the investigation is highly appropriate to address the research question because it takes into consideration all, or nearly all, of the significant factors that may influence the relevance, reliability and sufficiency of the collected data. `;
			break;
		default:
			methodology = "";
	}

	let safety;
	switch (Ex4state) {
		case 0:
			safety = `The report doesn't show evidence of awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation. `;
			break;
		case 1:
		case 2:
			safety = `The report shows evidence of limited awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation. `;
			break;
		case 3:
		case 4:
			safety = `The report shows evidence of some awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation `;
			break;
		case 5:
		case 6:
			safety = `The report shows evidence of full awareness of the significant safety, ethical or environmental issues that are relevant to the methodology of the investigation. `;
			break;
		default:
			safety = "";
	}

	let rawData;
	switch (An1state) {
		case 0:
			rawData = `The report did not include relevant raw data to support a valid conclusion to the research question. `;
			break;
		case 1:
		case 2:
			rawData = `The report includes insufficient relevant raw data to support a valid conclusion to the research question. `;
			break;
		case 3:
		case 4:
			rawData = `The report includes relevant but incomplete quantitative and qualitative raw data that could support a simple or partially valid conclusion to the research question `;
			break;
		case 5:
		case 6:
			rawData = `The report includes sufficient relevant quantitative and qualitative raw data that could support a detailed and valid conclusion to the research question. `;
			break;
		default:
			rawData = "";
	}

	let processedData;
	switch (An2state) {
		case 0:
			processedData = `The data processing was ommitted from the report. `;
			break;
		case 1:
		case 2:
			processedData = `Some basic data processing is carried out but is either too inaccurate or too insufficient to lead to a valid conclusion.`;
			break;
		case 3:
		case 4:
			processedData = `Appropriate and sufficient data processing is carried out that could lead to a broadly valid conclusion but there are significant inaccuracies and inconsistencies in the processing. `;
			break;
		case 5:
		case 6:
			processedData = `Appropriate and sufficient data processing is carried out with the accuracy required to enable a conclusion to the research question to be drawn that isfully consistent with the experimental data. `;
			break;
		default:
			processedData = "";
	}

	let impactOfUncertainty;
	switch (An3state) {
		case 0:
			impactOfUncertainty = `The report does not show evidence of any consideration of the impact of measurement uncertainty on the analysis. `;
			break;
		case 1:
		case 2:
			impactOfUncertainty = `The report shows evidence of little consideration of the impact of measurement uncertainty on the analysis. `;
			break;
		case 3:
		case 4:
			impactOfUncertainty = `The report shows evidence of some consideration of the impact of measurement uncertainty on the analysis. `;
			break;
		case 5:
		case 6:
			impactOfUncertainty = `The report shows evidence of full and appropriate consideration of the impact of measurement uncertainty on the analysis. `;
			break;
		default:
			impactOfUncertainty = "";
	}

	let interpretationOfProcessedData;
	switch (An4state) {
		case 0:
			interpretationOfProcessedData = `The processed data is was not interpreted for use in the conclusion `;
			break;
		case 1:
		case 2:
			interpretationOfProcessedData = `The processed data is incorrectly or insufficiently interpreted so that the conclusion is invalid or very incomplete. `;
			break;
		case 3:
		case 4:
			interpretationOfProcessedData = `The processed data is interpreted so that a broadly valid but incomplete or limited conclusion to the research question can be deduced. `;
			break;
		case 5:
		case 6:
			interpretationOfProcessedData = `The processed data is correctly interpreted so that a completely valid and detailed conclusion to the research question can be deduced. `;
			break;
		default:
			interpretationOfProcessedData = "";
	}

	let conclusion;
	switch (Ev1state) {
		case 0:
			conclusion = `The report does not draw a conclusion. `;
			break;
		case 1:
		case 2:
			conclusion = `A conclusion is outlined which is not relevant to the research question or is not supported by the data presented. `;
			break;
		case 3:
		case 4:
			conclusion = `A conclusion is described which is relevant to the research question and supported by the data presented. `;
			break;
		case 5:
		case 6:
			conclusion = `A detailed conclusion is described and justified which is entirely relevant to the research question and fully supported by the data presented. `;
			break;
		default:
			conclusion = "";
	}

	let scientificContext;
	switch (Ev2state) {
		case 0:
			scientificContext = `The conclusion makes doesn't draw any comparison to the accepted scientific context. `;
			break;
		case 1:
		case 2:
			scientificContext = `The conclusion makes superficial comparison to the accepted scientific context. `;
			break;
		case 3:
		case 4:
			scientificContext = `A conclusion is described which makes some relevant comparison to the accepted scientific context. `;
			break;
		case 5:
		case 6:
			scientificContext = `A conclusion is correctly described and justified through relevant comparison to the accepted scientific context. `;
			break;
		default:
			scientificContext = "";
	}

	let limitations;
	switch (Ev3state) {
		case 0:
			limitations = `Strengths and weaknesses of the investigation arne't meaningfully outlined. `;
			break;
		case 1:
		case 2:
			limitations = `Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are outlined but are restricted to an account of the practical or procedural issues faced. `;
			break;
		case 3:
		case 4:
			limitations = `Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are described and provide evidence of some awareness of the methodological issues involved in establishing the conclusion. `;
			break;
		case 5:
		case 6:
			limitations = `Strengths and weaknesses of the investigation, such as limitations of the data and sources of error, are discussed and provide evidence of a clear understanding of the methodological issues involved in establishing the conclusion. `;
			break;
		default:
			limitations = "";
	}

	let improvements;
	switch (Ev4state) {
		case 0:
			improvements = `The student did not outline realistic and relevant suggestions for the improvement and extension of the investigation. `;
			break;
		case 1:
		case 2:
			improvements = `The student has outlined very few realistic and relevant suggestions for the improvement and extension of the investigation. `;
			break;
		case 3:
		case 4:
			improvements = `The student has described some realistic and relevant suggestions for the improvement and extension of the investigation. `;
			break;
		case 5:
		case 6:
			improvements = `The student has discussed realistic and relevant suggestions for the improvement and extension of the investigation. `;
			break;
		default:
			improvements = "";
	}

	let presentation;
	switch (Co1state) {
		case 0:
			presentation = `The presentation of the investigation is unclear, making it not possible to understand the focus, process and outcomes. `;
			break;
		case 1:
		case 2:
			presentation = `The presentation of the investigation is unclear, making it difficult to understand the focus, process and outcomes. `;
			break;
		case 3:
		case 4:
			presentation = `The presentation of the investigation is clear. Any errors do not hamper understanding of the focus, process and outcomes. `;
			break;
		default:
			presentation = "";
	}

	let structure;
	switch (Co2state) {
		case 0:
			structure = `The report unstructured and unclear. `;
			break;
		case 1:
		case 2:
			structure = `The report is not well structured and is unclear: the necessary information on focus, process and outcomes is missing or is presented in an incoherent or disorganized way. `;
			break;
		case 3:
		case 4:
			structure = `The report is well structured and clear: the necessary information on focus, process and outcomes is present and presented in a coherent way. `;
			break;
		default:
			structure = "";
	}

	let focus;
	switch (Co3state) {
		case 0:
			focus = `The understanding of the focus, process and outcomes of the investigation is obscured by the presence of inappropriate or irrelevant information. `;
			break;
		case 1:
		case 2:
			focus = `The understanding of the focus, process and outcomes of the investigation is obscured by the presence of inappropriate or irrelevant information. `;
			break;
		case 3:
		case 4:
			focus = `The report is relevant and concise thereby facilitating a ready understanding of the focus, process and outcomes of the investigation. `;
			break;
		default:
			focus = "";
	}

	let terminology;
	switch (Co4state) {
		case 0:
			terminology = `The report has frequent misuse of subject specific terminology and conventions. `;
			break;
		case 1:
		case 2:
			terminology = `There are many errors in the use of subject specific terminology and conventions. `;
			break;
		case 3:
		case 4:
			terminology = `The use of subject specific terminology and conventions is appropriate and correct. Any errors do not hamper understanding. `;
			break;
		default:
			terminology = "";
	}

	return (
		<div>
			<Button variant='outlined' onClick={copyToClipboard}>
				{copyButton}
			</Button>
			<div id='output'>
				<p>{reportOpening}</p>
				<p>
					Throughout the report, the personal engagement scored a total of{" "}
					{PEFinal} out of 2 points. {independentThinking}
					{personalSignificance}
					{initiative}
					{PECstate}
				</p>
				<p>
					In the exploration section the report scored {ExFinal} points out of
					6. {researchQuestion}
					{background}
					{methodology}
					{safety}
					{ExCstate}
				</p>
				<p>
					For the analysis, {AnFinal} points were awarded out of 6. {rawData}
					{processedData}
					{impactOfUncertainty}
					{interpretationOfProcessedData}
					{AnCstate}
				</p>
				<p>
					The evaluation of the data was awarded {EvFinal} points out of 6.{" "}
					{conclusion}
					{scientificContext}
					{limitations}
					{improvements}
					{EvCstate}
				</p>
				<p>
					Finally, for the communication criterion the report was awarded{" "}
					{CoFinal} points out of 4.
					{presentation}
					{structure}
					{focus}
					{terminology}
					{CoCstate}
				</p>
			</div>
		</div>
	);
};

export default Summary;
