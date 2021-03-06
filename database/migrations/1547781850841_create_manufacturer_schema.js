'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateManufacturerSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE manufacturer(
          PRIMARY KEY (id),
          id           INT UNSIGNED  NOT NULL AUTO_INCREMENT,
          name         VARCHAR(100)   NOT NULL,
          created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE manufacturer
      `)
  }
}

module.exports = CreateManufacturerSchema
