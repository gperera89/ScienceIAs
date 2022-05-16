import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import MuiInput from "@mui/material/Input";
import { useSelector, useDispatch } from "react-redux";
import {
	updatePE1,
	updatePE2,
	updatePE3,
	updatePEC,
	updatePEFinal,
} from "../redux/scoreSlice";

const Input = styled(MuiInput)`
	width: 30px;
`;

export default function PersonalEngagement() {
	const PE1state = useSelector((state) => state.score.PE1);
	const PE2state = useSelector((state) => state.score.PE2);
	const PE3state = useSelector((state) => state.score.PE3);
	const PECstate = useSelector((state) => state.score.PEC);
	const PEFinal = useSelector((state) => state.score.PEFinal);

	const dispatch = useDispatch();

	const handleSliderChangePE1 = (event, newValue) => {
		dispatch(updatePE1(newValue));
	};
	const handleSliderChangePE2 = (event, newValue) => {
		dispatch(updatePE2(newValue));
	};
	const handleSliderChangePE3 = (event, newValue) => {
		dispatch(updatePE3(newValue));
	};
	const handleInputChangePE1 = (event) => {
		dispatch(
			updatePE1(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangePE2 = (event) => {
		dispatch(
			updatePE2(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangePE3 = (event) => {
		dispatch(
			updatePE3(event.target.value === "" ? "" : Number(event.target.value))
		);
	};

	const handleBlurPE1 = () => {
		if (PE1state < 0) {
			dispatch(updatePE1(0));
		} else if (PE1state > 2) {
			dispatch(updatePE1(2));
		}
	};
	const handleBlurPE2 = () => {
		if (PE1state < 0) {
			dispatch(updatePE2(0));
		} else if (PE1state > 2) {
			dispatch(updatePE2(2));
		}
	};
	const handleBlurPE3 = () => {
		if (PE1state < 0) {
			dispatch(updatePE3(0));
		} else if (PE1state > 2) {
			dispatch(updatePE3(2));
		}
	};

	let PEAvg = Math.round((PE1state + PE2state + PE3state) / 3);

	return (
		<Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Independent Thinking
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={PE1state ? PE1state : 0}
							onChange={handleSliderChangePE1}
							aria-labelledby='input-slider'
							marks
							max={2}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={PE1state ? PE1state : 0}
							size='small'
							onChange={handleInputChangePE1}
							onBlur={handleBlurPE1}
							inputProps={{
								step: 1,
								min: 0,
								max: 2,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Personal Significance
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={PE2state ? PE2state : 0}
							onChange={handleSliderChangePE2}
							aria-labelledby='input-slider'
							marks
							max={2}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={PE2state ? PE2state : 0}
							size='small'
							onChange={handleInputChangePE2}
							onBlur={handleBlurPE2}
							inputProps={{
								step: 1,
								min: 0,
								max: 2,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Initiative
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={PE3state ? PE3state : 0}
							onChange={handleSliderChangePE3}
							aria-labelledby='input-slider'
							marks
							max={2}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={PE3state ? PE3state : 0}
							size='small'
							onChange={handleInputChangePE3}
							onBlur={handleBlurPE3}
							inputProps={{
								step: 1,
								min: 0,
								max: 2,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<br />
			<TextField
				id='outlined-multiline-flexible'
				label='Comment'
				multiline
				rows={3}
				placeholder='Strengths and Weaknesses'
				value={PECstate}
				onChange={(event) => dispatch(updatePEC(event.target.value))}
			/>
			<Box m={1} display='flex' justifyContent='flex-end' alignItems='flex-end'>
				<Typography variant='overline' sx={{ align: "right" }}>
					Marks for PE:{" "}
					<input
						value={PEFinal ? PEFinal : ""}
						placeholder={PEAvg ? PEAvg : ""}
						onChange={(event) => dispatch(updatePEFinal(event.target.value))}
						step='1'
						min='0'
						max='2'
						type='number'
					/>
				</Typography>
			</Box>
		</Box>
	);
}
