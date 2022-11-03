import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import { ItemContainer } from "../components/ItemContainer";

export const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts(categoryId)
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [categoryId]);

  return (
    <>
    <img src="http://coder.comnic.com.ar/img/top-index4.jpg" alt="destacado gitano" class="imgtop"></img>
      <div className="content">
        <h4>
          Categoría <span style={{color: "orange", fontSize: "25px", fontWeight:"600"}}>{categoryId}</span>{" "}
        </h4>
      </div>
      <main className="content">
        <ItemContainer products={products} loading={loading} />
      </main>
    </>
  );
};
