import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FaCartPlus } from 'react-icons/fa';

const links = ["Hombre", "Mujer", "Infantil"];

export const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <img
          src={
            "http://coder.comnic.com.ar/img/logo-negro.svg"
          }
          className="navbar__logo"
          alt="logo"
        />
      </Link>
      <div className="navbar__nav">
        {links.map((elemento) => {
          return (
            <NavLink
              className={({isActive}) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")}
              to={`/category/${elemento.toLowerCase()}`}
              key={elemento}
            >
              {elemento}
            </NavLink>
          );
        })}
      </div>
      <div className="header__buttons">
        
        <Link to="/cart"><FaCartPlus className="carrito" /></Link>
      </div>
      {/*
       <Contador stock={10} onAdd={(cantidad)=>{
        haz algo con la cantidad
      }}/> 
      */}
    </header>
  );
};
