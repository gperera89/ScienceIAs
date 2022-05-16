import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateGuidance } from "../redux/guidanceSlice";
import guidanceData from "./guidanceData";

const GuidanceBox = () => {
	const PE1state = useSelector((state) => state.score.PE1);
	const PE2state = useSelector((state) => state.score.PE2);
	const PE3state = useSelector((state) => state.score.PE3);
	const Ex1state = useSelector((state) => state.score.Ex1);
	const Ex2state = useSelector((state) => state.score.Ex2);
	const Ex3state = useSelector((state) => state.score.Ex3);
	const Ex4state = useSelector((state) => state.score.Ex4);
	const An1state = useSelector((state) => state.score.An1);
	const An2state = useSelector((state) => state.score.An2);
	const An3state = useSelector((state) => state.score.An3);
	const An4state = useSelector((state) => state.score.An4);
	const Ev1state = useSelector((state) => state.score.Ev1);
	const Ev2state = useSelector((state) => state.score.Ev2);
	const Ev3state = useSelector((state) => state.score.Ev3);
	const Ev4state = useSelector((state) => state.score.Ev4);
	const Co1state = useSelector((state) => state.score.Co1);
	const Co2state = useSelector((state) => state.score.Co2);
	const Co3state = useSelector((state) => state.score.Co3);
	const Co4state = useSelector((state) => state.score.Co4);
	const dispatch = useDispatch();

	useEffect(() => {
		let statement;
		switch (PE1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
				statement = guidanceData.pe1Low;
				break;
			case 2:
				statement = guidanceData.pe1Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [PE1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (PE2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
				statement = guidanceData.pe2Low;
				break;
			case 2:
				statement = guidanceData.pe2Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [PE2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (PE3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
				statement = guidanceData.pe3Low;
				break;
			case 2:
				statement = guidanceData.pe3Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [PE3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ex1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ex1Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ex1Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ex1High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ex1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ex2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ex2Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ex2Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ex2High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ex2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ex3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ex3Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ex3Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ex3High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ex3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ex4state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ex4Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ex4Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ex4High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ex4state, dispatch]);

	useEffect(() => {
		let statement;
		switch (An1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.an1Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.an1Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.an1High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [An1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (An2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.an2Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.an2Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.an2High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [An2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (An3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.an3Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.an3Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.an3High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [An3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (An4state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.an4Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.an4Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.an4High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [An4state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ev1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ev1Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ev1Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ev1High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ev1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ev2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ev2Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ev2Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ev2High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ev2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ev3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ev3Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ev3Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ev3High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ev3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Ev4state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.ev4Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.ev4Med;
				break;
			case 5:
			case 6:
				statement = guidanceData.ev4High;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Ev4state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Co1state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.co1Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.co1Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Co1state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Co2state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.co2Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.co2Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Co2state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Co3state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.co3Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.co3Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Co3state, dispatch]);

	useEffect(() => {
		let statement;
		switch (Co4state) {
			case 0:
				statement = guidanceData.zero;
				break;
			case 1:
			case 2:
				statement = guidanceData.co4Low;
				break;
			case 3:
			case 4:
				statement = guidanceData.co4Med;
				break;
			default:
				statement = "";
		}
		dispatch(updateGuidance(statement));
	}, [Co4state, dispatch]);

	const guidance = useSelector((state) => state.guidance.guidance);
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				boxShadow: 2,
				borderRadius: 2,
				p: 2,
				minWidth: 300,
				maxWidth: 500,
			}}>
			<Typography varient='body2'>{guidance}</Typography>
		</Box>
	);
};

export default GuidanceBox;
