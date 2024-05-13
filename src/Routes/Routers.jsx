
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Campaigns from '../Pages/Campaigns'
import SignSucessfull from '../Pages/SignSucessfull'
import About from '../Pages/About'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/campaigns' element={<Campaigns />} />
      <Route path='/sign-sucessfull' element={<SignSucessfull />} />
      <Route path='/about' element={<About />} />

    </Routes>
  )
}

export default Routers
