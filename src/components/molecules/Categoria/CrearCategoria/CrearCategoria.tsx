
import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface CrearCategoriaProps {
  setLoad: any,
  load: boolean
}

const CrearCategoria: FC<CrearCategoriaProps> = ({
  setLoad,
  load
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Crear categoria
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{ 
            nombre: '', 
            descripcion: '',
            estado: '',
            ruta: '',
            createdAt: '',
            updateAt: '',
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(10, 'Debe tener 10 caracteres o menos')
              .required('Required'),
            descripcion: Yup.string()
              .required('Required'),
            estado: Yup.number()
              .required('Required'),
            ruta: Yup.string(),
          
          })}
          onSubmit={async(values, { setSubmitting }) => {
            const response = await axios.post('http://localhost:8080/api/categoria', values);
            setLoad(!load);
            setOpen(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="alert-dialog-title">
                Crear un nuevo usuario
              </DialogTitle>
              <DialogContent>
                  
                  <TextField 
                    sx={{
                      mt: 1
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Nombre"
                    name="nombre"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Descripcion"
                    name="descripcion"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.descripcion}
                    error={Boolean(errors.descripcion)}
                    helperText={errors.descripcion}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Estado"
                    name="estado"
                    type='number'
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(errors.estado)}
                    helperText={errors.estado}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Ruta"
                    name="ruta"
                    type="string"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ruta}
                    error={Boolean(errors.ruta)}
                    helperText={errors.ruta}
                  />
              
              </DialogContent>
              <DialogActions>
                <Button type="submit" >
                  Crear 
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}

export default CrearCategoria;