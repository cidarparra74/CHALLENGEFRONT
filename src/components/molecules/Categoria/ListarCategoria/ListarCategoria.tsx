
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ICategorias from '../../../../interfaces/ICategorias';
import { IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

interface ListarCategoriasProp {
  load: boolean,
  setDataEliminar: any
}

const ListarCategoria: React.FC<ListarCategoriasProp> = ({
  load = false,
  setDataEliminar,
}) => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/api/categoria/');
      setRows(response.data.data);
    };
    fetchData();
  }, [load]);

  const handleEliminar = async(idcategoria: number) => {
    setDataEliminar(idcategoria);
  }
 console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell>Nombre</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Ruta</TableCell>
            <TableCell>Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: ICategorias) => (
            <TableRow
              key={row.idcategoria}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell>
                {row.descripcion}
              </TableCell>
              <TableCell>
                {row.estado}
              </TableCell>
              <TableCell>
              {row.ruta}
              </TableCell>
              <TableCell>
              {moment(row.createdAt).format('DD/MM/YYYY HH:mm:ss')}
              </TableCell>
              <TableCell>
                
                <IconButton color="primary" aria-label="Eliminar" component="label" onClick={ () => {handleEliminar(row.idcategoria)}}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default ListarCategoria;