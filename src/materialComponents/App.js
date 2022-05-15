import { Container, CssBaseline } from "@mui/material";
import TabPanel from "./TabPanel";
import ResponsiveAppBar from "./Appbar";
import HowToUse from "./HowToUse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<>
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
		</>
	);
};

export default App;
