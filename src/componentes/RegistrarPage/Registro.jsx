import React, {useState} from 'react'
import "./Registro.css"
import Libros from 'C:/Users/carlos/Desktop/Proyecto-Libreria/libreria/src/componentes/Libros'
import {useNavigate} from "react-router-dom"
import {v4 as uuid} from "uuid"



function Registro() {
  
  const[autor, setAutor] = useState("")
   const[titulo, setTitulo] = useState("")
  const[edicion, setEdicion] = useState("")
  const[fecha_de_publicacion, setFecha_de_publicacion] = useState("")
  const[tipo_de_contenido, setTipo_de_contenido] = useState("")
  const[restricciones, setRestricciones] = useState("")
  const[materia, setMateria] = useState("")
const[proveedor, setProveedor] = useState("")

  let historial = useNavigate();


const accionRegistar =(e) => {
e.preventDefault()

const ids = uuid()

let idUnico = ids.slice(0,8)

let a = autor, b = titulo, c = edicion, d = fecha_de_publicacion,
f = tipo_de_contenido, g = restricciones, h = materia, 
j = proveedor

Libros.push({id: idUnico, Autor : a, Titulo : b, Edicion : c, Fecha_de_publicacion : d,
  Tipo_de_contenido : f, Restricciones : g, Materia : h, Proveedor : j})


historial ("/libreria")
}


  return (
    
<div className='mainr'>
  <form>

    <label htmlFor="autor-imput">Autor</label>
    <input type="text" placeholder='Nombre del autor' onChange={(e) => setAutor(e.target.value)} required >
    </input>

    <label htmlFor="titulo-imput">Título</label>
    <input type="text" placeholder='Escribir título' required onChange={(e) => setTitulo(e.target.value)}/>

    <label htmlFor="edicion-imput">Edición</label>
    <input type="text" placeholder='Escribir edición' required onChange={(e) => setEdicion(e.target.value)}/>

    <label htmlFor="fecha_de_publicacion-imput">Fecha de publicación</label>
    <input type="date" placeholder='Añadir fecha' min="1500-01-01" required onChange={(e) => setFecha_de_publicacion(e.target.value)}/>

    <label htmlFor="tipo_de_contenido-imput">Tipo de contenido</label>
    <select required onChange={(e) => setTipo_de_contenido(e.target.value)}>
    <optgroup label="Elije una opción">
      <option value="Científico">Científico</option>
      <option value="Literatura y lingüística">Literatura y lingüística</option>
      <option value="De viaje">De viaje</option>
      <option value="Biografías">Biografías</option>
      <option value="Libro de texto">Libro de texto</option>
      <option value="Libros de gran formato (coffee table book)">Libros de gran formato (coffee table book)</option>
      <option value="De referencia o consulta">De referencia o consulta</option>
      <option value="Monografía">Monografía</option>
      <option value="Recreativo">Recreativo</option>
      <option value="Poético">Poético</option>
      <option value="Juvenil">Juvenil</option>
      <option value="Ficción">Ficción</option>
      <option value="Comedia">Comedia</option>
      </optgroup>
    </select>

    <label htmlFor="restricciones-imput">Restricciones</label>
    <input type="text" placeholder='Restricciones' required onChange={(e) => setRestricciones(e.target.value)}/>

    <label htmlFor="materia-imput">Materia</label>
    <select required onChange={(e) => setMateria(e.target.value)}>
    <optgroup label="Elije una opción">
      <option value="Materia(1)">Materia(1)</option>
      <option value="Materia(2)">Materia(2)</option>
      <option value="Materia(n)">Materia(n)</option>
      </optgroup>
    </select>
   
    <label htmlFor="proveedor-imput">Proveedor</label>
    <input type="text" placeholder='Nombre del Proveedor' required onChange={(e) => setProveedor(e.target.value)}/>


    <button onClick={(e) => accionRegistar(e)} type='submit'>Registar</button>

  </form>
</div>


  )
}


export default Registro