import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocaleProvider } from './locale'
import { SynergySite } from './SynergySite'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <SynergySite />
    </LocaleProvider>
  </StrictMode>,
)
