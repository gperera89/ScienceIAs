import * as React from "react";
import { useRef } from "react";
import { useScreenshot } from "use-screenshot-hook";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Table from "./Table";
import Button from "@mui/material/Button";
import { Close, TableChart } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Summary from "./Summary";

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

function ReportModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const imageRef = useRef(null);
	const { image, takeScreenshot, clear } = useScreenshot({
		ref: imageRef,
	});
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<div>
			<Fab variant='extended' color='primary' onClick={handleOpen}>
				<TableChart sx={{ mr: 1 }} /> Open Table
			</Fab>
			<ClickAwayListener onClickAway={clear}>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'>
					<Box sx={style}>
						<FormGroup>
							<FormControlLabel
								control={
									<Switch
										checked={checked}
										onChange={handleChange}
										inputProps={{ "aria-label": "controlled" }}
									/>
								}
								label={checked ? "Table" : "Summary"}
							/>
						</FormGroup>
						{checked ? (
							<Box>
								{image ? (
									""
								) : (
									<Button
										variant='outlined'
										onClick={() => takeScreenshot({ ref: imageRef })}>
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
						) : (
							<Box>
								<Summary />
							</Box>
						)}
					</Box>
				</Modal>
			</ClickAwayListener>
		</div>
	);
}

export default ReportModal;
