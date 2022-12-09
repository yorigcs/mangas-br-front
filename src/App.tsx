import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { GlobalStyles } from './assets/styles/global'
import { colors } from './assets/styles/colors'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './contexts/auth'
import { ChapterProvider } from './contexts/ChapterProvider'

const theme = {
  colors
}
const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ChapterProvider>
      <AuthProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      </ChapterProvider>
    </ThemeProvider>

  )
}

export default App
