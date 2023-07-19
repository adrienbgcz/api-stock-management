import db from '../utils/db.js'
import bcrypt from 'bcrypt'
import HttpError from 'http-errors'

export default {

    async postUser(user) {
        const email = user.email
        const pseudo = user.pseudo
        const password = await bcrypt.hash(user.password, 10)

        try {
            const isExistsUser = (await db.query('SELECT * from "user" WHERE email = $1', [email])).rowCount > 0
            if (!isExistsUser) {
                const query = await db.query('INSERT INTO "user" (email, password, pseudo) VALUES ($1, $2, $3)', [email, password, pseudo])
            } else {
                throw new HttpError (400, `Cette adresse email est déjà utilisée.`);
            }
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}




