
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/home/home'

const UserRoutes = (): JSX.Element => (
  <Routes>
    <Route path='*' element={<Navigate to='/' replace />} />
    <Route path='/' element={<Home />}></Route>
  </Routes>
)
export default UserRoutes
