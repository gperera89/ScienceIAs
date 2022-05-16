import React, { useRef } from "react";
import { useScreenshot } from "use-screenshot-hook";
import { Global } from "@emotion/react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Table from "../materialComponents/Table";
import { flexbox } from "@mui/system";
import { Close } from "@mui/icons-material";
// import { useDispatch } from "react-redux";
import ReportModal from "../materialComponents/Modal";

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

function Drawer(props) {
	const { window } = props;
	const [open, setOpen] = React.useState(false);
	const imageRef = useRef(null);
	const { image, takeScreenshot, clear } = useScreenshot({
		ref: imageRef,
	});
	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};
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
					<div ref={imageRef}>
						<Table />
					</div>
					<Button onClick={() => takeScreenshot({ ref: imageRef })}>
						Take Screenshot
					</Button>
					<Box>
						<ReportModal image={image} clear={clear} />
						{image && (
							<div className='imageContainer'>
								<img width={800} src={image} alt='screenshot' />
								<Close onClick={clear} />
							</div>
						)}
					</Box>
				</StyledBox>
			</SwipeableDrawer>
		</>
	);
}

export default Drawer;
