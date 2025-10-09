import { createRoot } from 'react-dom/client'
import { Provider as UIProvider } from './components/ui/provider' // UIProvider
import { Provider } from 'react-redux' // reduxProvider
import { store } from "./redux/store"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <UIProvider>
      <App />
    </UIProvider>
  </Provider>
  
)
   