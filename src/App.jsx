import { BrowserRouter, Route, Routes } from 'react-router'
import { PageHome } from './PageHome'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageHome />} path='/'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
