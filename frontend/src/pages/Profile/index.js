import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Profile(){
    const [atendimentos, setAtendimentos] = useState([]);
    const history = useHistory();
    const clienteNome = localStorage.getItem('clienteNome');
    const clienteCpf = localStorage.getItem('clienteCpf');
    useEffect(()=> {
        api.get('profile',{
            headers:{
                Authorization: clienteCpf,
            }
        }).then(response => {
            setAtendimentos(response.data);
        })
    }, [clienteCpf]);

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be Omni" />
                <span>Bem vindx, {clienteNome}</span>
                
                <Link className="button" to="/atendimentos/novo">
                    Novo Atendimento
                </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Histórico de Atendimentos</h1>
            <ul>
                {atendimentos.map(atendimento => (
                <li key={atendimento.id}>
                    <strong>Protocolo:</strong>
                    <p>{atendimento.id}</p>
                    <strong>Descrição:</strong>
                    <p>{atendimento.descricao}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}