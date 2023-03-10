import { useState, useEffect } from "react"
// import { Fragment } from "react"
import Header from "./components/header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  //const [pacientes, setPacientes] = useState([])
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])

  const [editPaciente, setEditPaciente] = useState({})

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS();
  // }, []);

  useEffect(()=>{
      localStorage.setItem("pacientes", JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = ((id)=>{
    const pacientesActualizados = pacientes.filter((paciente)=> paciente.id !== id)
    setPacientes(pacientesActualizados)
  })



  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes = {setPacientes}
          editPaciente = {editPaciente}
          setEditPaciente = {setEditPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setEditPaciente={setEditPaciente}
          eliminarPaciente= {eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
