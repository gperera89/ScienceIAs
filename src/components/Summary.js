import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import guidanceData from "./guidanceData";

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

	let PEAvg = Math.round((PE1state + PE2state + PE3state) / 3);
	let ExAvg = Math.round((Ex1state + Ex2state + Ex3state + Ex4state) / 4);
	let AnAvg = Math.round((An1state + An2state + An3state + An4state) / 4);
	let EvAvg = Math.round((Ev1state + Ev2state + Ev3state + Ev4state) / 4);
	let CoAvg = Math.round((Co1state + Co2state + Co3state + Co4state) / 4);

	let PEscore = PEFinal ? PEFinal : PEAvg;
	let Exscore = ExFinal ? ExFinal : ExAvg;
	let Anscore = AnFinal ? AnFinal : AnAvg;
	let Evscore = EvFinal ? EvFinal : EvAvg;
	let Coscore = CoFinal ? CoFinal : CoAvg;

	let finalScore = null;
	if (
		PEscore === undefined ||
		Exscore === undefined ||
		Anscore === undefined ||
		Evscore === undefined ||
		Coscore === undefined
	) {
		finalScore = null;
	} else {
		finalScore =
			Number(PEscore) +
			Number(Exscore) +
			Number(Anscore) +
			Number(Evscore) +
			Number(Coscore);
	}

	let finalGrade;
	switch (finalScore) {
		case 0:
		case 1:
		case 2:
		case 3:
			finalGrade = 1;
			break;
		case 4:
		case 5:
		case 6:
			finalGrade = 2;
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			finalGrade = 3;
			break;
		case 11:
		case 12:
		case 13:
			finalGrade = 4;
			break;
		case 14:
		case 15:
		case 16:
			finalGrade = 5;
			break;
		case 17:
		case 18:
		case 19:
			finalGrade = 6;
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			finalGrade = 7;
			break;
		default:
			finalGrade = null;
	}

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
	const [alignment, setAlignment] = React.useState("detailed");

	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	let reportOpening;
	if (nameState !== undefined) {
		reportOpening = `Report for the Internal Assessment written by ${nameState} `;
	} else {
		reportOpening = "Internal Assessment Report";
	}

	let independentThinking;
	switch (PE1state) {
		case 0:
			independentThinking = guidanceData.zero;
			break;
		case 1:
			independentThinking = guidanceData.pe1Low;
			break;
		case 2:
			independentThinking = guidanceData.pe1Med;
			break;
		default:
			independentThinking = "";
	}

	let personalSignificance;
	switch (PE2state) {
		case 0:
			personalSignificance = guidanceData.zero;
			break;
		case 1:
			personalSignificance = guidanceData.pe2Low;
			break;
		case 2:
			personalSignificance = guidanceData.pe2Med;
			break;
		default:
			personalSignificance = "";
	}

	let initiative;
	switch (PE3state) {
		case 0:
			initiative = guidanceData.zero;
			break;
		case 1:
			initiative = guidanceData.pe3Low;
			break;
		case 2:
			initiative = guidanceData.pe3Med;
			break;
		default:
			initiative = "";
	}

	let researchQuestion;
	switch (Ex1state) {
		case 0:
			researchQuestion = guidanceData.zero;
			break;
		case 1:
		case 2:
			researchQuestion = guidanceData.ex1Low;
			break;
		case 3:
		case 4:
			researchQuestion = guidanceData.ex1Med;
			break;
		case 5:
		case 6:
			researchQuestion = guidanceData.ex1High;
			break;
		default:
			researchQuestion = "";
	}

	let background;
	switch (Ex2state) {
		case 0:
			background = guidanceData.zero;
			break;
		case 1:
		case 2:
			background = guidanceData.ex2Low;
			break;
		case 3:
		case 4:
			background = guidanceData.ex2Med;
			break;
		case 5:
		case 6:
			background = guidanceData.ex2High;
			break;
		default:
			background = "";
	}

	let methodology;
	switch (Ex3state) {
		case 0:
			methodology = guidanceData.zero;
			break;
		case 1:
		case 2:
			methodology = guidanceData.ex3Low;
			break;
		case 3:
		case 4:
			methodology = guidanceData.ex3Med;
			break;
		case 5:
		case 6:
			methodology = guidanceData.ex3High;
			break;
		default:
			methodology = "";
	}

	let safety;
	switch (Ex4state) {
		case 0:
			safety = guidanceData.zero;
			break;
		case 1:
		case 2:
			safety = guidanceData.ex4Low;
			break;
		case 3:
		case 4:
			safety = guidanceData.ex4Med;
			break;
		case 5:
		case 6:
			safety = guidanceData.ex4High;
			break;
		default:
			safety = "";
	}

	let rawData;
	switch (An1state) {
		case 0:
			rawData = guidanceData.zero;
			break;
		case 1:
		case 2:
			rawData = guidanceData.an1Low;
			break;
		case 3:
		case 4:
			rawData = guidanceData.an1Med;
			break;
		case 5:
		case 6:
			rawData = guidanceData.an1High;
			break;
		default:
			rawData = "";
	}

	let processedData;
	switch (An2state) {
		case 0:
			processedData = guidanceData.zero;
			break;
		case 1:
		case 2:
			processedData = guidanceData.an2Low;
			break;
		case 3:
		case 4:
			processedData = guidanceData.an2Med;
			break;
		case 5:
		case 6:
			processedData = guidanceData.an2High;
			break;
		default:
			processedData = "";
	}

	let impactOfUncertainty;
	switch (An3state) {
		case 0:
			impactOfUncertainty = guidanceData.zero;
			break;
		case 1:
		case 2:
			impactOfUncertainty = guidanceData.an3Low;
			break;
		case 3:
		case 4:
			impactOfUncertainty = guidanceData.an3Med;
			break;
		case 5:
		case 6:
			impactOfUncertainty = guidanceData.an3High;
			break;
		default:
			impactOfUncertainty = "";
	}

	let interpretationOfProcessedData;
	switch (An4state) {
		case 0:
			interpretationOfProcessedData = guidanceData.zero;
			break;
		case 1:
		case 2:
			interpretationOfProcessedData = guidanceData.an4Low;
			break;
		case 3:
		case 4:
			interpretationOfProcessedData = guidanceData.an4Med;
			break;
		case 5:
		case 6:
			interpretationOfProcessedData = guidanceData.an4High;
			break;
		default:
			interpretationOfProcessedData = "";
	}

	let conclusion;
	switch (Ev1state) {
		case 0:
			conclusion = guidanceData.zero;
			break;
		case 1:
		case 2:
			conclusion = guidanceData.ev1Low;
			break;
		case 3:
		case 4:
			conclusion = guidanceData.ev1Med;
			break;
		case 5:
		case 6:
			conclusion = guidanceData.ev1High;
			break;
		default:
			conclusion = "";
	}

	let scientificContext;
	switch (Ev2state) {
		case 0:
			scientificContext = guidanceData.zero;
			break;
		case 1:
		case 2:
			scientificContext = guidanceData.ev2Low;
			break;
		case 3:
		case 4:
			scientificContext = guidanceData.ev2Med;
			break;
		case 5:
		case 6:
			scientificContext = guidanceData.ev2High;
			break;
		default:
			scientificContext = "";
	}

	let limitations;
	switch (Ev3state) {
		case 0:
			limitations = guidanceData.zero;
			break;
		case 1:
		case 2:
			limitations = guidanceData.ev3Low;
			break;
		case 3:
		case 4:
			limitations = guidanceData.ev3Med;
			break;
		case 5:
		case 6:
			limitations = guidanceData.ev3High;
			break;
		default:
			limitations = "";
	}

	let improvements;
	switch (Ev4state) {
		case 0:
			improvements = guidanceData.zero;
			break;
		case 1:
		case 2:
			improvements = guidanceData.ev4Low;
			break;
		case 3:
		case 4:
			improvements = guidanceData.ev4Med;
			break;
		case 5:
		case 6:
			improvements = guidanceData.ev4High;
			break;
		default:
			improvements = "";
	}

	let presentation;
	switch (Co1state) {
		case 0:
			presentation = guidanceData.zero;
			break;
		case 1:
		case 2:
			presentation = guidanceData.co1Low;
			break;
		case 3:
		case 4:
			presentation = guidanceData.co1Med;
			break;
		default:
			presentation = "";
	}

	let structure;
	switch (Co2state) {
		case 0:
			structure = guidanceData.zero;
			break;
		case 1:
		case 2:
			structure = guidanceData.co2Low;
			break;
		case 3:
		case 4:
			structure = guidanceData.co2Med;
			break;
		default:
			structure = "";
	}

	let focus;
	switch (Co3state) {
		case 0:
			focus = guidanceData.zero;
			break;
		case 1:
		case 2:
			focus = guidanceData.co3Low;
			break;
		case 3:
		case 4:
			focus = guidanceData.co3Med;
			break;
		default:
			focus = "";
	}

	let terminology;
	switch (Co4state) {
		case 0:
			terminology = guidanceData.zero;
			break;
		case 1:
		case 2:
			terminology = guidanceData.co4Low;
			break;
		case 3:
		case 4:
			terminology = guidanceData.co4Med;
			break;
		default:
			terminology = "";
	}

	return (
		<Box>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Button variant='outlined' onClick={copyToClipboard}>
					{copyButton}
				</Button>
				<ToggleButtonGroup
					color='primary'
					value={alignment}
					exclusive
					onChange={handleChange}>
					<ToggleButton value='detailed'>Detailed</ToggleButton>
					<ToggleButton value='simple'>Simple</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box>
				<div id='output'>
					<Typography variant='h6'>{reportOpening}</Typography>
					<Typography variant='subtitle1' fontWeight={600}>
						<ul>
							<li>Overall Score: {finalScore ? finalScore : null}</li>
							<li>Overall Grade: {finalGrade}</li>
						</ul>
					</Typography>
					<Typography variant='subtitle1'>
						Score for Personal Engagement:{" "}
						{PEscore ? `${PEscore} out of 2 points.` : null}
					</Typography>
					<ul>
						<li>
							<strong>Independent thinking:</strong>{" "}
							{alignment === "detailed" ? independentThinking : PE1state}
						</li>
						<li>
							<strong>Personal significance:</strong>{" "}
							{alignment === "detailed" ? personalSignificance : PE2state}
						</li>
						<li>
							<strong>Initiative:</strong>{" "}
							{alignment === "detailed" ? initiative : PE3state}
						</li>
						{PECstate ? (
							<li>
								<strong>Further comment:</strong> {PECstate}
							</li>
						) : null}
					</ul>
					<Typography variant='subtitle1'>
						Score for Exploration:{" "}
						{Exscore ? `${Exscore} out of 6 points.` : null}
					</Typography>

					<ul>
						<li>
							<strong>Research question:</strong>{" "}
							{alignment === "detailed" ? researchQuestion : Ex1state}
						</li>
						<li>
							<strong>Background:</strong>{" "}
							{alignment === "detailed" ? background : Ex2state}
						</li>
						<li>
							<strong>Methodology:</strong>{" "}
							{alignment === "detailed" ? methodology : Ex3state}
						</li>
						<li>
							<strong>Safety, Ethics and Environmental Issues:</strong>{" "}
							{alignment === "detailed" ? safety : Ex4state}
						</li>
						{ExCstate ? (
							<li>
								<strong>Further comment:</strong> {ExCstate}
							</li>
						) : null}
					</ul>

					<Typography variant='subtitle1'>
						Score for Analysis: {Anscore ? `${Anscore} out of 6 points.` : null}
					</Typography>

					<ul>
						<li>
							<strong>Raw data:</strong>{" "}
							{alignment === "detailed" ? rawData : An1state}
						</li>
						<li>
							<strong>Processed Data:</strong>{" "}
							{alignment === "detailed" ? processedData : An2state}
						</li>
						<li>
							<strong>Impact of Uncertainty:</strong>{" "}
							{alignment === "detailed" ? impactOfUncertainty : An3state}
						</li>
						<li>
							<strong>Interpretation of Processed Data: </strong>
							{alignment === "detailed"
								? interpretationOfProcessedData
								: An4state}
						</li>
						{AnCstate ? (
							<li>
								<strong>Further comment:</strong> {AnCstate}
							</li>
						) : null}
					</ul>

					<Typography variant='subtitle1'>
						Score for Evaluation:{" "}
						{Evscore ? `${Evscore} out of 6 points.` : null}
					</Typography>

					<ul>
						<li>
							<strong>Conclusion:</strong>{" "}
							{alignment === "detailed" ? conclusion : Ev1state}
						</li>
						<li>
							<strong>Scientific Context:</strong>{" "}
							{alignment === "detailed" ? scientificContext : Ev2state}
						</li>
						<li>
							<strong>Limitations:</strong>{" "}
							{alignment === "detailed" ? limitations : Ev3state}
						</li>
						<li>
							<strong>Improvements and Extensions:</strong>{" "}
							{alignment === "detailed" ? improvements : Ev4state}
						</li>
						{EvCstate ? (
							<li>
								<strong>Further comment:</strong> {EvCstate}
							</li>
						) : null}
					</ul>

					<Typography variant='subtitle1'>
						Score for Communication:{" "}
						{Coscore ? `${Coscore} out of 4 points.` : null}
					</Typography>

					<ul>
						<li>
							<strong>Presentation:</strong>{" "}
							{alignment === "detailed" ? presentation : Co1state}
						</li>
						<li>
							<strong>Structure:</strong>{" "}
							{alignment === "detailed" ? structure : Co2state}
						</li>
						<li>
							<strong>Focus:</strong>{" "}
							{alignment === "detailed" ? focus : Co3state}
						</li>
						<li>
							<strong>Terminology and Conventions:</strong>{" "}
							{alignment === "detailed" ? terminology : Co4state}
						</li>
						{CoCstate ? (
							<li>
								<strong>Further comment:</strong> {CoCstate}
							</li>
						) : null}
					</ul>
				</div>
			</Box>
		</Box>
	);
};

export default Summary;
