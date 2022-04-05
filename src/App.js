import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'

function App() {

  const user = useSelector(selectUser);

  return (
    <div className='App'>
      {user ?
        <Logout/> : <Login />}
    </div>
  );
}

export default App;
