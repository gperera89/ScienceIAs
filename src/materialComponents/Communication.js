import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import {
	updateCo1,
	updateCo2,
	updateCo3,
	updateCo4,
	updateCoC,
	updateCoFinal,
} from "../redux/scoreSlice";

const Input = styled(MuiInput)`
	width: 30px;
`;

export default function Communication() {
	const Co1state = useSelector((state) => state.score.Co1);
	const Co2state = useSelector((state) => state.score.Co2);
	const Co3state = useSelector((state) => state.score.Co3);
	const Co4state = useSelector((state) => state.score.Co4);
	const CoCstate = useSelector((state) => state.score.CoC);
	const CoFinal = useSelector((state) => state.score.CoFinal);
	const dispatch = useDispatch();
	let CoAvg = Math.round((Co1state + Co2state + Co3state + Co4state) / 4);

	const handleSliderChangeCo1 = (event, newValue) => {
		dispatch(updateCo1(newValue));
	};
	const handleSliderChangeCo2 = (event, newValue) => {
		dispatch(updateCo2(newValue));
	};
	const handleSliderChangeCo3 = (event, newValue) => {
		dispatch(updateCo3(newValue));
	};
	const handleSliderChangeCo4 = (event, newValue) => {
		dispatch(updateCo4(newValue));
	};
	const handleInputChangeCo1 = (event) => {
		dispatch(
			updateCo1(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeCo2 = (event) => {
		dispatch(
			updateCo2(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeCo3 = (event) => {
		dispatch(
			updateCo3(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeCo4 = (event) => {
		dispatch(
			updateCo4(event.target.value === "" ? "" : Number(event.target.value))
		);
	};

	const handleBlurCo1 = () => {
		if (Co1state < 0) {
			dispatch(updateCo1(0));
		} else if (Co1state > 4) {
			dispatch(updateCo1(4));
		}
	};
	const handleBlurCo2 = () => {
		if (Co2state < 0) {
			dispatch(updateCo2(0));
		} else if (Co2state > 4) {
			dispatch(updateCo2(4));
		}
	};
	const handleBlurCo3 = () => {
		if (Co3state < 0) {
			dispatch(updateCo3(0));
		} else if (Co3state > 4) {
			dispatch(updateCo3(4));
		}
	};
	const handleBlurCo4 = () => {
		if (Co4state < 0) {
			dispatch(updateCo4(0));
		} else if (Co4state > 4) {
			dispatch(updateCo4(4));
		}
	};

	return (
		<Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Presentation
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={Co1state ? Co1state : 0}
							onChange={handleSliderChangeCo1}
							aria-labelledby='input-slider'
							marks
							max={4}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Co1state ? Co1state : 0}
							size='small'
							onChange={handleInputChangeCo1}
							onBlur={handleBlurCo1}
							inputProps={{
								step: 1,
								min: 0,
								max: 4,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Structure
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={Co2state ? Co2state : 0}
							onChange={handleSliderChangeCo2}
							aria-labelledby='input-slider'
							marks
							max={4}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Co2state ? Co2state : 0}
							size='small'
							onChange={handleInputChangeCo2}
							onBlur={handleBlurCo2}
							inputProps={{
								step: 1,
								min: 0,
								max: 4,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Focus
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={Co3state ? Co3state : 0}
							onChange={handleSliderChangeCo3}
							aria-labelledby='input-slider'
							marks
							max={4}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Co3state ? Co3state : 0}
							size='small'
							onChange={handleInputChangeCo3}
							onBlur={handleBlurCo3}
							inputProps={{
								step: 1,
								min: 0,
								max: 4,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Terminology & Conventions
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={Co4state ? Co4state : 0}
							onChange={handleSliderChangeCo4}
							aria-labelledby='input-slider'
							marks
							max={4}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Co4state ? Co4state : 0}
							size='small'
							onChange={handleInputChangeCo4}
							onBlur={handleBlurCo4}
							inputProps={{
								step: 1,
								min: 0,
								max: 4,
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
				value={CoCstate}
				onChange={(event) => dispatch(updateCoC(event.target.value))}
			/>
			<Box m={1} display='flex' justifyContent='flex-end' alignItems='flex-end'>
				<Typography variant='overline' sx={{ align: "right" }}>
					Marks for Communication:{" "}
					<Input
						value={CoFinal ? CoFinal : ""}
						placeholder={CoAvg ? CoAvg : ""}
						size='small'
						onChange={(event) => dispatch(updateCoFinal(event.target.value))}
						inputProps={{
							step: 1,
							min: 0,
							max: 4,
							type: "number",
							"aria-labelledby": "input-slider",
						}}
					/>
				</Typography>
			</Box>
		</Box>
	);
}
