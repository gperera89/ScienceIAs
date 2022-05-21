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
	updateAn1,
	updateAn2,
	updateAn3,
	updateAn4,
	updateAnC,
	updateAnFinal,
} from "../redux/scoreSlice";

const Input = styled(MuiInput)`
	width: 30px;
`;

export default function Analysis() {
	const An1state = useSelector((state) => state.score.An1);
	const An2state = useSelector((state) => state.score.An2);
	const An3state = useSelector((state) => state.score.An3);
	const An4state = useSelector((state) => state.score.An4);
	const AnCstate = useSelector((state) => state.score.AnC);
	const AnFinal = useSelector((state) => state.score.AnFinal);
	let AnAvg = Math.round((An1state + An2state + An3state + An4state) / 4);
	const dispatch = useDispatch();

	const handleSliderChangeAn1 = (event, newValue) => {
		dispatch(updateAn1(newValue));
	};
	const handleSliderChangeAn2 = (event, newValue) => {
		dispatch(updateAn2(newValue));
	};
	const handleSliderChangeAn3 = (event, newValue) => {
		dispatch(updateAn3(newValue));
	};
	const handleSliderChangeAn4 = (event, newValue) => {
		dispatch(updateAn4(newValue));
	};
	const handleInputChangeAn1 = (event) => {
		dispatch(
			updateAn1(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeAn2 = (event) => {
		dispatch(
			updateAn2(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeAn3 = (event) => {
		dispatch(
			updateAn3(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeAn4 = (event) => {
		dispatch(
			updateAn4(event.target.value === "" ? "" : Number(event.target.value))
		);
	};

	const handleBlurAn1 = () => {
		if (An1state < 0) {
			dispatch(updateAn1(0));
		} else if (An1state > 6) {
			dispatch(updateAn1(6));
		}
	};
	const handleBlurAn2 = () => {
		if (An2state < 0) {
			dispatch(updateAn2(0));
		} else if (An2state > 6) {
			dispatch(updateAn2(6));
		}
	};
	const handleBlurAn3 = () => {
		if (An3state < 0) {
			dispatch(updateAn3(0));
		} else if (An3state > 6) {
			dispatch(updateAn3(6));
		}
	};
	const handleBlurAn4 = () => {
		if (An4state < 0) {
			dispatch(updateAn3(0));
		} else if (An4state > 6) {
			dispatch(updateAn3(6));
		}
	};
	return (
		<Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Raw Data
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={An1state ? An1state : 0}
							onChange={handleSliderChangeAn1}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={An1state ? An1state : 0}
							size='small'
							onChange={handleInputChangeAn1}
							onBlur={handleBlurAn1}
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
					Data Processing
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={An2state ? An2state : 0}
							onChange={handleSliderChangeAn2}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={An2state ? An2state : 0}
							size='small'
							onChange={handleInputChangeAn2}
							onBlur={handleBlurAn2}
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
					Impact of Uncertainty
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={An3state ? An3state : 0}
							onChange={handleSliderChangeAn3}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={An3state ? An3state : 0}
							size='small'
							onChange={handleInputChangeAn3}
							onBlur={handleBlurAn3}
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
					Interpretation of Processed Data
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={An4state ? An4state : 0}
							onChange={handleSliderChangeAn4}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={An4state ? An4state : 0}
							size='small'
							onChange={handleInputChangeAn4}
							onBlur={handleBlurAn4}
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
				value={AnCstate}
				onChange={(event) => dispatch(updateAnC(event.target.value))}
			/>
			<Box m={1} display='flex' justifyContent='flex-end' alignItems='flex-end'>
				<Typography variant='overline' sx={{ align: "right" }}>
					Marks for Analysis:{" "}
					<input
						value={AnFinal ? AnFinal : ""}
						placeholder={AnAvg ? AnAvg : ""}
						onChange={(event) => dispatch(updateAnFinal(event.target.value))}
						label='Analysis-total-score'
						step='1'
						min='0'
						max='6'
						type='number'
					/>
				</Typography>
			</Box>
		</Box>
	);
}
