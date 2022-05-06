import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import {
	updateEv1,
	updateEv2,
	updateEv3,
	updateEv4,
	updateEvC,
} from "../redux/scoreSlice";

const Input = styled(MuiInput)`
	width: 30px;
`;

export default function Evaluation() {
	const Ev1state = useSelector((state) => state.score.Ev1);
	const Ev2state = useSelector((state) => state.score.Ev2);
	const Ev3state = useSelector((state) => state.score.Ev3);
	const Ev4state = useSelector((state) => state.score.Ev4);
	const EvCstate = useSelector((state) => state.score.EvC);
	const dispatch = useDispatch();

	const handleSliderChangeEv1 = (event, newValue) => {
		dispatch(updateEv1(newValue));
	};
	const handleSliderChangeEv2 = (event, newValue) => {
		dispatch(updateEv2(newValue));
	};
	const handleSliderChangeEv3 = (event, newValue) => {
		dispatch(updateEv3(newValue));
	};
	const handleSliderChangeEv4 = (event, newValue) => {
		dispatch(updateEv4(newValue));
	};
	const handleInputChangeEv1 = (event) => {
		dispatch(
			updateEv1(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeEv2 = (event) => {
		dispatch(
			updateEv2(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeEv3 = (event) => {
		dispatch(
			updateEv3(event.target.value === "" ? "" : Number(event.target.value))
		);
	};
	const handleInputChangeEv4 = (event) => {
		dispatch(
			updateEv4(event.target.value === "" ? "" : Number(event.target.value))
		);
	};

	const handleBlurEv1 = () => {
		if (Ev1state < 0) {
			dispatch(updateEv1(0));
		} else if (Ev1state > 6) {
			dispatch(updateEv1(6));
		}
	};
	const handleBlurEv2 = () => {
		if (Ev2state < 0) {
			dispatch(updateEv2(0));
		} else if (Ev2state > 6) {
			dispatch(updateEv2(6));
		}
	};
	const handleBlurEv3 = () => {
		if (Ev3state < 0) {
			dispatch(updateEv3(0));
		} else if (Ev3state > 6) {
			dispatch(updateEv3(6));
		}
	};
	const handleBlurEv4 = () => {
		if (Ev4state < 0) {
			dispatch(updateEv3(0));
		} else if (Ev4state > 6) {
			dispatch(updateEv3(6));
		}
	};
	return (
		<Box>
			<Box sx={{ width: 250 }}>
				<Typography id='input-slider' gutterBottom>
					Conclusion
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={typeof Ev1state === "number" ? Ev1state : 0}
							onChange={handleSliderChangeEv1}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Ev1state}
							size='small'
							onChange={handleInputChangeEv1}
							onBlur={handleBlurEv1}
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
					Scientific Context
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={typeof Ev2state === "number" ? Ev2state : 0}
							onChange={handleSliderChangeEv2}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Ev2state}
							size='small'
							onChange={handleInputChangeEv2}
							onBlur={handleBlurEv2}
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
					Limitations
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={typeof Ev3state === "number" ? Ev3state : 0}
							onChange={handleSliderChangeEv3}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Ev3state}
							size='small'
							onChange={handleInputChangeEv3}
							onBlur={handleBlurEv3}
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
					Improvement and Extension
				</Typography>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs>
						<Slider
							value={typeof Ev4state === "number" ? Ev4state : 0}
							onChange={handleSliderChangeEv4}
							aria-labelledby='input-slider'
							marks
							max={6}
							min={0}
						/>
					</Grid>
					<Grid item>
						<Input
							value={Ev4state}
							size='small'
							onChange={handleInputChangeEv4}
							onBlur={handleBlurEv4}
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
				multiline
				rows={3}
				placeholder='Strengths and Weaknesses'
				value={EvCstate}
				onChange={(event) => dispatch(updateEvC(event.target.value))}
			/>
		</Box>
	);
}
