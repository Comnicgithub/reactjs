import Icono from "./Cartwidget"

export const Navbar = () => {
    return <header className="header">
        <img src={"https://comnic.com.ar/coder/js/img/logo-negro.png"} className="header__logo" alt="logo" />
        <div className='header__nav'><h3>Hombre</h3><h3>Mujer</h3><h3>Niños</h3></div>
        <div className="header__buttons"><button>Carrito<Icono/></button></div>
        
    </header>
}
