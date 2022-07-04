import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { EuiProvider } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'

import Routes from './router'
import Header from './shared-components/header'

import theme from './theme.json'

function App () {
  return (
    <EuiProvider colorMode='light' modify={theme}>
      <Header />
      <BrowserRouter basename='/'>
        <Routes />
      </BrowserRouter>
    </EuiProvider>
  )
}

export default App
