import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Banner } from "../components/Banner";
import { ItemContainer } from "../components/ItemContainer";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts()
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
    <img src="http://coder.comnic.com.ar/img/top-index.jpg" alt="destacado gitano" class="imgtop"></img>
      <Banner
        promocion="PAGA HASTA 12 CUOTAS SIN INTERÉS"
        boton="QUIERO SABER MÁS"
        onClick={() => console.log("click en quiero saber mas")}
      />
      <main className="content">
        <ItemContainer products={products} loading={loading} />
      </main>
      <Banner
        promocion="ENVÍOS GRATUITOS A TODO EL PAÍS"
        boton="IR A COMPRAR"
        onClick={() => console.log("click en ir a comprar")}
      />
    </>
  );
};