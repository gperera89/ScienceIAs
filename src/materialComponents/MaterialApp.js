import { Container, CssBaseline, Paper } from "@mui/material";
import TabPanel from "./TabPanel";
import GuidanceBox from "./GuidanceBox";
import ReportModal from "./Modal";
const MaterialApp = () => {
	return (
		<>
			<CssBaseline />
			<Container
				sx={{
					display: "flex",
					alignItems: "stretch",
				}}>
				<Container>
					<TabPanel />
					<ReportModal />
				</Container>
				<Container>
					<Paper>
						<GuidanceBox />
					</Paper>
				</Container>
			</Container>
		</>
	);
};

export default MaterialApp;
//Next steps: build a calculating table element for the drawer but use HTML tables so that it can be copied. Work out how to export the MUI table and maybe replace it if it can't be removed.
