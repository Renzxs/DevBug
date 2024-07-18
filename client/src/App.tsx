import LoginScreen from './pages/LoginScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterScreen from './pages/RegisterScreen';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginScreen />}></Route>
        <Route path='/user/sign-up' element={<RegisterScreen />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
