import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { GlobalStyles } from './assets/styles/global'
const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
