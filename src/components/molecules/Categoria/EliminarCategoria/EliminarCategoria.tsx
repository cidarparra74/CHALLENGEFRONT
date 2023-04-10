import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import axios from "axios";
import React, { FC, useEffect } from "react";
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

interface EliminarCategoriaProps {
  dataEliminar: number | string,
  load: boolean,
  setLoad: any
}

const EliminarCategoria: FC<EliminarCategoriaProps> = ({
  dataEliminar,
  load,
  setLoad
}) => {

  console.log('dataEliminar', dataEliminar);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEliminar = async() => {
    const response =  await axios.delete(`http://localhost:8080/api/categoria/${dataEliminar}`);
    setLoad( ! load);
    setOpen(false);

    Swal.fire(
      '¡Info!',
      'Categoria eliminada correctamente',
      'error'
    )
  }

  useEffect(() => {
    setOpen(dataEliminar ? true : false)
  }, [dataEliminar])
  
  return(

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        ¿Esta seguro que desea eliminar este usuario?
      </DialogTitle>
      <DialogActions>

        <Button type="submit" variant="contained" color="error" onClick={handleEliminar}>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EliminarCategoria;