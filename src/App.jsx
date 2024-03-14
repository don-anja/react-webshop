
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import {HeaderComponent} from "./Components/Header/HeaderComponent.jsx";
import {FooterComponent} from "./Components/Footer/FooterComponent.jsx";
import {BannerComponent} from "./Components/Banner/BannerComponent.jsx";
import {AppWrapperComponent} from "./Components/AppWrapper/AppWrapperComponent.jsx";
import './App.css'
import {Home} from "./Components/Home/Home.jsx";

function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppWrapperComponent/> }>
                    <Route index element={<Home/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App