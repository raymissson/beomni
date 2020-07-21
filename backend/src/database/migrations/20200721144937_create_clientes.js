
exports.up = function(knex) {
  return knex.schema.createTable('clientes', function (table){
    table.string('cpf').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('cep').notNullable();
    table.string('rua').notNullable();
    table.string('bairro').notNullable();
    table.string('cidade').notNullable();
    table.string('uf').notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes');
};
