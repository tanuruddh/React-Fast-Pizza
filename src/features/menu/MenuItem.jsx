import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { name, ingredients, soldOut, unitPrice, id, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id))

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? " opacity-70 grayscale" : ''}`} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className=" text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className=" mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{ }</p> : <p className=" text-sm font-medium uppercase text-stone-500">Sold out</p>}
          {!!currentQuantity && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem Id={id}>Add  to cart</DeleteItem>
            </div>
          )
          }
          {soldOut || !!currentQuantity || <Button onClick={handleAddToCart} type="small">Add  to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
