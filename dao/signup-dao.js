import db from '../utils/db.js'
import bcrypt from 'bcrypt'

export default {

    async postUser(user) {
        const email = user.email
        const pseudo = user.pseudo
        const password = await bcrypt.hash(user.password, 10)

        try {
            const query = await db.query('INSERT INTO "user" (email, password, pseudo) VALUES ($1, $2, $3)', [email, password, pseudo])
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}




