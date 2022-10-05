
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { SignIn } from '../pages/sign-in/sign-in'
import { SignUp } from '../pages/sign-up/sign-up'

const PublicRoutes = (): JSX.Element => (
  <Routes>
    <Route path='*' element={<Navigate to='/' replace />} />
    <Route path='/' element={<Home />}></Route>
    <Route path='/sign-up' element={<SignUp />}></Route>
    <Route path='/sign-in' element={<SignIn />}></Route>
  </Routes>
)
export default PublicRoutes
