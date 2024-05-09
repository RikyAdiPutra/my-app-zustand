"use client";
import useCount from "./store/Count";

export default function Home() {
  const { count, increment, decrement } = useCount();
  return (
    <main className="h-screen flex justify-center">
      <div className="flex gap-4 items-center">
        <button
          onClick={increment}
          className="border-solid border-2 border-black px-6 bg-black text-white rounded-lg text-[20px] font-semibold"
        >
          +
        </button>
        <span className="font-bold text-[25px]">{count}</span>
        <button
          onClick={decrement}
          className="border-solid border-2 border-black px-6 bg-black text-white rounded-lg text-[20px] font-semibold"
        >
          -
        </button>
      </div>
    </main>
  );
}
