const {
  hostDb,
  portDb,
  postgresDb,
  postgresUser,
  postgresPassword
} = require('../config')

module.export = require('knex')({
  client: 'pg',
  connection: {
    host: hostDb,
    port: portDb,
    database: postgresDb,
    user: postgresUser,
    password: postgresPassword
  }
})
