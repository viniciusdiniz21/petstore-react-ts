import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import "./modal-edit.scss";
import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { IProduct } from "../../types/global.types";
import axios from "axios";
import Swal from "sweetalert2";
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
export default function ModalEdit({ data }: { data: IProduct }) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<IProduct>(data);
  const [loading, setLoading] = React.useState<boolean>(false);

  var url: string = import.meta.env.VITE_URL;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleEdit = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`${url}/${value.id}`, value).then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product updated successfully!",
        }).then(() => {
          window.location.reload();
        });
      });
      return response;
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
        color="warning"
        variant="contained"
      >
        <EditIcon />
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
              Edit
            </Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>
          <Box className="modal-body">
            <TextField
              size="small"
              variant="outlined"
              name="brand"
              value={value.brand}
              onChange={handleChangeValues}
            />
            <TextField
              size="small"
              variant="outlined"
              name="title"
              value={value.title}
              onChange={handleChangeValues}
            />
            <Button
              onClick={handleEdit}
              variant="contained"
              color="success"
              endIcon={<SaveIcon />}
            >
              {loading ? "Loading..." : "Edit"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
