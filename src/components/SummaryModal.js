import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Summary from "./Summary";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "80%",
	maxWidth: "80%",
	maxHeight: "100%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	overflowY: "auto",
};

function SummaryModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Fab variant='extended' color='primary' onClick={handleOpen}>
				<TextSnippetIcon sx={{ mr: 1 }} /> Export as Text
			</Fab>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Summary />
				</Box>
			</Modal>
		</div>
	);
}

export default SummaryModal;
