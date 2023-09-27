// export const Login = () => {
//   return <div>Login</div>;
// };

// import { useState } from "react";

// export const login = () => {
//   const [nombre, setNombre] = useState("pepe");

//   const changeName = () => {
//     setNombre("Juan");
//   };

//   return (
//     <div>
//       <h2>{nombre}</h2>
//       <button onClick={changeName}>Cambiar nombre</button>
//     </div>
//   );
// };

import { useState } from "react";

export const Login = () => {
  console.log("Se renderiza");
  // INICIALMENTE PEPE
  // LUEGO DE CAMBIAR EL NOMBRE
  // QUIERO QUE SE LLAME JUAN

  const [nombre, setNombre] = useState("pepe");

  const changeName = () => {
    setNombre("juan");
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};
