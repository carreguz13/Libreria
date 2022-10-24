import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import libro from "../../../src/Assets/book.png"


function Home() {
  return (
    <div className='main-container-home'>
      <img src={libro} alt="" />

        <Link to={"/registro"}>
        <button className='b1'>Registra un libro</button>
        </Link>

        <Link to={"/libreria"}>
        <button className='b2'>Libreria</button>
        </Link>
        
    </div>
  )
}

export default Home