import React, {Fragment} from 'react'
import "./LibrosLista.css"
import Libros from 'C:/Users/carlos/Desktop/Proyecto-Libreria/libreria/src/componentes/Libros'
import {Link, useNavigate} from "react-router-dom"
import imagen2 from "../../../src/Assets/download.svg"
import libro from "../../../src/Assets/book.png"


function LibrosLista() {

let historial = useNavigate();

const accionEditar = (id, autor, titulo, edicion, fecha_de_publicacion, tipo_de_contenido,
  restricciones, materia, proveedor) =>{

  localStorage.setItem("Autor", autor)
  localStorage.setItem("Titulo", titulo)
  localStorage.setItem("Edicion", edicion)
  localStorage.setItem("Fecha_de_publicacion", fecha_de_publicacion)
  localStorage.setItem("Tipo_de_contenido", tipo_de_contenido)
  localStorage.setItem("Restricciones", restricciones)
  localStorage.setItem("Materia", materia)
  localStorage.setItem("Proveedor", proveedor)
  localStorage.setItem("Id",id)

}




const accionEliminar = (id) => {
  var index = Libros.map(function(e){
    return e.id
  }).indexOf(id)

  Libros.splice(index,1)

   historial("/libreria")
 }





  return (
    <Fragment>
         <div className='main-container' >

           <div className='botones-lib'>
          <Link to={"/"}>
              <img className='casa' src={imagen2} alt="" />
              </Link>
              <Link to={"/registro"}>
              <button className='btnverde'>Registrar nuevo libro</button>
              </Link>
              </div>

<div className='tabla-contenedor'>
          <div className='informacion1'>
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
              </div>
              <div>
              <h2>Tipo de contenido:<p>{item.Tipo_de_contenido}</p></h2>
              <h2>Restricciones:<p>{item.Restricciones}</p></h2>
              <h2>Materia:<p>{item.Materia}</p></h2>
              <h2>Proveedor:<p>{item.Proveedor}</p></h2>
              </div>
              </div>


              <div className='botones'>
              <div className='libroimg'>
                <img src={libro} alt="" />

              </div>
              <div className='botones-ed-el'>
              <Link to={"/editar"}>

              <button className='btn1' onClick={() => accionEditar(item.id, item.Autor, item.Titulo, item.Edicion, item.Fecha_de_publicacion,
                item.Tipo_de_contenido, item.Restricciones, item.Materia, item.Proveedor)}>Editar</button>
              </Link>
              <button className='btn2' onClick={() => accionEliminar(item.id)}>Eliminar</button>
              </div>

              </div>
              
              
              </div>
              
            )
          })
          :
          "No hay libros registrados"
          
        }
       
       


        </div>
 
        </div>
       

        </div>
    </Fragment>
  )
}

export default LibrosLista