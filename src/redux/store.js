import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import guidanceReducer from "./guidanceSlice";
// import gradeReducer from "./gradeSlice";

export const store = configureStore({
	reducer: {
		score: scoreReducer,
		guidance: guidanceReducer,
		// grade: gradeReducer,
	},
});
