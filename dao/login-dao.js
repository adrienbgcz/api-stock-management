import db from "../utils/db.js";
import bcrypt from "bcrypt";

export default {
    async findUser(email, password) {
        let user = {}
        const query = await db.query('SELECT * FROM "user" WHERE email = $1', [email])
        user = query.rows[0];

        let isOkLogin = await bcrypt.compare(password, user?.password)
        return isOkLogin ? user : false
    }
}

