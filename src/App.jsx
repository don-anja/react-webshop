import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Components/Header/Header.jsx";
import FooterComponent from "./Components/FooterComponent/FooterComponent.jsx";

function App() {

  return (
    <>
      <Header></Header>
        <MainComponent></MainComponent>
        <FooterComponent></FooterComponent>
    </>
  )
}

export default App
