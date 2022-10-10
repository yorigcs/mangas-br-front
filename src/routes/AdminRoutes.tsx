
import { Routes, Route, Navigate } from 'react-router-dom'
import { SystemManger } from '../pages/admin/SystemManager'
import { Home } from '../pages/home/Home'
import { Manga } from '../pages/manga/Manga'

const AdminRoutes = (): JSX.Element => (
  <Routes>
    <Route path='*' element={<Navigate to='/' replace />} />
    <Route path='/' element={<Home />}></Route>
    <Route path='/mangas/:mangaId' element={<Manga />}></Route>
    <Route path='/system-manager' element={<SystemManger />}></Route>
  </Routes>
)
export default AdminRoutes
