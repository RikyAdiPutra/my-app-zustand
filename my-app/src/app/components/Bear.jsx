import { create } from "zustand";

import useStore from "../store/Count";
import ItemProduct from "./ItemProduct";
import Cart from "./Cart";

export default function Counter() {
  const { count, inc } = useStore();
  return (
    <div className="pt-10">
      {/* <div className="flex gap-4">
      </div> */}
      <ItemProduct />
      {/* <button onClick={inc}>one up</button> */}
    </div>
  );
}
