import React from 'react'
import "./Home.css"
/*importamos link para poder usar las routas de App.js y usarla con los botones*/ 
import {Link} from "react-router-dom"



function Home() {
  return (
    <div className='main-container-home'>
      <h1>Imagen Here</h1>
{/*Botones Home*/} 

        <Link to={"/registro"}>
        <button>Registra un libro</button>
        </Link>

        <Link to={"/libreria"}>
        <button>Libreria</button>
        </Link>
        
    </div>
  )
}

export default Home