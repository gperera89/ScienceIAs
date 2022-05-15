import React from "react";
import { Link, Typography } from "@mui/material";

const HowToUse = () => {
	return (
		<React.Fragment>
			<Typography variant='body1'>
				The Internal Assssment (IA) for the Biolgy, Chemistry, Physics and
				Sports, Exercise and Health Sciences (SEHS) is a challenging and
				exciting project for student studying the International Baccalaureate
				Diploma Program. The Science IA Marker is a tool to assist in navigating
				and using{" "}
				<Link href='https://ibpublishing.ibo.org/server2/rest/app/tsm.xql?doc=d_4_biolo_tsm_1408_2_e&part=7&chapter=2'>
					the assessment criterion
				</Link>{" "}
				and sharing your assessment with students, teachers and moderators.
			</Typography>
			<Typography variant='subtitle1'>
				Step 1: Set Candidate Information
			</Typography>
			<Typography variant='body2'>
				Type the name or candidate number of the student in the input box
			</Typography>
			<Typography variant='subtitle1'>Step 2: Mark the IA</Typography>
			<Typography variant='body2'>
				Select the mark for each criterion within the Personal Engagement,
				Exploration, Analysis, Evaluation and Communication section.{" "}
				<Link href='https://ibpublishing.ibo.org/server2/rest/app/tsm.xql?doc=d_4_biolo_tsm_1408_2_e&part=7&chapter=3'>
					Click here to learn more
				</Link>
				You must select a grade for each parameter to generate a score and
				grade. You can turn off the guidance using the toggle.{" "}
			</Typography>
			<Typography variant='subtitle1'>Step 3: View the Results</Typography>
			<Typography variant='body2'>
				Click Open Table and view the Report Table
			</Typography>
			<Typography variant='subtitle1'>Step 4: Finalise the Grade</Typography>
			<Typography variant='body2'>
				Input the final grade for each criterion, using the best-fit approach to
				decide on the appropriate mark. The app will offer a suggested mark,
				based on an average
			</Typography>
			<Typography variant='subtitle1'>Step 5: Export the Results</Typography>
			<Typography variant='body2'>
				Click the "Take Screenshot" button to take a screenshot of the table
				<br />
				Click the "Copy Brief Summary" button to export a summary of the scores
				to your clipboard <br />
				Click the "Copy Detailed Summary" button to export a detailed summary of
				each selected criterion descripton to the clipboard.
			</Typography>
		</React.Fragment>
	);
};

export default HowToUse;
