import { useState } from "react"
import { useParams } from "react-router-dom";



import { addEmployee, editEmployee } from '../services/localstore'

export const useForm = (initialState = {}) => {
  const { id } = useParams();
  const [inputValues, setinputValues] = useState(initialState);

  const resetForm = () => {
    setinputValues(initialState);
  }

  const setForm = (newValues) => {
    setinputValues(newValues);
  };



  const handleInputChange = ({ target }) => {
    setinputValues({
      ...inputValues,
      [target.name]: target.value,
    });

  };



  return {
    inputValues,
    handleInputChange,
    resetForm,
    setForm,
    editEmployee,
  }
}

export default useForm;
