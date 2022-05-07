import * as React from "react";
import { useRef } from "react";
import { useScreenshot } from "use-screenshot-hook";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "./Table";
import { Close } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "auto",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function ReportModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const imageRef = useRef(null);
	const { image, takeScreenshot, clear } = useScreenshot({
		ref: imageRef,
	});
	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<ClickAwayListener onClickAway={clear}>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'>
					<Box sx={style}>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Text in a modal
						</Typography>
						{image ? (
							""
						) : (
							<Button onClick={() => takeScreenshot({ ref: imageRef })}>
								Take Screenshot
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
				</Modal>
			</ClickAwayListener>
		</div>
	);
}
