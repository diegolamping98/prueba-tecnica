import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EmployeeItem } from './EmployeeItem'
import { Box } from '@mui/system';


export const EmployeeList = (props) => {

  const [employees, setEmployees,getEmployee] = useState([]);
  const { lista , eliminar } = props;


  useEffect(() => {
    setEmployees(getEmployee);
  }, [lista]);


  return (


    <div id="contenedor">
      <label id="titulo"> Listado Empleados </label>

      <div>
      
        <TableContainer component={Paper}>
          {
              lista.length > 0 ? (
              <Table id="lista" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="left">Apellido</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="left">Cedula</TableCell>
                    <TableCell align="left">Numero INSS</TableCell>
                    <TableCell align="center">Fecha Nacimiento</TableCell>
                    <TableCell align="left">Acciones</TableCell>


                  </TableRow>
                  {
                    lista.map( empleado =>
                      <EmployeeItem
                        employee={empleado}
                        key={empleado.id}
                        eliminar={eliminar}
                        
                        
                      />)
                  }
                </TableHead>


                <TableBody>

                </TableBody>

              </Table>
              ) :

              (
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  <h3 >No hay Empleados</h3>
                </Box>
              )
          }
        </TableContainer>


      </div>

    </div>


  )

}
