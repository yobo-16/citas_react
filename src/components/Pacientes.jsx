

const Pacientes = ({paciente, setEditPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = ()=>{
      // ()=> eliminarPaciente(id)
      const respuesta = confirm("Deseas eliminar este paciente?")

      if(respuesta){
        eliminarPaciente(id)
      }
    }

    

  console.log(paciente)
  return (
    <div className="mx-5 my-10 bg-white shadow-md rounded-lg px-5 py-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        fecha Alta:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 !bg-indigo-600 hover:!bg-indigo-700 text-white uppercase rounded-md font-bold"
          type="button"
          onClick={()=>{return setEditPaciente(paciente) }}
          >
            Editar
        </button>
        <button
          className="py-2 px-10 !bg-red-600 hover:!bg-red-700 text-white uppercase rounded-md font-bold"
          type="button"
          onClick={handleEliminar}
        >
            Eliminar
        </button>
      </div>

    </div>
  );
};

export default Pacientes;
