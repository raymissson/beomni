import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.png';

export default function NovoAtendimento(){
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
                <form>
                    <textarea placeholder="Descreva detalhadamente seu caso" />

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}