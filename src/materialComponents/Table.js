import * as React from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TableHead from "@mui/material/TableHead";
import Tooltip from "@mui/material/Tooltip";

const IATable = () => {
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
	const nameState = useSelector((state) => state.score.name);

	return (
		<TableContainer
			component={Paper}
			sx={{ justifyContent: "center", textAlign: "center" }}>
			<Table
				sx={{
					minWidth: 700,
					maxWidth: 1000,
				}}
				aria-label='spanning table'>
				<TableHead>
					<TableCell>
						<Typography variant='h6'>Candidate</Typography>
					</TableCell>
					<TableCell colSpan={5}>
						<Typography variant='h6'>{nameState}</Typography>
					</TableCell>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1'>Personal Engagement</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1'>Strand</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Independent Thinking'>
								<Typography variant='body1'>IT: {PE1state} / 2</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Personal Significance'>
								<Typography variant='body1'>PS: {PE2state} / 2</Typography>
							</Tooltip>
						</TableCell>
						<TableCell colSpan={2}>
							<Tooltip title='Initiative'>
								<Typography variant='body1'>In: {PE3state} / 2</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={4}>
							<Tooltip title='Delete'>
								<Typography variant='body1'>{PECstate}</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2}>
							<Typography variant='subtitle1'>Exploration</Typography>
						</TableCell>
						<TableCell>
							<Typography variant='body1'>Strand</Typography>
						</TableCell>
						<TableCell>
							<Tooltip title='Research Question'>
								<Typography variant='body1'>RQ: {Ex1state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Background'>
								<Typography variant='body1'>BG: {Ex2state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Methodology'>
								<Typography variant='body1'>Mtd: {Ex3state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Safety, Ethics and Environmental Issues'>
								<Typography variant='body1'>SEE: {Ex4state} / 6</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={4}>
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
								<Typography variant='body1'>RD: {An1state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Data Processing'>
								<Typography variant='body1'>PD: {An2state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Impact of Uncertainty'>
								<Typography variant='body1'>Unc: {An3state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Interpretation of Processed Data'>
								<Typography variant='body1'>Int: {An4state} / 6</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={4}>
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
								<Typography variant='body1'>Conc: {Ev1state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Scientific Context'>
								<Typography variant='body1'>Sci Cxt: {Ev2state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Limitations'>
								<Typography variant='body1'>Lim: {Ev3state} / 6</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Improvement and Extension'>
								<Typography variant='body1'>
									Imp & Ext: {Ev4state} / 6
								</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={4}>
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
								<Typography variant='body1'>Pres: {Co1state} / 4</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Structure'>
								<Typography variant='body1'>Struc: {Co2state} / 4</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Focus'>
								<Typography variant='body1'>Focus: {Co3state} / 4</Typography>
							</Tooltip>
						</TableCell>
						<TableCell>
							<Tooltip title='Terminology & Conventions'>
								<Typography variant='body1'>Term: {Co4state} / 4</Typography>
							</Tooltip>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Typography variant='body1'>Comment</Typography>
						</TableCell>
						<TableCell colSpan={4}>
							<Typography variant='body1'>{CoCstate}</Typography>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default IATable;
