import Header from "~/components/Layout/components/Header";
import SideBar from "./SideBar";

function DefaultLayout({children}){
    return (
        <div>
            <Header />
            <SideBar />
            <div className="content">{children}</div>
        </div>
    )
}

export default DefaultLayout;