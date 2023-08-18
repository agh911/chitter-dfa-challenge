import { Routes, Route } from 'react-router-dom';
import { ChitterHome } from './pages/ChitterHome.jsx';
import { SignInPage } from './pages/SignInPage.jsx';
import { SignUpPage } from './pages/SignUpPage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ChitterHome />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  )
}

export default App