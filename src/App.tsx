import { Login } from './pages/login/login';
import { useNavigate, Routes, Route } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <>
        <Routes>
          <Route path="/" element={ <Login navigate={navigate}/>}></Route>
        </Routes>
    </>
  );
}

export default App;
