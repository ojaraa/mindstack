import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"


const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-6 px-6">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default AppLayout