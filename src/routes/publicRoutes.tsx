import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { SignIn } from '../pages/sign-in/sign-in'
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
    },
    {
      path: '/sign-in',
      element: <SignIn />
    }
  ]
)

export default router
