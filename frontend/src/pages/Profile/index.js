import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be Omni" />
                <span>Bem vindx, Raymison</span>
                
                <Link className="button" to="/atendimentos/novo">
                    Novo Atendimento
                </Link>

                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Histórico de Atendimentos</h1>
            <ul>
                <li>
                    <strong>Protocolo:</strong>
                    <p>73473473</p>
                    <strong>Descrição:</strong>
                    <p>Atendimento tal</p>
                </li>
                <li>
                    <strong>Protocolo:</strong>
                    <p>73473473</p>
                    <strong>Descrição:</strong>
                    <p>Atendimento tal</p>
                </li>
                <li>
                    <strong>Protocolo:</strong>
                    <p>73473473</p>
                    <strong>Descrição:</strong>
                    <p>Atendimento tal</p>
                </li>
                <li>
                    <strong>Protocolo:</strong>
                    <p>73473473</p>
                    <strong>Descrição:</strong>
                    <p>Atendimento tal</p>
                </li>
            </ul>
        </div>
    );
}