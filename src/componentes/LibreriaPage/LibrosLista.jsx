import React, {Fragment} from 'react'
import "./LibrosLista.css"
import Libros from 'C:/Users/carlos/Desktop/Proyecto-Libreria/libreria/src/componentes/Libros'
import {Link, useNavigate} from "react-router-dom"





function LibrosLista() {

let historial = useNavigate();

const accionEliminar = (id) => {
  var index = Libros.map(function(e){
    return e.id
  }).indexOf(id)

  Libros.splice(index,1)

   historial("/libreria")
 }





  return (
    <Fragment>
         <div className='lol' >
          <Link to={"/"}>
          <button>back home</button>
          </Link>
<div className='tabla-contenedor'>
          <div className='informacion'>
          {
          Libros && Libros.length > 0
          ?
          Libros.map((item) =>{
            return(
              <div className='informacion'>
              <div className='primera'>
              <div>
              <h2>Autor:<p>{item.Autor}</p></h2>
              <h2>Título:<p>{item.Titulo}</p></h2>
              <h2>Edición:<p>{item.Edicion}</p></h2>
              <h2>Fecha de publicación:<p>{item.Fecha_de_publicacion}</p></h2>
              <h2>Tipo de contenido:<p>{item.Tipo_de_contenido}</p></h2>
              <h2>Restricciones:<p>{item.Restricciones}</p></h2>
              <h2>Materia:<p>{item.Materia}</p></h2>
              <h2>Proveedor:<p>{item.Proveedor}</p></h2>
              </div>
              </div>
              <div className='botones'>
              <Link to={"/editar"}>
              <button onClick={() => alert(item.id)}>Editar</button>
              </Link>
              <button onClick={() => accionEliminar(item.id)}>Eliminar</button>
              </div>
              </div>
              
            )
          })
          :
          "No hay libros registrados"
          
        }
       
       


        </div>
 
        </div>
        <div className='btn-reg-lib'>
    <Link to={"/registro"}>
    <button>Registrar nuevo libro</button>
    </Link>
    </div>

        </div>
    </Fragment>
  )
}

export default LibrosLista