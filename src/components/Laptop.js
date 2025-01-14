import { useDispatch, useSelector } from "react-redux";
import { buyLaptop } from "../redux/actions/laptop-actions";

export default function Laptop() {
  const data = useSelector((data) => data.laptop);
  console.log(data);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Laptop-{data}</h1>
      <div style={{ display: "flex", gap: 3 }}>
        <button onClick={() => dispatch(buyLaptop(2))}>buy Laptop </button>
      </div>
    </div>
  );
}
