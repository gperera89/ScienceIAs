import { createSlice } from "@reduxjs/toolkit";

export const guidanceSlice = createSlice({
	name: "guidance",
	initialState: { guidance: "" },
	reducers: {
		giveGuidance: (state, action) => {
			return {
				...state,
				guidance: action.payload,
			};
		},
	},
});

export const { giveGuidance } = guidanceSlice.actions;
export default guidanceSlice.reducer;
