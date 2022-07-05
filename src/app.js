import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { EuiProvider, EuiSpacer } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'

import store from '@app/store'

import Routes from './router'
import Header from './shared-components/header'
import Footer from './shared-components/footer'

import theme from './theme.json'

function App () {
  return (
    <Provider store={store}>
      <EuiProvider colorMode='light' modify={theme}>
        <Header />
        <EuiSpacer size='s' />
        <BrowserRouter basename='/'>
          <Routes />
        </BrowserRouter>
        <EuiSpacer size='m' />
        <Footer />
      </EuiProvider>
    </Provider>
  )
}

export default App
