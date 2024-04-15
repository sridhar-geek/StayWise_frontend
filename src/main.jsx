import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
// Imports from another files
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
