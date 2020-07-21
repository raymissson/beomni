
exports.up = function(knex) {
    return knex.schema.createTable('atendimentos', function (table){
        table.increments();
        table.string('descricao').notNullable();
        
        table.string('cliente_cpf').notNullable();

        table.foreign('cliente_cpf').references('cpf').inTable('clientes');
      });
};

exports.down = function(knex) {
  return knex.dropTable('atendimentos');
};
