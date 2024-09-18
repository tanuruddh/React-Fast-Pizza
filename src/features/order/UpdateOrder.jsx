import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button.jsx"
import { updateOrder } from "../../services/apiRestaurant.js";


function UpdateOrder({ order }) {
    const fetcher = useFetcher();
    return (
        <fetcher.Form method="PATCH" className=" text-right">
            <Button type="primary">Mark priority</Button>
        </fetcher.Form>
    )
}

export default UpdateOrder

export async function action({ request, parmas }) {
    const data = { priority: true };
    await updateOrder(parmas.orderId, data)
    // console.log(data);
    return null;
    // return updated order data
}
