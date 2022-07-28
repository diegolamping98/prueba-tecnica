import { Grid, TextField, Button, Collapse, Alert, Box, IconButton, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../hooks/useForm'
import React, { useEffect, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2'



const formValidation = ({ nombre, apellido, email, cedula, inss }) => {

  return nombre !== '' && apellido !== '' && email !== '' && cedula !== '' && inss !== ''
}


export const EmpoloyeeForm = (props) => {
  const { save, buscar, editar, checkEmployeeExist }= props;

  const [open, setOpen] = useState(false);


  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    nombre: '',
    apellido: '',
    email: '',
    cedula: '',
    inss: '',
    fecNac: '',
  });

  const [showAlert, setshowAlert] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();


  const getBirthay = (cedula) => {
    const day = cedula.substring(4,6);
    const month = cedula.substring(6,8);
    const year = cedula.substring(8,10);

    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    // Restear el form
    resetForm();
    if (id) {
      const employee = buscar(id);
      //console.log("empleado editar, ", employee);
      if (employee.id == -1) {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El empleado no existe!',

        })

      }
      // Si encuentra el usuario, setea los campos con la info del usuario encontrado
      setForm(employee);
    }
  }, [id]);

  const limpiar = () => {
    // Funcion para poder limpar los campos del formulario,
    // mostrar la alerta y redirigir a la pagina principal.

    // Restear el formulario
    resetForm();
    setshowAlert(true);
  
    // Quitar la alerta
    setTimeout(() => {
      setshowAlert(false);
    }, 1000);
    
    // Rederigir a la pagina de inicio automaticamente
    setTimeout(() => {
      navigate("/")
    }, 2000);
  
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValidation(inputValues)) {

      setOpen(true);

    }

    else {
      const naci = getBirthay(inputValues.cedula);

      const valuesToSave = {
        ...inputValues,
        fecNac: naci
      }
      
      setOpen(false);

      if (id) {
        // Si existe el ID, mandamos a editar el usuario
        editar(valuesToSave);
        limpiar();
      }
      else {
        // Checkamos si el usuario existe por CEDULA, EMAIL, INSS
        if (checkEmployeeExist(inputValues)) {
          Swal.fire({
            
            icon: 'error',
            title: 'El usuario ya existe',
            showConfirmButton: false,
            timer: 1500
          })
        }
        // Si no existe, mandamos a guardar el usuario.
        else {

         
          save(valuesToSave);
          limpiar();
        }
      }
    }



  };



  return (

    <AuthLayout>
      <form onSubmit={handleSubmit}>

        <h1 className="my-3 text-center">{id ? "Editar" : "Agregar"} Empleado</h1>
        <Grid >
          <TextField
            label="Nombre"
            type="text"
            placeholder='Nombres'
            fullWidth
            name="nombre"
            value={inputValues.nombre}
            onChange={handleInputChange}

          />
        </Grid>


        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Apellido"
            type="text"
            placeholder='Apellidos'
            fullWidth
            name="apellido"
            value={inputValues.apellido}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          
          <TextField
            label="Correo"
            type="email"
            placeholder='correo@google.com'
            fullWidth
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
            />

        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography>
            No. Cedula
          </Typography>

           <InputMask
           type="text"
           name="cedula"
           mask='999-999999-9999a'
           placeholder='000-000000-0000A'
           label="Cedula"
           value={inputValues.cedula}
           onChange={handleInputChange}
           style = {{
             backgroundColor: "#ffffff",
             color: "#000000",
             border: "gray solid 1px",
             fontSize: "1.1rem",
             height: "2rem",
             padding: "0.5rem",
             marginTop: "0.3rem"
           }}
           >
         </InputMask>
 
        </Grid>


        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="No. INSS"
            type="text"
            fullWidth
            name="inss"
            value={inputValues.inss}
            onChange={handleInputChange}
          />

        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          
          <Button
            className="btn btn-warning"
            onClick={() => navigate("/")}
          >
            Regresar
          </Button>

          <Button
            type="submit"
            className="btn btn-outline-primary btn-block"
          >{id ? "Editar" : "Agregar"} Empleado</Button>

          {
            open && (
              <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                  <Alert
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        X
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Por favor rellenar todos los campos
                  </Alert>
                </Collapse>
              </Box>

            )}
          {
            showAlert && (

              <Alert
                severity="info"
                sx={{ mb: 2 }}
              >
                Bien Hecho, has {id ? "Editado" : "Agregado Nuevo"} Empleado.
              </Alert>
                 )

          }
        </Grid>
      </form>
    </AuthLayout>
  )
}
