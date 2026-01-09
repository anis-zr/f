
import { Outlet } from "react-router-dom"
import Navbar from "../components/headers/Navbar"

const MainLayout = ()=> {
  return (
   <main className="dark:bg-black overflow-hidden">    
   <Navbar>Navbar</Navbar>
     <Outlet/>
     <footer>footer</footer>
     
    </main>

  )
}

export default MainLayout