import pkg from 'pg';
const {Pool} = pkg

const db = new Pool({
    user : "enzoavlt_stock_management",
    host : "postgresql-enzoavlt.alwaysdata.net",
    database : "enzoavlt_stock_management",
    password : "flutterproject",
    port : 5432
})

export default db;











