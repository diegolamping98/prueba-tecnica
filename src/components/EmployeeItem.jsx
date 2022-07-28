import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const EmployeeItem = ({ employee ,eliminar}) => {



  const { id,nombre, apellido, email, cedula, inss, fecNac } = employee;
  const deleteUser = (id) => {
     
    Swal.fire({
      title: 'Esta seguro?',
      text: "No va a poder revertir el cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {

      if (result.isConfirmed) {
        
        eliminar(id);
        Swal.fire(
          'Eliminado!',
          'El empleado ha sido eliminado',
          'success'
        )
      }
    })
  }

  const navigate = useNavigate();

  return (
    <TableRow
      key={nombre}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row"> {nombre}</TableCell>
      <TableCell align="left">{apellido}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="left">{cedula}</TableCell>
      <TableCell align="left">{inss}</TableCell>
      <TableCell align="center">{fecNac}</TableCell>


      <TableCell>
        <Button
          variant="contained" color="primary"
          onClick={() => navigate(`/${id}/editar`)}>
          Editar
        </Button>

        <Button
          variant="contained" color="error"
          onClick={() => deleteUser(employee.id)}
          
          >
          Eliminar

        </Button>
      </TableCell>

    </TableRow>
  )
}
