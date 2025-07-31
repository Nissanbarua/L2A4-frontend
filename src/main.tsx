import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './features/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
          <Toaster richColors position="top-right" />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
