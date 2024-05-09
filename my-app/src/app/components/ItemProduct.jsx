"use client";

import useStore from "../store/Count";
import Image from "next/image";
import Cart from "./Cart";
import { BsCart4 } from "react-icons/bs";

const ItemProduct = () => {
  const { count, inc, dec } = useStore();
  return (
    <div className="flex justify-center gap-6 pt-6">
      <div className="p-6 bg-sky-200 max-w-fit rounded-lg">
        <div>
          <Image
            src={"/images/item-one.jpg"}
            width={201}
            height={251}
            alt="Jordan image.."
          />
          <div className="mt-4">
            <h1 className="font-bold text-[15px]">Air Jordan Blue Sky</h1>
            <p className="font-semibold text-[20px]">$ 124,51</p>
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={inc}
                className="font-bold bg-black text-white  rounded-lg text-[25px] w-[40px]"
              >
                +
              </button>
              <span className="text-[25px]">{count}</span>
              <button
                onClick={dec}
                className="font-bold bg-black text-white  rounded-lg text-[25px] w-[40px]"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cart>
        <BsCart4 size={30} />
      </Cart>
    </div>
  );
};

export default ItemProduct;
