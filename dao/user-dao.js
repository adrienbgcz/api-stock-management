import db from '../utils/db.js'


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

   /* async updateToken(userId, token){
        console.log(userId, token)
        try{
            await db.query('UPDATE "user" SET token = $1 WHERE id = $2 ', [token, userId])
        } catch(e) {
            console.log(e)
            throw e
        }
    }*/
}




