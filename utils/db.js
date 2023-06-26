import pkg from 'pg'
import GcpSecrets from '../utils/gcp-secrets.js'
const {Pool} = pkg

const db = new Pool({
    user : await GcpSecrets.getSecretValue("db_user"),
    host : await GcpSecrets.getSecretValue("db_host"),
    database : await GcpSecrets.getSecretValue("db_name"),
    password : await GcpSecrets.getSecretValue("db_password"),
    port : await GcpSecrets.getSecretValue("db_port")
})

export default db;











