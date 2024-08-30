import React from 'react'
import ReactDOM from 'react-dom/client'
import Document from './components/Document/Document'
import CVContext, {data} from './store/cv-context'
import './styles/global.scss'

 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CVContext.Provider value={data}>
          <Document />
      </CVContext.Provider>
  </React.StrictMode>,
)
