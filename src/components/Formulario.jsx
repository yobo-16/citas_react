import {useState, useEffect} from "react"
import Error from "./Error"

const Formulario = ({pacientes,setPacientes,editPaciente, setEditPaciente}) => {

  const [nombre, setNombre]= useState("")
  const [propietario, setPropietario]= useState("")
  const [email, setEmail]= useState("")
  const [fecha, setFecha]= useState("")
  const [sintomas, setSintomas]= useState("")
  const [error, setError] = useState(false)

  useEffect(()=>{
    if(Object.keys(editPaciente).length > 0){
      setNombre(editPaciente.nombre)
      setPropietario(editPaciente.propietario)
      setEmail(editPaciente.email)
      setFecha(editPaciente.fecha)
      setSintomas(editPaciente.sintomas)
    } 
  },[editPaciente])


  

  const generarId = ()=>{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now()
    return fecha + random
  }

  

  const handleSubmit = (e)=>{
    e.preventDefault()
    

    // Validación FOrmulario

    if([nombre, propietario, email, fecha, sintomas].includes("")){
      setError(true)
      return
    } 

    setError(false)

    // Creando objeto paciente

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id : generarId()
      
    }

    if(editPaciente.id){
      //Editando el registro
     objetoPaciente.id = editPaciente.id

      const pacientesActualizados = pacientes.map((pacienteState)=>{
        return pacienteState.id === editPaciente.id ? objetoPaciente : pacienteState
      })

      setPacientes(pacientesActualizados)
      setEditPaciente({})
    } else{

      // Nuevo Registro
        objetoPaciente.id= generarId()
        setPacientes([...pacientes, objetoPaciente])
        
    }
   
    // } else {
    //   // Nuevo registro

    //   
    //   setPacientes([...pacientes, objetoPaciente])

    // }

    // console.log(objetoPaciente)

  
   //Reiniciando el form
   setNombre('')
   setPropietario('')
   setEmail('')
   setFecha('')
   setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        onSubmit={handleSubmit}
      >
        {error && <Error>Todos los campos son obligatorios </Error>}
        <div className=" mb-5">
          
          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange = {(e)=>setNombre(e.target.value)}
          />

        </div>

        <div className=" mb-5">
          
          <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre Propietario</label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange = {(e)=>setPropietario(e.target.value)}
          />

        </div>

        <div className=" mb-5">
          
          <label htmlFor="email" className="block text-gray-700 font-bold uppercase">email</label>

          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange = {(e)=>setEmail(e.target.value)}
          />

        </div>

        <div className=" mb-5">
          
          <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta</label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange = {(e)=>setFecha(e.target.value)}
          />

        </div>

        <div className=" mb-5">
          
          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Sintomas</label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange = {(e)=>setSintomas(e.target.value)}
          />

        </div>

        <input type="submit"
        className="!bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:!bg-indigo-700 cursor-pointer transition-all"
        value={editPaciente.id ? "Editar paciente" : "Agregar paciente"}
        />

      </form>
    
    </div>
  )
}

export default Formulario

