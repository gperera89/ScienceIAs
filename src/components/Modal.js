import React, { useRef } from "react";
import { useScreenshot } from "use-screenshot-hook";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Table from "./Table";
import Button from "@mui/material/Button";
import Close from "@mui/icons-material/Close";
import TableChart from "@mui/icons-material/TableChart";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Typography from "@mui/material/Typography";

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

function ReportModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const imageRef = useRef(null);
	const { image, takeScreenshot, clear } = useScreenshot({
		ref: imageRef,
	});

	return (
		<div style={{ marginBottom: "10px" }}>
			<Fab variant='extended' color='primary' onClick={handleOpen}>
				<TableChart sx={{ mr: 1 }} /> Export as Table
			</Fab>
			<ClickAwayListener onClickAway={clear}>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'>
					<Box sx={style}>
						<Box>
							{image ? (
								<Typography>
									Right click on image and then Save Image As..
								</Typography>
							) : (
								<Button
									variant='outlined'
									onClick={() => takeScreenshot({ ref: imageRef })}>
									Convert Table to Image
								</Button>
							)}
							<Box>
								{image ? (
									image && (
										<div className='imageContainer'>
											<Close onClick={clear} />
											<img width={800} src={image} alt='screenshot' />
										</div>
									)
								) : (
									<div ref={imageRef}>
										<Table />
									</div>
								)}
							</Box>
						</Box>
					</Box>
				</Modal>
			</ClickAwayListener>
		</div>
	);
}

export default ReportModal;
