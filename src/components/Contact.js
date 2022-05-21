import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Contact = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={2}
				direction='row'
				justifyContent='center'
				alignItems='center'>
				<Grid item>
					<Typography variant='h5'>Contact</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				direction='row'
				justifyContent='center'
				alignItems='center'>
				<Grid item>
					<img
						src='memoji.jpeg'
						alt='a man behind a computer'
						width='240px'
						height='240px'
					/>
				</Grid>
				<Grid item justifyContent='center' alignItems='center'>
					<Typography
						variant='subtitle1'
						textAlign={"center"}
						color={"primary"}>
						Science IA Marker is made by a Biology and Chemistry teacher
						currently working at an international school in Shanghai, China.{" "}
						<br />
						If you have any questions or suggestions for improvements, please
						reach out.
					</Typography>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						marginTop={1}>
						<TwitterIcon
							fontSize='large'
							sx={{ color: "#1E9BF0" }}
							onClick={() =>
								window.open("https://twitter.com/g26?ref_src=twsrc%5Etfw")
							}
						/>
						<EmailIcon
							sx={{ color: "#F2EECB" }}
							fontSize='large'
							onClick={() => window.open("mailto:g.perera89@protonmail.com")}
						/>
						<GitHubIcon
							fontSize='large'
							onClick={() =>
								window.open("https://github.com/gperera89/ScienceIAs")
							}
						/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Contact;
