
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import {HeaderComponent} from "./Components/Header/HeaderComponent.jsx";
import {FooterComponent} from "./Components/Footer/FooterComponent.jsx";

function App() {
  return (
      <>
        <HeaderComponent/>
          <FooterComponent/>
      </>
  )
}

export default App