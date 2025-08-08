import './i18n/i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './router'
import BasicLayout from './layouts/BasicLayout'
import { BrowserRouter as Router } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <BasicLayout>
          <AppRoutes />
        </BasicLayout>
      </Router>
    </QueryClientProvider>
  </StrictMode>
)
