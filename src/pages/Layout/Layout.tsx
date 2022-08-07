import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../../styles/layout.css"

const Layout = ({children}:{children:ReactNode})=>{
    return(
        <>  
            <header>
                <Header />
            </header>
            <main className="position-relative">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default Layout