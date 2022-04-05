import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './login.scss';
import { ReactComponent as Logo } from '../../assets/images/menew-logo.svg';

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name: name,
                email: email,
                cpf: cpf,
                loggedIn: true,
            })            
        );
    };

return (
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
                        <input type="text" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                        <button type="submit" className='submit__btn'>{isRegister ? "Finalizar" : "Entrar"}</button>
                    </form>                    
                </> :
                <>
                    <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
                        <h2>Cadastro</h2>
                        <input type="name" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder="Seu Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="text" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                        <button type="submit" className='submit__btn'>{isRegister ? "Entrar" : "Finalizar"}</button>
                    </form>
                </>
            }

            <p className='register-text'> {isRegister ? "Não tem cadastro? " : "Já tem cadastro? "}
                <span onClick={() => setIsRegister((show) => !show)}>{isRegister ? "Realize o seu aqui" : "Faça seu login"}</span>
            </p>
        </div>
    </section>
)
}

export default Login