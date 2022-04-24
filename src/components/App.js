import React from "react";
import Accordion from "./Accordion";
import PersonalEngagement from "./PersonalEngagement";
import Exploration from "./Exploration";
import Analysis from "./Analysis";
import Evaluation from "./Evaluation";
import Communication from "./Communication";
import { useSelector } from "react-redux";

import "../style.css";

const App = () => {
	const guidance = useSelector((state) => state.guidance.guidance);

	return (
		<>
			<div className='header'>
				<h1 className='heading'>
					IB Sciences <br /> Internal Assessment <br /> Marking Tool
				</h1>
				<div className='guidance'>
					<p>{guidance}</p>
				</div>
			</div>
			<div className='accordion-section'>
				<Accordion
					title='Personal Engagement'
					content={<PersonalEngagement />}
				/>
				<Accordion title='Exploration' content={<Exploration />} />
				<Accordion title='Analysis' content={<Analysis />} />
				<Accordion title='Evaluation and Conclusion' content={<Evaluation />} />
				<Accordion title='Communication' content={<Communication />} />
			</div>
		</>
	);
};

export default App;
