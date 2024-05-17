
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Campaigns from '../Pages/Campaigns'
import SignSucessfull from '../Pages/SignSucessfull'
import About from '../Pages/About'
import Faq from '../Pages/Faq'
import SignIn from '../Pages/SignIn'
import Register from '../Pages/Register'
import Petition from '../Pages/Petition'
import Blog from '../Pages/Blog'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/campaigns' element={<Campaigns />} />
      <Route path='/sign-sucessfull' element={<SignSucessfull />} />
      <Route path='/about' element={<About />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/petition' element={<Petition />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  )
}

export default Routers
