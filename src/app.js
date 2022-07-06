import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { EuiProvider, EuiSpacer } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'

import store from '@app/store'

import Routes from '@app/router'
import Header from '@app/shared-components/header'
import Footer from '@app/shared-components/footer'
import PageContent from '@app/shared-components/page-content'

import theme from './theme.json'

function App () {
  return (
    <Provider store={store}>
      <EuiProvider colorMode='light' modify={theme}>
        <Header />
        <PageContent>
          <BrowserRouter basename='/'>
            <Routes />
          </BrowserRouter>
          <EuiSpacer size='m' />
        </PageContent>
        <Footer />
      </EuiProvider>
    </Provider>
  )
}

export default App
