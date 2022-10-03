import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { GlobalStyles } from './assets/styles/global'
import { colors } from './assets/styles/colors'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors
}
const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <RouterProvider router={router} />
      </>
    </ThemeProvider>

  )
}

export default App
