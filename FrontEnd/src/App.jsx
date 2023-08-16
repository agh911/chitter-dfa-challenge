import { Routes, Route } from 'react-router-dom';
import { ChitterHome } from './pages/ChitterHome.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ChitterHome />} />
    </Routes>
  )
}

export default App