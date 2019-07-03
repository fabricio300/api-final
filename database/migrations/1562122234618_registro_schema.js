'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistroSchema extends Schema {
  up () {
    this.create('registros', (table) => {
      table.increments()
      table.string('nameclient')
      table.integer('monto')
      table.string('correo')
      table.string('tokenpago')
      table.string('namepizza')
      table.integer('cantidad')
      table.string('tamanio')
      table.string('statuspizza')
      table.timestamps()
    })
  }

  down () {
    this.drop('registros')
  }
}

module.exports = RegistroSchema
