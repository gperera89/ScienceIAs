import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TabPanel from "./TabPanel";
import ResponsiveAppBar from "./Appbar";
import Contact from "./Contact";

const App = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
					primary: {
						main: prefersDarkMode ? "#008080" : "#0047AB",
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
						// marginX: "0.51rem",
					}}>
					<Routes>
						<Route path='/' element={<TabPanel />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
