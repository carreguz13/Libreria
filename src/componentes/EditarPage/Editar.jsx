import React, {useState, useEffect} from 'react'
import "./Editar.css" 
import Libros from 'C:/Users/carlos/Desktop/Proyecto-Libreria/libreria/src/componentes/Libros'
import {useNavigate} from "react-router-dom"



function Editar() {
/*aqui se ocupa hacer con todos */
  const[autor, setAutor] = useState("")
  const[id, setId] = useState("")

  let historial = useNavigate();

  var index = Libros.map(function(e){
    return e.id
  }).indexOf(id)

  const accionRegistar =(e) => {
    e.preventDefault()
    
    let a = Libros[index]
/*aqui se ocupa hacer con todos*/ 
    a.Autor = autor
    
    
    historial ("/libreria")
    }


useEffect (() =>{
     setAutor(localStorage.getItem("Name"))
     setId(localStorage.getItem("Id"))

},[])



  /*la forma se ocupa hacer con todos*/
  return (
    <div>
  <form action="">
    
    <label htmlFor=""></label>
    <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)}/>
    <button onClick={(e) => accionRegistar(e)} type='submit'>Actualizar</button>
  </form>
</div>
  )
}

export default Editar