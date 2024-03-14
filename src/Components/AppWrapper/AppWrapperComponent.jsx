import {HeaderComponent} from "../Header/HeaderComponent.jsx";
import {FooterComponent} from "../Footer/FooterComponent.jsx";
import {Outlet} from "react-router-dom";

function AppWrapperComponent() {
    return(
        <>
        <HeaderComponent/>
            <Outlet/>
        <FooterComponent/>
        </>
    )
}

export {AppWrapperComponent}