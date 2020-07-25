import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.png';

export default function NovoAtendimento(){
    const [descricao, setDescricao] = useState('');
    const clienteCpf = localStorage.getItem('clienteCpf');
    const history = useHistory();
    async function handleNovoAtendimento(e){
        e.preventDefault();
        const data = {
            descricao,
            clienteCpf
        }
        try {
            await api.post('atendimentos', data, {
                headers: {
                    Authorization: clienteCpf,
                }
            })
            history.push('/profile');
        } catch (err) {
            alert('erro ao cadastrar atendimento');
        }
    }

    return (
        <div className="novo-atendimento-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BeOmni"/>
                    <h1>Fazer novo atendimento</h1>
                    <p>Diga detalahdamente qual é sua necessidade que vamos resolver.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowDownLeft size={16} colo="#e02041" />
                        Voltar p/ início
                    </Link>
                </section>
                <form onSubmit={handleNovoAtendimento}>
                    <textarea 
                        placeholder="Descreva detalhadamente seu caso" 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        />

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}