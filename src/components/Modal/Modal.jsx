import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MainButton from "../Button/Button";
import { StyledTextField } from "../TodoInput/TodoInput.styles";
import { useContext } from "react";
import { AppContext } from "../App/App";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ onKeyPressEdit }) {
  const { open, onToggleModal, inputEditValue, onEditInputChange, onEditTodo } =
    useContext(AppContext);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => onToggleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit todo item
          </Typography>
          <StyledTextField
            value={inputEditValue}
            onChange={onEditInputChange}
            onKeyPress={onKeyPressEdit}
            fullWidth
            autoFocus
            id="fullWidth"
          />
          <MainButton
            title="Edit"
            width={180}
            bgColor={"#009688"}
            callback={onEditTodo}
          />
        </Box>
      </Modal>
    </div>
  );
}
