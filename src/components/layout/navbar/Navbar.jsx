// import "./Navbar.css"
// // import logo from "./assets/images/logopb.png"

export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img
        src={logo}
        alt="logo"
        /> */}

      <img
        src="https://res.cloudinary.com/dnixufsko/image/upload//c_thumb,w_80/v1695835129/231396019_304500691462675_5388614809897967354_n_q0u1f1.jpg"
        alt="logo"
      />

      <ul>
        <li>Salsa picante</li>
        <li>Salsa barbacoa</li>
        <li>Salsa ketchup</li>
        <li>Salsa agridulce</li>
      </ul>
    </nav>
  );
};

// =======CLASE 4 COMPONENTES========

// export const Navbar = () => {
//   return (
//     <div>
//       <h4>Logo</h4>
//       <ul>
//         <li>Salsa 1</li>
//         <li>Salsa 2</li>
//         <li>Salsa 3</li>
//         <li>Salsa 4</li>
//       </ul>
//       {/* WIDGET CARRITO */}
//     </div>
//   );
// };
