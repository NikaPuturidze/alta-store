import './i18n/i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './router'
import BasicLayout from './layouts/BasicLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BasicLayout>
      <AppRoutes />
    </BasicLayout>
  </StrictMode>
)
