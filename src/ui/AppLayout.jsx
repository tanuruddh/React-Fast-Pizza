import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header.jsx"
import Loader from "./Loader.jsx";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    console.log(navigation.state)
    return (
        <div className="layout">
            {isLoading && <Loader />}
            <Header />
            <main>
                <h1>Content</h1>
                <Outlet />

            </main>
            <CartOverview />
        </div>
    )
}

export default AppLayout
