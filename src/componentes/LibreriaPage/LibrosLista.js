import React, {Fragment} from 'react'
import "./LibrosLista.css"
import Libros from 'C:/Users/carlos/Desktop/Proyecto-Libreria/libreria/src/componentes/Libros'
/*import {Button, Table} from "react-bootstrap"*/
/*import "bootstrap/dist/css/bootstrap.min.css"*/
import {Link} from "react-router-dom"


function LibrosLista() {
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
              {item.Autor}
              </div>
               <div>
               {item.Titulo}
             </div>
              <div>
              {item.Edicion}
              </div><br></br>
              </div>
              <div className='botones'>
              <h2>loq ue sea </h2>
              </div>
              </div>
              
            )
          })
          :
          "No data available"
          
        }
       
       


        </div>
 
        </div>
        </div>
    </Fragment>
  )
}

export default LibrosLista