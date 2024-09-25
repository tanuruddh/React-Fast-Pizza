import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const data = useLoaderData();
  console.log("data in menu----", data);
  return <div>
    <h1>Menu</h1>
    <ul className=" divide-y divide-stone-200">
      {data.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>
  </div>
}

export async function loader() {
  const data = await getMenu();
  return data;
}

export default Menu;
