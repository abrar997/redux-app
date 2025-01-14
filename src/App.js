import Laptop from "./components/Laptop";
import Mobile from "./components/Mobile";
import Products from "./components/Products";

export default function App() {
  return (
    <div style={{ padding: "12px 20px", fontSize: "32px" }}>
      <Mobile />
      <Laptop />
      <Products />
    </div>
  );
}
