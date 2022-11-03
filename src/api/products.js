const products = [
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/1.jpg",
    id: 0,
    categoria: "hombre",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/2.jpg",
    id: 0,
    categoria: "hombre",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/3.jpg",
    id: 0,
    categoria: "hombre",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/4.jpg",
    id: 0,
    categoria: "hombre",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/5.jpg",
    id: 0,
    categoria: "infantil",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/6.jpg",
    id: 0,
    categoria: "infantil",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/7.jpg",
    id: 0,
    categoria: "infantil",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/8.jpg",
    id: 0,
    categoria: "infantil",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/9.jpg",
    id: 0,
    categoria: "mujer",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/10.jpg",
    id: 0,
    categoria: "mujer",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/11.jpg",
    id: 0,
    categoria: "mujer",
    stock: 10,
  },
  {
    nombre: "Anteojos Ray-Ban Wayfarer 4195M",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:"http://coder.comnic.com.ar/img/productos/12.jpg",
    id: 0,
    categoria: "mujer",
    stock: 10,
  },
];

export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
      ? products.filter((p) => p.categoria === categoria)
      : products;
    setTimeout(() => {
      res(response);
    }, 3000);
  });

export const getProduct = (productId) =>
  new Promise((res, rej) => {
    const response = products.find((product) => product.id == productId);
    setTimeout(() => {
      res(response);
    }, 3000);
  });
