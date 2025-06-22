import './i18n/i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BasicLayout from './layouts/BasicLayout/view'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BasicLayout>CONTENT</BasicLayout>
  </StrictMode>
)
