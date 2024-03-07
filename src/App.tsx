import { useEffect, useState } from 'react'
import { ThemeController, Theme } from './_middlewares/Themes'
import GlobalStyle from './globalCss'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Base } from './_pages/Base'
import { Home } from './_pages/Home'
import { Reviews } from './_pages/Reviews'
import { Login } from './_pages/Authentication/Login'
import { SignUp } from './_pages/Authentication/SignUp'

function App() {
  const [theme, setTheme] = useState<Theme>(ThemeController.getTheme())

  useEffect(()=>{
    ThemeController.setDispatchTheme(setTheme)
  },[])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* //TODO: usar useRouterError para redirecionar a rota  */}
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/*" element={<h1>Em construção</h1>} />
                </Route>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="*" element={<h1>NotFound</h1>} />
            </Routes>
      </BrowserRouter>
    </ThemeProvider>
    )
}


export default App
