import userDao from "../dao/user-dao.js"

export default {

    async getUser(id) {
        try {
            let user = await userDao.findUserById(id)
            console.log(user)
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


    /*async getUsersMerchants() {
        try {
            let users = await userDao.findAllUsersMerchants()
            return users
        } catch (e) {
            console.error(e)
            throw e
        }

    },*/

    async createUser(user) {
        try {
            let userToCreate = await userDao.postUser(user)
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    /*async updateUserMerchant(user, id) {
        try {
            let userToUpdate = await userMerchantDao.putUserMerchant(user, id)
        } catch (e) {
            console.error(e)
            throw e
        }
    }*/
}