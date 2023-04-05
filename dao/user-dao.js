import db from '../connectionDb/db.js'
import bcrypt from 'bcrypt'

export default {
    async findUserMerchantById(id) {
        let user = []
        try {
            const query = await db.query('SELECT * FROM user_merchant WHERE id = $1', [id])
            user = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return user;
    },

    async findAllUsersMerchants() {
        let users = []
        try {
            const query = await db.query('SELECT * FROM user_merchant')
            users = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return users;
    },
    async postUserMerchant(user) {
        const firstName = user.first_name
        const lastName = user.last_name
        const email = user.email
        const password = await bcrypt.hash(user.password, 10)

        try {
            const query = await db.query('INSERT INTO user_merchant (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, password])
        } catch(e) {
            console.error(e)
            throw e
        }
    },
    async putUserMerchant(user, idUser) {
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
    }
}




