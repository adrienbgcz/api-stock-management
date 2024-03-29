import userDao from "../dao/user-dao.js"

export default {

    async getUser(id) {
        try {
            let user = await userDao.findUserById(id)
            return {
                userId: user.id,
                email: user.email,
                pseudo: user.pseudo,
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    /*async saveToken(userId, token) {
        try {
            await userDao.updateToken(userId, token)
        } catch (e) {
            console.error(e)
            throw e
        }
    }*/
}