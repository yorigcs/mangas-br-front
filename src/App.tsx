import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { GlobalStyles } from './assets/styles/global'
import { colors } from './assets/styles/colors'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './contexts/auth'

const theme = {
  colors
}
const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>

  )
}

export default App
