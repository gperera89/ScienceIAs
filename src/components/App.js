import React from "react";
import Accordion from "./Accordion";
import PersonalEngagement from "./PersonalEngagement";
import Exploration from "./Exploration";
import Analysis from "./Analysis";
import Evaluation from "./Evaluation";
import Communication from "./Communication";
import "../style.css";

const App = () => {
	return (
		<>
			<div className='header'>
				<h1 className='heading'>
					IB Sciences <br /> Internal Assessment <br /> Marking Tool
				</h1>
				<div className='guidance'>
					<p>
						Strengths and weaknesses of the investigation, such as limitations
						of the data and sources of error, are described and provide evidence
						of some awareness of the methodological issues involved in
						establishing the conclusion.
					</p>
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
