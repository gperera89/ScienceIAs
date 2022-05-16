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
	updateEx1,
	updateEx2,
	updateEx3,
	updateEx4,
	updateExC,
	updateExFinal,
} from "../redux/scoreSlice";

const Input = styled(MuiInput)`
	width: 30px;
`;

export default function Exploration() {
	const Ex1state = useSelector((state) => state.score.Ex1);
	const Ex2state = useSelector((state) => state.score.Ex2);
	const Ex3state = useSelector((state) => state.score.Ex3);
	const Ex4state = useSelector((state) => state.score.Ex4);
	const ExCstate = useSelector((state) => state.score.ExC);
	const ExFinal = useSelector((state) => state.score.ExFinal);
	const dispatch = useDispatch();

	const handleSliderChangeEx1 = (event, newValue) => {
		dispatch(updateEx1(newValue));
	};
	const handleSliderChangeEx2 = (event, newValue) => {
		dispatch(updateEx2(newValue));
	};
	const handleSliderChangeEx3 = (event, newValue) => {
		dispatch(updateEx3(newValue));
	};
	const handleSliderChangeEx4 = (event, newValue) => {
		dispatch(updateEx4(newValue));
	};
	const handleInputChangeEx1 = (event) => {
		dispatch(
			updateEx1(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeEx2 = (event) => {
		dispatch(
			updateEx2(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeEx3 = (event) => {
		dispatch(
			updateEx3(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeEx4 = (event) => {
		dispatch(
			updateEx4(event.target.value === "" ? "" : Number(event.target.value))
		);
	};

	const handleBlurEx1 = () => {
		if (Ex1state < 0) {
			dispatch(updateEx1(0));
		} else if (Ex1state > 6) {
			dispatch(updateEx1(6));
		}
	};
	const handleBlurEx2 = () => {
		if (Ex2state < 0) {
			dispatch(updateEx2(0));
		} else if (Ex2state > 6) {
			dispatch(updateEx2(6));
		}
	};
	const handleBlurEx3 = () => {
		if (Ex3state < 0) {
			dispatch(updateEx3(0));
		} else if (Ex3state > 6) {
			dispatch(updateEx3(6));
		}
	};
	const handleBlurEx4 = () => {
		if (Ex4state < 0) {
			dispatch(updateEx3(0));
		} else if (Ex4state > 6) {
			dispatch(updateEx3(6));
		}
	};

	let ExAvg = Math.round((Ex1state + Ex2state + Ex3state + Ex4state) / 4);

	return (
		<Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Research Question
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={Ex1state ? Ex1state : 0}
							onChange={handleSliderChangeEx1}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Ex1state ? Ex1state : 0}
							size='small'
							onChange={handleInputChangeEx1}
							onBlur={handleBlurEx1}
							inputProps={{
								step: 1,
								min: 0,
								max: 6,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Background
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={Ex2state ? Ex2state : 0}
							onChange={handleSliderChangeEx2}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Ex2state ? Ex2state : 0}
							size='small'
							onChange={handleInputChangeEx2}
							onBlur={handleBlurEx2}
							inputProps={{
								step: 1,
								min: 0,
								max: 6,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Methodology
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={Ex3state ? Ex3state : 0}
							onChange={handleSliderChangeEx3}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Ex3state ? Ex3state : 0}
							size='small'
							onChange={handleInputChangeEx3}
							onBlur={handleBlurEx3}
							inputProps={{
								step: 1,
								min: 0,
								max: 6,
								type: "number",
								"aria-labelledby": "input-slider",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Safety, Ethics and Environmental Issues
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={Ex4state ? Ex4state : 0}
							onChange={handleSliderChangeEx4}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Ex4state ? Ex4state : 0}
							size='small'
							onChange={handleInputChangeEx4}
							onBlur={handleBlurEx4}
							inputProps={{
								step: 1,
								min: 0,
								max: 6,
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
				type='text'
				multiline
				rows={3}
				placeholder='Strengths and Weaknesses'
				value={ExCstate}
				onChange={(event) => dispatch(updateExC(event.target.value))}
			/>
			<Box m={1} display='flex' justifyContent='flex-end' alignItems='flex-end'>
				<Typography variant='overline' sx={{ align: "right" }}>
					Marks for Exploration:{" "}
					<Input
						value={ExFinal ? ExFinal : ""}
						placeholder={ExAvg ? ExAvg : ""}
						size='small'
						onChange={(event) => dispatch(updateExFinal(event.target.value))}
						inputProps={{
							step: 1,
							min: 0,
							max: 6,
							type: "number",
							"aria-labelledby": "input-slider",
						}}
					/>
				</Typography>
			</Box>
		</Box>
	);
}
