const {
  BUNDLE_SRC,
  HOST_DB,
  PORT_DB,
  PORT_WEB,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_USER
} = process.env

module.exports = {
  bundleSrc: BUNDLE_SRC,
  portDb: PORT_DB,
  portWeb: PORT_WEB,
  hostDb: HOST_DB,
  databaseConn: `${HOST_DB}${PORT_DB}`,
  postgresDb: POSTGRES_DB,
  postgresPassword: POSTGRES_PASSWORD,
  postgresUser: POSTGRES_USER
}
