import './i18n/i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './router'
import BasicLayout from './layouts/BasicLayout'
import { BrowserRouter as Router } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <BasicLayout>
        <AppRoutes />
      </BasicLayout>
    </Router>
  </StrictMode>
)
