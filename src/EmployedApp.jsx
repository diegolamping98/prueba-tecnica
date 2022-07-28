import { Route, Routes } from "react-router-dom"
import { EmployeeList } from "./components/EmployeeList"
import { EmpoloyeeForm } from "./components/EmpoloyeeForm"
import { NavBar } from "./components/NavBar"
import { useState } from "react";
import uuid4 from "uuid4";
import { Api } from "./components/Api";


export const EmployedApp = () => {
  const [arreglo, setArreglo] = useState([]);

  const getEmployee = (id) => {
    let empleado = arreglo.find((employee) => employee.id === id);

    if (empleado == undefined) {
      empleado = { id: -1 };
    }

    return empleado;

  }

  const editEmployee = (editedEmployee) => {
    const nuevaListaEmpleados = arreglo.map(item => item.id === editedEmployee.id ? editedEmployee : item);
    setArreglo(nuevaListaEmpleados);
  }

  const checkEmployeeExist = (newEmployee) =>{   
    return (arreglo.find((employee) => employee.cedula === newEmployee.cedula) || 
    arreglo.find((employee) => employee.email === newEmployee.email) ||
    arreglo.find((employee) => employee.inss === newEmployee.inss))
  }; 

  const deleteUser = (id) => {
    setArreglo(arreglo.filter((employee) => employee.id !== id))
  }

  const addEmployee = (employed) => {
    let aux = { id: uuid4(), ...employed }
    let newEmployed = [...arreglo];
    newEmployed.push(aux);
    setArreglo(newEmployed);
  }


  


  return (



    <div>
      <   NavBar />


      <Routes>
        <Route path="/" element={<EmployeeList lista={arreglo} eliminar={deleteUser} />} />
        <Route path="/nuevo" element={<EmpoloyeeForm save={addEmployee} checkEmployeeExist={checkEmployeeExist} />} />
        <Route path="/:id/editar" element={<EmpoloyeeForm buscar={getEmployee} editar={editEmployee}/>} />
        <Route path="/api" element={<Api />} />


      </Routes>
    </div>



  )
}


