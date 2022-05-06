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
	name: "",
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
		updateEx1: (state, action) => {
			return {
				...state,
				Ex1: action.payload,
			};
		},
		updateEx2: (state, action) => {
			return {
				...state,
				Ex2: action.payload,
			};
		},
		updateEx3: (state, action) => {
			return {
				...state,
				Ex3: action.payload,
			};
		},
		updateEx4: (state, action) => {
			return {
				...state,
				Ex4: action.payload,
			};
		},
		updateExC: (state, action) => {
			return {
				...state,
				ExC: action.payload,
			};
		},
		updateAn1: (state, action) => {
			return {
				...state,
				An1: action.payload,
			};
		},
		updateAn2: (state, action) => {
			return {
				...state,
				An2: action.payload,
			};
		},
		updateAn3: (state, action) => {
			return {
				...state,
				An3: action.payload,
			};
		},
		updateAn4: (state, action) => {
			return {
				...state,
				An4: action.payload,
			};
		},
		updateAnC: (state, action) => {
			return {
				...state,
				AnC: action.payload,
			};
		},
		updateEv1: (state, action) => {
			return {
				...state,
				Ev1: action.payload,
			};
		},
		updateEv2: (state, action) => {
			return {
				...state,
				Ev2: action.payload,
			};
		},
		updateEv3: (state, action) => {
			return {
				...state,
				Ev3: action.payload,
			};
		},
		updateEv4: (state, action) => {
			return {
				...state,
				Ev4: action.payload,
			};
		},
		updateEvC: (state, action) => {
			return {
				...state,
				EvC: action.payload,
			};
		},
		updateCo1: (state, action) => {
			return {
				...state,
				Co1: action.payload,
			};
		},
		updateCo2: (state, action) => {
			return {
				...state,
				Co2: action.payload,
			};
		},
		updateCo3: (state, action) => {
			return {
				...state,
				Co3: action.payload,
			};
		},
		updateCo4: (state, action) => {
			return {
				...state,
				Co4: action.payload,
			};
		},
		updateCoC: (state, action) => {
			return {
				...state,
				CoC: action.payload,
			};
		},
		updateName: (state, action) => {
			return {
				...state,
				name: action.payload,
			};
		},
	},
});

export const {
	updatePE1,
	updatePE2,
	updatePE3,
	updatePEC,
	updateEx1,
	updateEx2,
	updateEx3,
	updateEx4,
	updateExC,
	updateAn1,
	updateAn2,
	updateAn3,
	updateAn4,
	updateAnC,
	updateEv1,
	updateEv2,
	updateEv3,
	updateEv4,
	updateEvC,
	updateCo1,
	updateCo2,
	updateCo3,
	updateCo4,
	updateCoC,
	updateName,
} = scoreSlice.actions;
export default scoreSlice.reducer;
