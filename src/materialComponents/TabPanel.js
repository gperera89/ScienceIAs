import * as React from "react";
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
import Button from "@mui/material/Button";

function TabPanel(props) {
	const { children, value, index, renderScreenshot, ...other } = props;

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
	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			sx={{ flexDirection: "column" }}>
			<Box display={"flex"} alignItems={"center"} sx={{ marginBottom: 2 }}>
				<TextField
					maxRows={1}
					placeholder={"Student Name or Candidate Number"}
					autoFocus={true}
					size={"small"}
					sx={{ width: "25rem" }}
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
					<Tab label='1. Personal Engagement' {...a11yProps(0)} />
					<Tab label='2. Exploration' {...a11yProps(1)} />
					<Tab label='3. Analysis' {...a11yProps(2)} />
					<Tab label='4. Evaluation' {...a11yProps(3)} />
					<Tab label='5. Communication' {...a11yProps(4)} />
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						sx={{ flexDirection: "column" }}>
						<ReportModal />
						<br />
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
			<GuidanceBox />
		</Box>
	);
}
