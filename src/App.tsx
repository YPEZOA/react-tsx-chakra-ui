import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <div></div>
    </>
  )
}

export default App
