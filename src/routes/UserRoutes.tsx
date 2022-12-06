
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Manga } from '../pages/manga/Manga'

const UserRoutes = (): JSX.Element => (
  <Routes>
    <Route path='*' element={<Navigate to='/' replace />} />
    <Route path='/mangas/:mangaName' element={<Manga />}></Route>
    <Route path='/' element={<Home />}></Route>
  </Routes>
)
export default UserRoutes
