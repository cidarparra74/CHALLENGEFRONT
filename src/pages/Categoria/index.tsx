import Container from '@mui/material/Container';
import CrearCategoria from '../../components/molecules/Categoria/CrearCategoria';
import ListarCategoria from '../../components/molecules/Categoria/ListarCategoria';
import { useState } from 'react';
import EliminarCategoria from '../../components/molecules/Categoria/EliminarCategoria';

export default function Categoria() {

  const [load, setLoad] = useState(false);
  const [dataEliminar, setDataEliminar] = useState('')

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }} >
      <CrearCategoria setLoad={setLoad} load={load} />
      <ListarCategoria load={load} setDataEliminar={setDataEliminar}/>
      <EliminarCategoria dataEliminar={dataEliminar}  load={load} setLoad={setLoad} />
    </Container>
  );
}