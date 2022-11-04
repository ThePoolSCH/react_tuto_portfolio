import NavBar from './components/Navbar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from './components/pages/AboutUs'
import SignUp from './components/pages/SignUp'
import Services from './components/pages/Services'
import Home from './components/pages/Home'
import Footer from './components/Footer/Footer'

function App(){
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/aboutUs' exact element={<AboutUs/>}/>
        <Route path='/signUp' exact element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  )
}
export default App