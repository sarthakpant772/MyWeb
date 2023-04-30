import { Box, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Aboutme from './component/Aboutme'
import ContactMe from './component/ContactMe'
import Experience from './component/Experience'
import HeroPage from './component/HeroPage'
import NavBar from './component/NavBar'
import PersonalProjects from './component/PersonalProjects'
import Skills from './component/Skills'

function App() {
  const theme = createTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff',
      },
      primary: {
        main: '#212428',
        light: '#16181B',
        contrastText: '#F9F7F7',
      },
      secondary: {
        main: '#DBE2EF',
        // light: '#F9C80E',
        light: '#F9F7F7',
        dark: '#F9C80E',
        contrastText: '#F9F7F7',
      },
    },
    typography: {
      fontFamily: 'Poppins, sans-serif',
      h2: {
        fontSize: '3.75rem',
      },
      subtitle1: {
        fontWeight: '600',
      },
    },
    button: {
      backgroundColor: '#112D4E',
      color: '#F9F7F7',
      '&:hover': {
        backgroundColor: '#3F72AF',
      },
    },
    input: {
      color: 'white',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Provider store={store}>
          <NavBar />
          <HeroPage />
          <Aboutme />
          <PersonalProjects />
          <Skills />
          <Experience />
          <ContactMe />
        </Provider>
      </Box>
    </ThemeProvider>
  )
}

export default App
