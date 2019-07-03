'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PizzanSchema extends Schema {
  up () {
    this.create('pizzans', (table) => {
      table.increments()
      table.string('name')
      table.integer('precio1')
      table.integer('precio2')
      table.integer('precio3')
      table.string('ingredientes')
      table.string('imagen')
      table.boolean('visible')
      table.integer('user_id').unsigned().references('id').inTable('users'); /*llave foranea*/
      table.timestamps()
    })
  }

  down () {
    this.drop('pizzans')
  }
}

module.exports = PizzanSchema
