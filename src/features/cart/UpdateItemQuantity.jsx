import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice.js";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch();

    function handleIncrement() {
        dispatch(increaseItemQuantity(pizzaId))
    }
    function handleDecrement() {
        dispatch(decreaseItemQuantity(pizzaId))
    }
    return (
        <div className=" flex gap-1 items-center md:gap-3">
            <Button type="round" onClick={handleDecrement}>-</Button>
            <span>{currentQuantity}</span>
            <Button type="round" onClick={handleIncrement}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
