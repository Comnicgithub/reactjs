import Item from "./Item";

const ItemListContainer = () => {
    //TODO logica de peticiones

    return <div className="products">

    <Item 
    nombre="Ray-Ban" 
    categoria="Wayfarer" 
    tag="10 colores" 
    precio={`$${15000}`}  
    imagen="http://coder.comnic.com.ar/img/productos/1.jpg"
    />
    <Item 
    nombre="Ray-Ban" 
    categoria="Arles" 
    tag="10 colores" 
    precio={`$${15000}`} 
    imagen="http://coder.comnic.com.ar/img/productos/2.jpg"
    />
    <Item 
    nombre="Ray-Ban" 
    categoria="tunning" 
    tag="10 colores" 
    precio={`$${15000}`} 
    imagen="http://coder.comnic.com.ar/img/productos/3.jpg"
    />
    <Item 
    nombre="Ray-Ban" 
    categoria="famme" 
    tag="10 colores" 
    precio={`$${15000}`}  
    imagen="http://coder.comnic.com.ar/img/productos/4.jpg"
    />



</div>
}

export default ItemListContainer;
