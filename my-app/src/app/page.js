"use client";

import Image from "next/image";
import ItemProduct from "./components/ItemProduct";
import Cart from "./components/Cart";
import { useCount } from "./store/Count";
import Bear from "./components/Bear";
import Counter from "./components/Bear";

export default function Home() {
  // const { incrementCount } = useCount();
  return (
    <main>
      {/* <div className="flex gap-4 justify-center items-center">
        <ItemProduct />
        <Cart />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button onClick={incrementCount}>Increment</button>
      </div> */}
      <Counter />
    </main>
  );
}
