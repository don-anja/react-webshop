
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import {AppWrapperComponent} from "./Components/AppWrapper/AppWrapperComponent.jsx";
import './App.css'
import {Home} from "./Components/Home/Home.jsx";
import {ContactComponent} from "./Components/Contact/Contact.jsx";
import {AboutUsComponent} from "./Components/AboutUs/AboutUsComponent.jsx";

function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppWrapperComponent/> }>
                    <Route index element={<Home/> }/>
                    <Route path="/contact" element={<ContactComponent/>}/>
                    <Route path="/aboutus" element={<AboutUsComponent/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App