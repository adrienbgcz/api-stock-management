import pkg from 'pg'
import GcpSecrets from '../utils/gcp-secrets.js'
const {Pool} = pkg

/*const db = new Pool({
    user : GcpSecrets.getSecretValue(process.env.DB_USER),
    host : GcpSecrets.getSecretValue(process.env.DB_HOST),
    database : GcpSecrets.getSecretValue(process.env.DB_NAME),
    password : GcpSecrets.getSecretValue(process.env.DB_PASSWORD),
    port : GcpSecrets.getSecretValue(process.env.DB_PORT)
})*/

const db = new Pool({
    user : await GcpSecrets.getSecretValue("db_user"),
    host : await GcpSecrets.getSecretValue("db_host"),
    database : await GcpSecrets.getSecretValue("db_name"),
    password : await GcpSecrets.getSecretValue("db_password"),
    port : await GcpSecrets.getSecretValue("db_port")
})

/*const db = new Pool({
    user : "enzoavlt_stock_management",
    host : "postgresql-enzoavlt.alwaysdata.net",
    database : "enzoavlt_stock_management",
    password : "flutterproject",
    port : 5432
})*/

export default db;











