const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const clientes = await connection('clientes').select('*');
        return response.json(clientes);
    },

    async create(request, response){
        const {cpf, nome, email, cep, rua, bairro, cidade, uf} = request.body;
    
    await connection('clientes').insert({
        cpf,
        nome,
        email,
        cep,
        rua,
        bairro,
        cidade,
        uf,
    })

    return response.json({cpf});
    }
};