import Home from ".//componentes/HomePage/Home";
import Libreria from ".//componentes/LibreriaPage/LibrosLista";
import Editar from ".//componentes/EditarPage/Editar";
import Registro from ".//componentes/RegistrarPage/Registro";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/libreria" element={<Libreria></Libreria>}></Route>
       <Route path="/editar" element={<Editar></Editar>}></Route>
       <Route path="/registro" element={<Registro></Registro>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
