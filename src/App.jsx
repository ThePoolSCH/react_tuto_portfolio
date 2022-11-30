import NavBar from './components/Navbar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from './components/pages/AboutUs'
import SignUp from './components/pages/SignUp'
import Services from './components/pages/Services'
import Home from './components/pages/Home'
import Footer from './components/Footer/Footer'
import NoteBlog from './components/pages/NoteBlog'
import WaterFootprint from './components/pages/WaterFootprint'
import EPS_Landing from './components/pages/EPS_Landing'
import BasicGame from './components/pages/BasicGame'
import HuellaPersonal from './components/pages/HuellaPersonal'


function App(){
  return (
    <BrowserRouter basename='/react_tuto_portfolio'>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/aboutUs' exact element={<AboutUs/>}/>
        <Route path='/signUp' exact element={<SignUp/>}/>
        <Route path='/noteBlog' exact element={<NoteBlog/>}/>
        <Route path='/waterFootprint' exact element={<WaterFootprint/>}/>
        <Route path='/epsLanding' exact element={<EPS_Landing/>}/>
        <Route path='/basicGame' exact element={<BasicGame/>}/>
        <Route path='/huellaPersonal' exact element={<HuellaPersonal/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App