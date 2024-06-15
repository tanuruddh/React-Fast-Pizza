import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const data = useLoaderData();
  console.log(data);
  return <div>
    <h1>Menu</h1>
    <ul>
      {data.map((pizza) => {
        return (
          <div key={pizza.id}>
            <li >{pizza.name}</li>
            <img src={pizza.imageUrl} alt={pizza.name} />
            <p>{pizza.ingredients.join(", ")}</p>
            <p>{pizza.unitPrice}</p>
          </div>
        )
      })}
    </ul>
  </div>
}

export async function loader() {
  return await getMenu();
}

export default Menu;
