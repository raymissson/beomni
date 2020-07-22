import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import grupoImg from '../../assets/grupo.png';
import logoImg from '../../assets/logo.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BeOmni" />
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu CPF" />
                    <button type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} colo="#e02041" />
                        Não tenho cadastro</a>
                </form>
            </section>
            <img src={grupoImg} alt="Grupo" />
        </div>
    );
}