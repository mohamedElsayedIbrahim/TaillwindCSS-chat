import { BrowserRouter, Route, Routes } from 'react-router'
import Base from './components/layout/Base'
import Chat from './components/chat/chat'

function App() {

  return <>

    <BrowserRouter>

      <Routes>

        <Route index element={<Chat />} />

      </Routes>
    </BrowserRouter>
  </>
}

export default App
