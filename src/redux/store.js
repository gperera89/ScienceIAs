import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import guidanceReducer from "./guidanceSlice";

export const store = configureStore({
	reducer: {
		score: scoreReducer,
		guidance: guidanceReducer,
	},
});
