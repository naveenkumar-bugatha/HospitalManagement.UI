import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { useNavigate, Routes, Route } from 'react-router-dom';
import UserProvider from './contexts/userContext'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <UserProvider>
          <Routes>
            <Route path="/" element={ <Login navigate={navigate}/>}></Route>
            <Route path="/dashboard" element={ <Dashboard navigate={navigate}/>}></Route>
          </Routes>
      </UserProvider>
    </>
  );
}

export default App;
