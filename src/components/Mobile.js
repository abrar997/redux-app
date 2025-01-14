import { useDispatch, useSelector } from "react-redux";
import { buyMobile, refundMobile } from "../redux/actions/mobile-actions";

export default function Mobile() {
  const data = useSelector((data) => data.mobile);
  console.log(data);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>mobile-{data}</h1>
      <div style={{ display: "flex", gap: 3 }}>
        <button onClick={() => dispatch(buyMobile(2))}>buy mobile </button>
        <button onClick={() => dispatch(refundMobile(1))}>
          refund mobile{" "}
        </button>
      </div>
    </div>
  );
}
