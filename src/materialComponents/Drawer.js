import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Table from "./Table";
import { flexbox } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

function Drawer(props) {
	const { window } = props;
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	// This is used only for the example
	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<Global
				styles={{
					".MuiDrawer-root > .MuiPaper-root": {
						height: "70%",
						overflow: "scroll",
					},
				}}
			/>
			<Box sx={{ textAlign: "center", pt: 1 }}>
				<Fab color='secondary' variant='extended' onClick={toggleDrawer(true)}>
					Open Output
				</Fab>
			</Box>
			<SwipeableDrawer
				container={container}
				anchor='bottom'
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}>
				<StyledBox
					sx={{
						position: "absolute",
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: "visible",
						width: "auto",
						display: flexbox,
					}}>
					<Table />
				</StyledBox>
			</SwipeableDrawer>
		</>
	);
}

export default Drawer;
