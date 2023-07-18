import pkg from 'pg'
import GcpSecrets from '../utils/gcp-secrets.js'
const {Pool} = pkg

const db = new Pool({
    user : await GcpSecrets.getSecretValue(process.env.DB_USER),
    host : await GcpSecrets.getSecretValue(process.env.DB_HOST),
    database : await GcpSecrets.getSecretValue(process.env.DB_NAME),
    password : await GcpSecrets.getSecretValue(process.env.DB_PASSWORD),
    port : await GcpSecrets.getSecretValue(process.env.DB_PORT)
})

export default db;











