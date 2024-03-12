
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import {HeaderComponent} from "./Components/Header/HeaderComponent.jsx";
import {FooterComponent} from "./Components/Footer/FooterComponent.jsx";
import {BannerComponent} from "./Components/Banner/BannerComponent.jsx";

function App() {
  return (
      <>
        <HeaderComponent/>
          <BannerComponent/>
          <FooterComponent/>
      </>
  )
}

export default App