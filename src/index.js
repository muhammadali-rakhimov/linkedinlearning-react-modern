import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { configureStore } from './store.js'
import App from './App.js'

const store = configureStore()
const persistor = persistStore(store)

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>
)
