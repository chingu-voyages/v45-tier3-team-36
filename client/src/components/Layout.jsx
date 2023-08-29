import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = () => {
    return (
        <div>
            <header>
            <NavBar />
            </header>

            <main>
            <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout