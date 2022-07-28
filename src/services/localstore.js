import uuid4 from "uuid4";



export const getListEmployees = () => {
   
    if (!localStorage["employees"]) {
      localStorage.setItem("employees", "[]");
    }

    
    let employees = JSON.parse(localStorage.getItem('employees'))
    return employees;
 };

 export const addEmployee = (employee) => {
    
    const employees = getListEmployees();
    employees.push({id: uuid4(),...employee});
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  export const getEmployeeById = (id) => {
    const employees = getListEmployees();
    const employee = employees.find((employee) => employee.id === id);
    return employee;
  };

  export const checkEmployeeExist = (email, cedula, inss) =>{
    const employees = getListEmployees();


    
    return (employees.find((employee) => employee.cedula === cedula) || 
    employees.find((employee) => employee.email === email) ||
    employees.find((employee) => employee.inss === inss))
    
  }; 


  export const editEmployee = (id, newEmployee) => {
    let employees = getListEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    employees.push(newEmployee);
    localStorage["employees"] = JSON.stringify(employees);
  };


  export const deleteEmployee = (id) => {
    let employees = getListEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    localStorage["employees"] = JSON.stringify(employees);
  };