import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import TabPanel from "./TabPanel";
import ResponsiveAppBar from "./Appbar";
import Contact from "./Contact";
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
						<Route path='/' element={<TabPanel />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
