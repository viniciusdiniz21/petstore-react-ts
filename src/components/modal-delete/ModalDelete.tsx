import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import "./modal-delete.scss";
import { red } from "@mui/material/colors";
import { IProduct } from "../../types/global.types";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalDelete({ data }: { data: IProduct }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var url: string = import.meta.env.VITE_URL;

  const [loading, setLoading] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${url}/${data.id}`).then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product deleted successfully!",
        }).then(() => {
          window.location.reload();
        });
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        size="small"
        color="error"
        variant="contained"
      >
        <DeleteIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="modal-header">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Delete
            </Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>
          <Box className="modal-body">
            <Avatar sx={{ bgcolor: red[400], width: 72, height: 72 }}>
              <WarningAmberIcon sx={{ fontSize: "3rem" }} />
            </Avatar>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure?
            </Typography>
            <Button
              disabled={loading}
              color="error"
              variant="contained"
              onClick={handleDelete}
            >
              {loading ? "Loading..." : "Delete"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
