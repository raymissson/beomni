const connection = require('../database/connection');

module.exports ={
    async index(request, response){
        const cliente_cpf = request.headers.authorization;

        const atendimentos = await connection('atendimentos')
            .where('cliente_cpf', cliente_cpf)
            .select('*');
        
        return response.json(atendimentos);
    }
}