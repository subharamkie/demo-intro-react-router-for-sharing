import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout:React.FC =() =>{
    return (<>
        <Header/>
            <main className='p-6'>
                <Outlet/>
            </main>
        <Footer/>
    </>
    )
}
export default MainLayout;
