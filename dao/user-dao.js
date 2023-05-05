import db from '../utils/db.js'
import bcrypt from 'bcrypt'

export default {
    async findUserById(id) {
        let user = []
        try {
            const query = await db.query('SELECT * FROM "user" WHERE id = $1', [id])
            user = query.rows[0];
        } catch(e) {
            console.error(e)
            throw e
        }
        return user;
    }
}




