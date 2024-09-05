import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice"

function DeleteItem({ Id }) {
    const dispatch = useDispatch()

    function handleDeleteItem() {
        dispatch(deleteItem(Id))
    }

    return (
        <div>
            <Button type="small" onClick={handleDeleteItem}>Delete</Button>
        </div>
    )
}

export default DeleteItem
