
import { Routes, Route, Navigate } from 'react-router-dom'
import { Chapter } from '../pages/chapter/Chapter'
import { Home } from '../pages/home/Home'
import { Manga } from '../pages/manga/Manga'

const UserRoutes = (): JSX.Element => (
  <Routes>
    <Route path='*' element={<Navigate to='/' replace />} />
    <Route path='/' element={<Home />}></Route>
    <Route path='/mangas/:mangaName' element={<Manga />} />
    <Route path='/mangas/:mangaName/:chapterId' element={<Chapter />}/>
  </Routes>
)
export default UserRoutes
