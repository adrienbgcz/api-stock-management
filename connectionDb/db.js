import pkg from 'pg';
const {Pool} = pkg

/*const db = new Pool({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT
})*/

const db = new Pool({
    user : "enzoavlt_stock_management",
    host : "postgresql-enzoavlt.alwaysdata.net",
    database : "enzoavlt_stock_management",
    password : "flutterproject",
    port : 5432
})

export default db;











