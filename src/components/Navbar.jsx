import CartWidjet from "./CartWidget"

export const Navbar = () => {
    return <header className="header">
        <img src={"https://comnic.com.ar/coder/js/img/logo-negro.png"} className="header__logo" alt="logo" />
        <div className="">
                <ul class="navega">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">Marcas</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        <CartWidjet/>
    </header>
}
