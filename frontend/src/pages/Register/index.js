import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';
import axios from 'axios';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Register(){
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    useEffect(() =>{
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response =>{
            try {
                setRua(response.data.logradouro);
                setBairro(response.data.bairro);
                setCidade(response.data.localidade);
                setUf(response.data.uf);
                alert('Cep encontrado');
            } catch (err) {
                alert('cep inválido');
            }
        })
    }, [cep]);

    async function handleRegister(e){
        e.preventDefault();

        
        const data = {
            cpf,
            nome,
            email,
            cep,
            rua,
            bairro,
            cidade,
            uf,
        };

        try{
            const response = await api.post('clientes', data);
            alert(`Sua conta foi criada com sucesso, login: ${response.data.cpf}`);
            history.push('/');
        } catch(err){
            alert('Erro no cadastro, tente novamente');
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BeOmni"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e receba atendimento por qualquer canal de comunicação.</p>
                    <Link className="back-link" to="/">
                        <FiArrowDownLeft size={16} colo="#e02041" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        required
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        />
                    <input
                        required
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        />
                    <input type="email" 
                        required
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    <input 
                            required
                            placeholder="CEP"
                            id="cep" 
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                        />
                    <div className="input-group">
                        <input 
                        required
                            placeholder="Rua"
                            id="rua"
                            value={rua}
                            onChange={e => setRua(e.target.value)}
                            />
                        <input 
                        required
                            placeholder="Bairro" 
                            id="bairro"
                            value={bairro}
                            onChange={e => setBairro(e.target.value)}
                            />
                    </div>
                    <div className="input-group">
                        <input 
                        required
                            placeholder="Cidade"
                            id="cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                            />
                        <input 
                        required
                            placeholder="UF" 
                            id="uf"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            style={{ width: 80 }} />
                    </div>
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}