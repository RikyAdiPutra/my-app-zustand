import useStore from "../store/Count";

const Cart = ({ children }) => {
  const { count } = useStore();
  return (
    <div className="relative">
      <spam className="absolute bg-red-400 w-[25px] h-[25px] text-center rounded-lg -top-3 -right-3 text-white">
        {count}
      </spam>
      {children}
    </div>
  );
};

export default Cart;
