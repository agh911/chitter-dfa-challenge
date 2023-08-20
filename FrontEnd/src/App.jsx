import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChitterHome } from './pages/ChitterHome.jsx';
import { SignInPage } from './pages/SignInPage.jsx';
import { SignUpPage } from './pages/SignUpPage.jsx';

import { checkSignIn } from './components/authentication/authenticationHelpers.js';

function App() {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = async ({ email, password }) => {
    setSignedIn(await checkSignIn({ email, password }));
  }

  return (
    <Routes>
      <Route path='/' element={<ChitterHome />} />
      <Route path='/signIn' element={<SignInPage handleSignIn={handleSignIn} />} />
      <Route path='/signUp' element={<SignUpPage />} />
    </Routes>
  )
}

export default App