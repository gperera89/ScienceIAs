import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import TabPanel from "./TabPanel";
import ResponsiveAppBar from "./Appbar";
import HowToUse from "./HowToUse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";

const App = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
					primary: {
						main: "#0047AB",
					},
					secondary: {
						main: "#4781B4",
					},
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ResponsiveAppBar />
			<BrowserRouter>
				<Container
					sx={{
						display: "flex",
						alignItems: "stretch",
					}}>
					<Routes>
						<Route
							path='/'
							element={
								<Container className='marker'>
									<TabPanel />
								</Container>
							}
						/>
						<Route
							path='howto'
							element={
								<Container className='how-to'>
									<HowToUse />
								</Container>
							}
						/>
					</Routes>
				</Container>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
