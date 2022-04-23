import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	PE1: 0,
	PE2: 0,
	PE3: 0,
	PEC: "",
	Ex1: 0,
	Ex2: 0,
	Ex3: 0,
	Ex4: 0,
	ExC: "",
	An1: 0,
	An2: 0,
	An3: 0,
	An4: 0,
	AnC: "",
	Ev1: 0,
	Ev2: 0,
	Ev3: 0,
	Ev4: 0,
	EvC: "",
	Co1: 0,
	Co2: 0,
	Co3: 0,
	Co4: 0,
	CoC: "",
};

export const scoreSlice = createSlice({
	name: "score",
	initialState: { initialState },
	reducers: {
		updatePE1: (state, action) => {
			return {
				...state,
				PE1: action.payload,
			};
		},
		updatePE2: (state, action) => {
			return {
				...state,
				PE2: action.payload,
			};
		},
		updatePE3: (state, action) => {
			return {
				...state,
				PE3: action.payload,
			};
		},
		updatePEC: (state, action) => {
			return {
				...state,
				PEC: action.payload,
			};
		},
	},
});

export const { updatePE1, updatePE2, updatePE3, updatePEC } =
	scoreSlice.actions;
export default scoreSlice.reducer;
