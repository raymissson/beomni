const connection = require('../database/connection');

module.exports ={
    async index(request, response){
        const { page = 1 } = request.body;

        const [count] = await connection('atendimentos').count();

        const atendimentos = await connection('atendimentos')
            .join('clientes', 'cliente_cpf', '=', 'atendimentos.cliente_cpf')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        response.header('X-Total-Count', count['count(*)']);
        return response.json(atendimentos);
    },

    async create(request, response){
        const { descricao } = request.body;
        const cliente_cpf = request.headers.authorization;

        const [id] = await connection('atendimentos').insert({
            descricao,
            cliente_cpf
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const cliente_cpf = request.headers.authorization;

        const atendimentos = await connection('atendimentos')
            .where('id', id)
            .select('cliente_cpf')
            .first();
        if (atendimentos.cliente_cpf ==! cliente_cpf){
            return response.status(401).json({error: 'operação não permitida'});
        }
        await connection('atendimentos').where('id', id).delete();

        return response.status(204).send();
    }
};