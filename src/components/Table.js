import * as React from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export const IATable = () => {
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
	const name = useSelector((state) => state.score.name);

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

	return (
		<TableContainer
			component={Paper}
			sx={{ justifyContent: "center", textAlign: "center", width: "100%" }}>
			<Table aria-label='spanning table'>
				<TableBody>
					<TableRow>
						<TableCell colSpan={3}>
							<Typography variant='h6'>{name}</Typography>
						</TableCell>
						<TableCell colSpan={2}>
							<Typography variant='h6'>
								Overall Score: {finalScore ? finalScore : null}
							</Typography>
						</TableCell>
						<TableCell colSpan={1}>
							<Typography variant='h6'>
								Grade: {finalGrade ? finalGrade : null}
							</Typography>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell rowSpan={2} width={170}>
							<Typography variant='subtitle1' fontWeight={600}>
								Personal Engagement: {PEscore ? PEscore : null}
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Strand
							</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Independent Thinking'>
								<Typography variant='body1'>IT: {PE1state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Personal Significance'>
								<Typography variant='body1'>PS: {PE2state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell colSpan={2}>
							<Tooltip title='Initiative'>
								<Typography variant='body1'>In: {PE3state}</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Comment:
							</Typography>
						</TableCell>
						<TableCell colSpan={4} sx={{ width: "auto" }}>
							<Typography variant='body1'>
								{PECstate ? PECstate : "None"}
							</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1' fontWeight={600}>
								Exploration: {Exscore ? Exscore : null}
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Strand
							</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Research Question'>
								<Typography variant='body1'>RQ: {Ex1state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Background'>
								<Typography variant='body1'>BG: {Ex2state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Methodology'>
								<Typography variant='body1'>Mtd: {Ex3state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Safety, Ethics and Environmental Issues'>
								<Typography variant='body1'>SEE: {Ex4state}</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Comment:
							</Typography>
						</TableCell>
						<TableCell colSpan={4}>
							<Typography variant='body1'>
								{ExCstate ? ExCstate : "None"}
							</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1' fontWeight={600}>
								Analysis: {Anscore ? Anscore : null}
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Strand
							</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Raw Data'>
								<Typography variant='body1'>RD: {An1state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Data Processing'>
								<Typography variant='body1'>PD: {An2state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Impact of Uncertainty'>
								<Typography variant='body1'>Unc: {An3state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Interpretation of Processed Data'>
								<Typography variant='body1'>Int: {An4state}</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Comment:
							</Typography>
						</TableCell>
						<TableCell colSpan={4}>
							<Typography variant='body1'>
								{AnCstate ? AnCstate : "None"}
							</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1' fontWeight={600}>
								Evaluation: {Evscore ? Evscore : null}
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Strand
							</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Conclusion'>
								<Typography variant='body1'>Conc: {Ev1state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Scientific Context'>
								<Typography variant='body1'>Sci Cxt: {Ev2state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Limitations'>
								<Typography variant='body1'>Lim: {Ev3state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Improvement and Extension'>
								<Typography variant='body1'>Ext: {Ev4state}</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Comment:
							</Typography>
						</TableCell>
						<TableCell colSpan={4}>
							<Typography variant='body1'>
								{EvCstate ? EvCstate : "None"}
							</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1' fontWeight={600}>
								Communication: {Coscore ? Coscore : null}
							</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Strand
							</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Presentation'>
								<Typography variant='body1'>Pres: {Co1state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Structure'>
								<Typography variant='body1'>Struc: {Co2state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Focus'>
								<Typography variant='body1'>Focus: {Co3state}</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Terminology & Conventions'>
								<Typography variant='body1'>Term: {Co4state}</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1' fontWeight={500}>
								Comment:
							</Typography>
						</TableCell>
						<TableCell colSpan={4}>
							<Typography variant='body1'>
								{CoCstate ? CoCstate : "None"}
							</Typography>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default IATable;
