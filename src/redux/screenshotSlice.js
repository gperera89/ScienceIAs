import { createSlice } from "@reduxjs/toolkit";

export const screenshotSlice = createSlice({
	name: "screenshot",
	initialState: { screenshot: "" },
	reducers: {
		updateScreenshot: (state, action) => {
			return {
				...state,
				guidance: action.payload,
			};
		},
	},
});

export const { updateScreenshot } = screenshotSlice.actions;
export default screenshotSlice.reducer;
