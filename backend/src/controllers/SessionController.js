const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { cpf } = request.body;

        const cliente = await connection('clientes')
            .where('cpf', cpf)
            .select('nome')
            .first();
        if(!cliente){
            return response.status(400).json({error: 'Você não possui cadastro'});
        }

        return response.json(cliente);
    }
}