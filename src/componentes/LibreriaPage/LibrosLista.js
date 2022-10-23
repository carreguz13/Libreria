import React, {Fragment} from 'react'
import "./LibrosLista.css"
import Libros from 'C:/Users/carlos/Desktop/Proyecto-Libreria/libreria/src/componentes/Libros'
/*import {Button, Table} from "react-bootstrap"*/
/*import "bootstrap/dist/css/bootstrap.min.css"*/


function LibrosLista() {
  return (
    <Fragment>
         <div className='lol' >
          <div className='lol2'>
          {
          Libros && Libros.length > 0
          ?
          Libros.map((item) =>{
            return(
              <div>
              <div>
               <h3>Autor:{item.Autor} </h3>
              </div>
               <div>
               <h3>Titulo:{item.Titulo} </h3>
             </div>
              <div>
              <h3>Edicion:{item.Edicion} </h3>
              </div>
              </div>
            )
          })
          :
          "No data available"
        }
        </div>
        </div>
    </Fragment>
  )
}

export default LibrosLista