import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { SignUp } from '../pages/sign-up/sign-up'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/sign-up',
      element: <SignUp />
    }
  ]
)

export default router
