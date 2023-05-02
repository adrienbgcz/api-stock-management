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
    },

    /*async findAllUsersMerchants() {
        let users = []
        try {
            const query = await db.query('SELECT * FROM user_merchant')
            users = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return users;
    },*/
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
    },
    /*async putUserMerchant(user, idUser) {
        const firstName = user.first_name
        const lastName = user.last_name
        const email = user.email
        const password = user.password

        try {
            const query = await db.query('UPDATE user_merchant SET first_name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5', [firstName, lastName, email, password, idUser])
        } catch(e) {
            console.error(e)
            throw e
        }
    }*/
}




