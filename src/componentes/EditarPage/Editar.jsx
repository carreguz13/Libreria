import React, {useState, useEffect} from 'react'
import "./Editar.css" 
import Libros from 'C:/Users/carlos/Desktop/Proyecto-Libreria/libreria/src/componentes/Libros'
import {useNavigate} from "react-router-dom"



function Editar() {

  const[autor, setAutor] = useState("")
  const[titulo, setTitulo] = useState("")
  const[edicion, setEdicion] = useState("")
  const[fecha_de_publicacion, setFecha_de_publicacion] = useState("")
  const[tipo_de_contenido, setTipo_de_contenido] = useState("")
  const[restricciones, setRestricciones] = useState("")
  const[materia, setMateria] = useState("")
  const[proveedor, setProveedor] = useState("")
  const[id, setId] = useState("")

  let historial = useNavigate();

  var index = Libros.map(function(e){
    return e.id
  }).indexOf(id)

  const accionRegistar =(e) => {
    e.preventDefault()
    
    let a = Libros[index]

    a.Autor = autor
    a.Titulo = titulo
    a.Edicion = edicion
    a.Fecha_de_publicacion = fecha_de_publicacion
    a.Tipo_de_contenido = tipo_de_contenido
    a.Restricciones = restricciones
    a.Materia = materia
    a.Proveedor = proveedor
    
    
    historial ("/libreria")
    }


useEffect (() =>{
     setAutor(localStorage.getItem("Autor"))
     setTitulo(localStorage.getItem("Titulo"))
     setEdicion(localStorage.getItem("Edicion"))
     setFecha_de_publicacion(localStorage.getItem("Fecha_de_publicacion"))
     setTipo_de_contenido(localStorage.getItem("Tipo_de_contenido"))
     setRestricciones(localStorage.getItem("Restricciones"))
     setMateria(localStorage.getItem("Materia"))
     setProveedor(localStorage.getItem("Proveedor"))
     setId(localStorage.getItem("Id"))

},[])



  
  return (
    <div className='mainr'>
  <form>

<label htmlFor="autor-imput">Autor</label>
<input type="text" placeholder='Nombre del autor' value={autor} required onChange={(e) => setAutor(e.target.value)}/>

<label htmlFor="titulo-imput">Título</label>
<input type="text" placeholder='Escribir título' value={titulo} required onChange={(e) => setTitulo(e.target.value)}/>

<label htmlFor="edicion-imput">Edición</label>
<input type="text" placeholder='Escribir edición' value={edicion} required onChange={(e) => setEdicion(e.target.value)}/>

<label htmlFor="fecha_de_publicacion-imput">Fecha de publicación</label>
<input type="date" placeholder='Añadir fecha' min="1500-01-01" value={fecha_de_publicacion} required onChange={(e) => setFecha_de_publicacion(e.target.value)}/>

<label htmlFor="tipo_de_contenido-imput">Tipo de contenido</label>
<select value={tipo_de_contenido} required onChange={(e) => setTipo_de_contenido(e.target.value)}>
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
<input type="text" placeholder='En caso de no tener restricciones, poner "NO"' value={restricciones} required onChange={(e) => setRestricciones(e.target.value)}/>

<label htmlFor="materia-imput">Materia</label>
<select value={materia} required onChange={(e) => setMateria(e.target.value)}>
<optgroup label="Elije una opción">
  <option value="Materia(1)">Materia(1)</option>
  <option value="Materia(2)">Materia(2)</option>
  <option value="Materia(n)">Materia(n)</option>
  </optgroup>
</select>

<label htmlFor="proveedor-imput">Proveedor</label>
<input type="text" placeholder='Nombre del Proveedor' value={proveedor} required onChange={(e) => setProveedor(e.target.value)}/>


<button onClick={(e) => accionRegistar(e)} type='submit'>Actualizar</button>

</form>
</div>
  )
}

export default Editar