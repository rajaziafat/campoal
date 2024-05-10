import Bar from "../Components/Bar"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Routers from "../Routes/Routers"

function Layout() {
    return (
        <>
            <Bar  />
            <Navbar />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout
