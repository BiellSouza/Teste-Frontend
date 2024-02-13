import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Topo from './Topo.jsx'
import Texto from './Texto.jsx'
import Rodape from './Rodape.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Topo />
    <Texto />
    <Rodape />
  </React.StrictMode>,
)
