import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import grupoImg from '../../assets/grupo.png';
import logoImg from '../../assets/logo.png';

export default function Logon(){
    const history = useHistory();
    const [cpf, setCpf] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { cpf });
            localStorage.setItem('clienteCpf', cpf);
            localStorage.setItem('clienteNome', response.data.nome);
            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente');
        }

    }


    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BeOmni" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu CPF" 
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} colo="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={grupoImg} alt="Grupo" />
        </div>
    );
}