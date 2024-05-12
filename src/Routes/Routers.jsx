
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Campaigns from '../Pages/Campaigns'
import SignSucessfull from '../Pages/SignSucessfull'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/campaigns' element={<Campaigns />} />
      <Route path='/Sign-Sucessfull' element={<SignSucessfull />} />







    </Routes>
  )
}

export default Routers
