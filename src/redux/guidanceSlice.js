import { createSlice } from "@reduxjs/toolkit";

export const guidanceSlice = createSlice({
	name: "guidance",
	initialState: { guidance: "" },
	reducers: {
		updateGuidance: (state, action) => {
			return {
				...state,
				guidance: action.payload,
			};
		},
	},
});

export const { updateGuidance } = guidanceSlice.actions;
export default guidanceSlice.reducer;
