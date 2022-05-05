import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonalEngagement from "./PersonalEngagement.js";
import Exploration from "./Exploration.js";
import Analysis from "./Analysis.js";
import Communication from "./Communication.js";
import Evaluation from "./Evaluation.js";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
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

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
				height: 400,
			}}>
			<Tabs
				orientation='vertical'
				variant='scrollable'
				value={value}
				onChange={handleChange}
				aria-label='Vertical tabs example'
				sx={{ borderRight: 1, borderColor: "divider" }}>
				<Tab label='Personal Engagement' {...a11yProps(0)} />
				<Tab label='Exploration' {...a11yProps(1)} />
				<Tab label='Analysis' {...a11yProps(2)} />
				<Tab label='Evaluation' {...a11yProps(3)} />
				<Tab label='Communication' {...a11yProps(4)} />
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
	);
}
