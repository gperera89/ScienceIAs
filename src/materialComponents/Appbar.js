import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleCloseNavMenu1 = () => {
		setAnchorElNav(null);
		window.open("/", "_self");
	};

	const handleClick = () => {
		window.open("https://github.com/gperera89/ScienceIAs");
	};
	return (
		<AppBar
			position='static'
			sx={{
				marginBottom: 2,
				backgroundColor: prefersDarkMode ? "#051531" : "white",
			}}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box
						sx={{
							mr: 2,
							my: 1,
							display: { xs: "none", md: "flex" },
							height: 64,
						}}>
						<img src='/Science-IA-Marker.png' alt='logo' />
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size='large'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color={"secondary"}>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							<MenuItem key={1} onClick={handleCloseNavMenu1}>
								<Typography textAlign={"center"}>Refresh Marker</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Box
						sx={{
							mr: 2,
							my: 1,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							height: 64,
						}}>
						<img src='/Science-IA-Marker.png' alt='logo' />
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Button
							key={1}
							onClick={handleCloseNavMenu}
							variant='contained'
							sx={{
								m: 2,
								color: "white",
								display: "block",
							}}
							href='/'
							color='secondary'>
							Refresh Marker
						</Button>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open Github Repository'>
							<IconButton sx={{ p: 0 }} onClick={handleClick}>
								<Avatar
									alt='Github Repository'
									src='/GitHub.png'
									sx={{ bgcolor: "white" }}
								/>
							</IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
