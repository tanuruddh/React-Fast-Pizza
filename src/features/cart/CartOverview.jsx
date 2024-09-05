import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {

  const totalItem = useSelector(getTotalCartQuantity)
  const totalPrice = useSelector(getTotalCartPrice)

  if (!totalItem) {
    return null; // return empty cart overview if no items are in cart
  }
  // useE
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:py-6 md:text-base text-sm">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalItem} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
