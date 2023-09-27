// import {Navbar} from "./Navbar"
// import { Footer } from "./Footer"
// import { Home } from "./Home"

// function App() {

//   let nombre = "naju"

//   const sumar = ()=>{
//     console.log("estoy sumando")
//   }

//   return (
//     <div>

//       {/* Acá va el navbar */}

//       {/* Navbar */}

//       <Navbar />

//       <Home />

//       <Footer />

//     </div>
//     );
// }

// export default App;

// ==============CLASE 4 COMPONENTES===============

// import EsteEsElhome from "./components/pages/home/Home"

// function App() {

//   return (
//     <div>
//     <EsteEsElhome />
//     </div>
//   );
// }

// export default App;

import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";
import { Navbar } from "./components/layout/navbar/Navbar";

function App() {
  let saludo = "Juan";

  return (
    <div>
      <Navbar />
      {/* <Home />
      <Login /> */}
      <ItemListContainer saludo={saludo} edad={30} x={true} />
    </div>
  );
}

export default App;
