// import { BrowserRouter, Routes, Route } from 'react-router-dom' // Local host çalışıyor. Github, Netlify and Vercel de package.json'daki homepage: kısmı sorun çıkarıyor.
import { HashRouter, Routes, Route } from 'react-router-dom' // Github, Netlify and Vercel de package.json'daki homepage: kısmı sorun çıkarıyor. HashRouter ile çözülüyor. Github Pages deployments

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    // <BrowserRouter basename="/React-Project-Material-UI">
    // <BrowserRouter>
    <HashRouter>
    
        <Navbar />

        <Routes>

            <Route path= "/" element={<Home />}/>
            <Route path='/login' element = {<Login/>} />
            <Route path='/register' element = {<Register/>} />

            <Route element={<PrivateRouter />}>
                <Route path= "/courses" element={<Courses />}/>
            </Route>
        
        </Routes>
        
    </HashRouter>
    // </BrowserRouter>
  )
}

export default AppRouter