//import {useEffect} from "react"

import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes, setEditPaciente, eliminarPaciente}) => {

  // useEffect(()=>{
      
  //   if(pacientes.length > 08){
  //     console.log("Nuevo Paciente")
  //   }
  // }, [pacientes])
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (

        <>

          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>


          {pacientes.map((paciente) => {
            return <Pacientes
                       key={paciente.id}
                       paciente={paciente}
                       setEditPaciente={setEditPaciente}
                       eliminarPaciente={eliminarPaciente}
            
            />;
          })}
            
        </>
      ) : (
        (
          <>

          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        
        </>
        )
      )}
    </div>
  );
};

export default ListadoPacientes;
