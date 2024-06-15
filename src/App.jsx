import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import AppLAyout from "./ui/AppLayout";
import { loader as menuLoader } from "./features/menu/Menu";


const router = createBrowserRouter([
  {
    element: <AppLAyout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />
      },
      {
        path: '/order/:oderId',
        element: <Order />
      }
    ]
  }

])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
