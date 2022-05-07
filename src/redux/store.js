import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import guidanceReducer from "./guidanceSlice";
import screenshotReducer from "./screenshotSlice";

export const store = configureStore({
	reducer: {
		score: scoreReducer,
		guidance: guidanceReducer,
		screenshot: screenshotReducer,
	},
});
