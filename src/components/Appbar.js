import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
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
		window.open("/contact", "_self");
	};
	const handleCloseNavMenu1 = () => {
		setAnchorElNav(null);
		window.open("/", "_self");
	};

	return (
		<AppBar
			position='static'
			sx={{
				marginBottom: 2,
				backgroundColor: prefersDarkMode ? "#000000" : "white",
			}}>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box sx={{ flexGrow: 1, display: "flex" }}>
						<IconButton
							size='large'
							aria-label='menu-appbar'
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
								display: "flex",
							}}>
							<MenuItem key={1} onClick={handleCloseNavMenu1}>
								<Typography textAlign={"center"}>IA Marker</Typography>
							</MenuItem>
							<MenuItem key={2} onClick={handleCloseNavMenu}>
								<Typography textAlign={"center"}>Contact</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Box
						sx={{
							mr: 2,
							my: 1,
							display: { xs: "flex", md: "flex" },
							flexGrow: 1,
							height: 64,
						}}>
						<img
							src='/Science-IA-Marker.png'
							alt='logo'
							rel='preload'
							as='image'
							width='142.3px'
							height='64px'
							onClick={handleCloseNavMenu1}
						/>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
