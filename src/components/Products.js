import { useDispatch, useSelector } from "react-redux";
import { AddProduct, fetchAllProducts } from "../redux/actions/product-action";
import { useEffect } from "react";

export default function Products() {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      <h1>products</h1>
      <div style={{ display: "grid", gridColumn: 4, gap: 43 }}>
        {data.map((item) => (
          <div key={item.id}>
            <h5>{item.title}</h5>
            <img src={item.image} width={180} height={180} />
          </div>
        ))}
      </div>
      <button
        onClick={() => dispatch(AddProduct({ id: 4, title: "product-44" }))}
      >
        Add product
      </button>
    </div>
  );
}
