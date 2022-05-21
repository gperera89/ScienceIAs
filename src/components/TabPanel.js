import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PersonalEngagement from "./PersonalEngagement.js";
import Exploration from "./Exploration.js";
import Analysis from "./Analysis.js";
import Communication from "./Communication.js";
import Evaluation from "./Evaluation.js";
import ReportModal from "./Modal.js";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../redux/scoreSlice";
import GuidanceBox from "./GuidanceBox.js";
import SummaryModal from "./SummaryModal.js";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

export default function VerticalTabs() {
	const [value, setValue] = React.useState(0);
	const dispatch = useDispatch();
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const name = useSelector((state) => state.score.name);
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	const tablet = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Container>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				sx={{ flexDirection: "column" }}>
				<Box display={"flex"} alignItems={"center"} marginBottom={1}>
					<TextField
						maxRows={1}
						placeholder={"Student Name or Candidate Number"}
						size={"small"}
						sx={{ width: "19rem" }}
						value={name}
						onChange={(event) => dispatch(updateName(event.target.value))}
					/>
				</Box>
				<Box
					sx={{
						flexGrow: 1,
						bgcolor: "background.paper",
						display: "flex",
						height: 400,
						marginBottom: 12,
					}}>
					<Tabs
						orientation='vertical'
						variant='scrollable'
						value={value}
						onChange={handleChange}
						aria-label='Vertical tabs example'
						sx={{ borderRight: 1, borderColor: "divider" }}>
						<Tab
							label={mobile ? "1. PE" : "1. Personal Engagement"}
							{...a11yProps(0)}
						/>
						<Tab
							label={mobile ? "2. Ex" : "2. Exploration"}
							{...a11yProps(1)}
						/>
						<Tab label={mobile ? "3. An" : "3. Analysis"} {...a11yProps(2)} />
						<Tab label={mobile ? "4. Ev" : "4. Evaluation"} {...a11yProps(3)} />
						<Tab
							label={mobile ? "5. Co" : "5. Communication"}
							{...a11yProps(4)}
						/>
						<Box
							display='flex'
							justifyContent='center'
							alignItems='center'
							sx={{ flexDirection: "column" }}>
							<ReportModal />
							<SummaryModal />
						</Box>
					</Tabs>
					<TabPanel value={value} index={0}>
						<PersonalEngagement />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Exploration />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Analysis />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<Evaluation />
					</TabPanel>
					<TabPanel value={value} index={4}>
						<Communication />
					</TabPanel>
				</Box>
				<Box marginTop={tablet ? 9 : 1}>
					<GuidanceBox />
				</Box>
			</Box>
		</Container>
	);
}
