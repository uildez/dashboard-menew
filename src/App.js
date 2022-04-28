import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import Logout from './Components/Logout/Logout'
import { useEffect, useState } from 'react';
import { login } from './features/userSlice';
import { Redirect } from 'react-router-dom';

import { auth } from './firebase';
import './Components/Login/login.scss';
import { ReactComponent as Logo } from './assets/images/menew-logo.svg';

function App(children) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    isRegister ? handleLogin() : handleRegister()
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          id: authUser.uid,
          name: authUser.displayName ? authUser.displayName : authUser.email,
          pic: authUser.photoURL ? authUser.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }));
        return <Redirect to = "/dashboard"/>
      } else {
        dispatch(logout(children))
      }
    })
  }, [])

  const handleLogin = () => {
    if (email && password !== "") {
      auth.signInWithEmailAndPassword(email, password).then((data) => alert('Logado com sucesso')).catch((err) => alert((err)));
    }
  };

  const handleRegister = () => {
    if (email && password !== "") {
      auth.createUserWithEmailAndPassword(email, password).then((data) => alert('Registrado com sucesso')).catch((err) => alert((err)));
    }
  };

  return (
    <div className='App'>
      {""}
      {user ?
        <Logout/>
        :
        <section className='section-bg'>
          <div className='login'>
            <div className='login_logo'>
              <Logo />
            </div>
            {isRegister ?
              <>
                <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
                  <h2>Acesso</h2>
                  <input type="email" placeholder="Seu Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <input type="password" placeholder="Sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="submit" className='submit__btn'>{isRegister ? "Entrar" : "Finalizar"}</button>
                </form>
              </> :
              <>
                <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
                  <h2>Cadastro</h2>
                  <input type="email" placeholder="Seu Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <input type="password" placeholder="Sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="submit" className='submit__btn'>{isRegister ? "Entrar" : "Finalizar"}</button>
                </form>
              </>
            }
            <p className='register-text'> {isRegister ? "Não tem cadastro? " : "Já tem cadastro? "}
              <span onClick={() => setIsRegister((show) => !show)}>{isRegister ? "Realize o seu aqui" : "Faça seu login"}</span>
            </p>
          </div>
        </section>}
    </div>
  );
}

export default App;
