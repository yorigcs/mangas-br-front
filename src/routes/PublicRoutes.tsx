
import { Routes, Route, Navigate } from 'react-router-dom'
import { Chapter } from '../pages/chapter/Chapter'
import { Home } from '../pages/home/Home'
import { Manga } from '../pages/manga/Manga'
import { SignIn } from '../pages/sign-in/SignIn'
import { SignUp } from '../pages/sign-up/SignUp'

const PublicRoutes = (): JSX.Element => (
  <Routes>
    <Route path='*' element={<Navigate to='/' replace />} />
    <Route path='/' element={<Home />}></Route>
    <Route path='/mangas/:mangaName' element={<Manga />} />
    <Route path='/mangas/:mangaName/:chapterId' element={<Chapter />}/>
    <Route path='/sign-up' element={<SignUp />}></Route>
    <Route path='/sign-in' element={<SignIn />}></Route>
  </Routes>
)
export default PublicRoutes
