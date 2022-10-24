import React, {useState} from 'react'
import "./Registro.css"
import Libros from 'C:/Users/carlos/Desktop/Proyecto-Libreria/libreria/src/componentes/Libros'
import {Link, useNavigate} from "react-router-dom"
import {v4 as uuid} from "uuid"



function Registro() {

  const[autor, setAutor] = useState("")
 
  /*const[titulo, setTitulo] = useState("")
  const[edicion, setedicion] = useState("")
  const[fecha_de_publicacion, setFecha_de_publicacion] = useState("")
  const[tipo_de_contenido, setTipo_de_contenido] = useState("")
  const[restricciones, setRestricciones] = useState("")
  const[materia, setMateria] = useState("")
const[Proveedor, setProveedor] = useState("") */

  let historial = useNavigate();


const accionRegistar =(e) => {
e.preventDefault()

const ids = uuid()

let idUnico = ids.slice(0,8)

let a = autor

Libros.push({id: idUnico, Autor : a})


historial ("/libreria")
}



  return (
<div>
  <form action="">
    <label htmlFor=""></label>
    <input type="text" onChange={(e) => setAutor(e.target.value)}/>
    <button onClick={(e) => accionRegistar(e)} type='submit'>Registar</button>
  </form>
</div>
   
  )
}

export default Registro