import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import {
	updatePEFinal,
	updateAnFinal,
	updateCoFinal,
	updateExFinal,
	updateEvFinal,
} from "../redux/scoreSlice";

export const IATable = () => {
	const dispatch = useDispatch();
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

	let finalScore = null;
	if (
		PEFinal === undefined ||
		ExFinal === undefined ||
		AnFinal === undefined ||
		EvFinal === undefined ||
		CoFinal === undefined
	) {
		finalScore = null;
	} else {
		finalScore =
			Number(PEFinal) +
			Number(ExFinal) +
			Number(AnFinal) +
			Number(EvFinal) +
			Number(CoFinal);
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
			sx={{ justifyContent: "center", textAlign: "center" }}>
			<Table aria-label='spanning table'>
				<TableBody>
					<TableRow>
						<TableCell colSpan={2}>
							<TextField label='Student' size='large' />
						</TableCell>
						<TableCell colSpan={3}>
							<Typography variant='h6'>{nameState}</Typography>
						</TableCell>
						<TableCell colSpan={3}>
							<Typography variant='h6'>Overall Score: {finalScore}</Typography>
							<br />
							<Typography variant='h6'>
								Grade: {finalGrade ? finalGrade : null}
							</Typography>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1'>Personal Engagement</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1'>Strand</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Independent Thinking'>
								<Typography variant='body1'>
									IT:
									<br />
									{PE1state} / 2
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Personal Significance'>
								<Typography variant='body1'>
									PS: <br />
									{PE2state} / 2
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell colSpan={2}>
							<Tooltip title='Initiative'>
								<Typography variant='body1'>
									In: <br />
									{PE3state} / 2
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<TextField
								type={"number"}
								label='PE Score'
								size='small'
								placeholder={PEAvg ? PEAvg : null}
								value={PEFinal}
								onChange={(event) =>
									dispatch(updatePEFinal(event.target.value))
								}
							/>
						</TableCell>
					</TableRow>
					{PECstate === "" ? null : (
						<TableRow>
							<TableCell>
								<Typography variant='body1'>Comment</Typography>
							</TableCell>
							<TableCell colSpan={5}>
								<Typography variant='body1'>{PECstate}</Typography>
							</TableCell>
						</TableRow>
					)}
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1'>Exploration</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1'>Strand</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Research Question'>
								<Typography variant='body1'>
									RQ: <br />
									{Ex1state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Background'>
								<Typography variant='body1'>
									BG: <br />
									{Ex2state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Methodology'>
								<Typography variant='body1'>
									Mtd: <br />
									{Ex3state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Safety, Ethics and Environmental Issues'>
								<Typography variant='body1'>
									SEE: <br />
									{Ex4state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<TextField
								type={"number"}
								label='Ex Score'
								size='small'
								// placeholder={ExAvg ? ExAvg : null}
								value={ExFinal}
								onChange={(event) =>
									dispatch(updateExFinal(event.target.value))
								}
							/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={5}>
							<Typography variant='body1'>{ExCstate}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1'>Analysis</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1'>Strand</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Raw Data'>
								<Typography variant='body1'>
									RD: <br />
									{An1state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Data Processing'>
								<Typography variant='body1'>
									PD: <br />
									{An2state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Impact of Uncertainty'>
								<Typography variant='body1'>
									Unc: <br />
									{An3state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Interpretation of Processed Data'>
								<Typography variant='body1'>
									Int: <br />
									{An4state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<TextField
								type={"number"}
								label='An Score'
								size='small'
								// placeholder={AnAvg ? AnAvg : null}
								value={AnFinal}
								onChange={(event) =>
									dispatch(updateAnFinal(event.target.value))
								}
							/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={5}>
							<Typography variant='body1'>{AnCstate}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1'>Evaluation</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1'>Strand</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Conclusion'>
								<Typography variant='body1'>
									Conc: <br />
									{Ev1state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Scientific Context'>
								<Typography variant='body1'>
									Sci Cxt: <br />
									{Ev2state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Limitations'>
								<Typography variant='body1'>
									Lim: <br />
									{Ev3state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Improvement and Extension'>
								<Typography variant='body1'>
									Ext: <br />
									{Ev4state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<TextField
								type={"number"}
								label='Ev Score'
								size='small'
								// placeholder={EvAvg ? EvAvg : null}
								value={EvFinal}
								onChange={(event) =>
									dispatch(updateEvFinal(event.target.value))
								}
							/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={5}>
							<Typography variant='body1'>{EvCstate}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1'>Communication</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1'>Strand</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Presentation'>
								<Typography variant='body1'>
									Pres: <br />
									{Co1state} / 4
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Structure'>
								<Typography variant='body1'>
									Struc: <br />
									{Co2state} / 4
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Focus'>
								<Typography variant='body1'>
									Focus: <br />
									{Co3state} / 4
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Terminology & Conventions'>
								<Typography variant='body1'>
									Term:
									<br />
									{Co4state} / 4
								</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<TextField
								type={"number"}
								label='Com Score'
								size='small'
								// placeholder={CoAvg ? CoAvg : null}
								value={CoFinal}
								onChange={(event) =>
									dispatch(updateCoFinal(event.target.value))
								}
							/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={5}>
							<Typography variant='body1'>{CoCstate}</Typography>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default IATable;
