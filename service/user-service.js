import userMerchantDao from "../dao/user-merchant-dao.js"

export default {

    async getUserMerchant(id) {
        try {
            let user = await userMerchantDao.findUserMerchantById(id)
            return user
        } catch (e) {
            console.error(e)
            throw e
        }

    },


    async getUsersMerchants() {
        try {
            let users = await userMerchantDao.findAllUsersMerchants()
            return users
        } catch (e) {
            console.error(e)
            throw e
        }

    },

    async createUserMerchant(user) {
        try {
            let userToCreate = await userMerchantDao.postUserMerchant(user)
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async updateUserMerchant(user, id) {
        try {
            let userToUpdate = await userMerchantDao.putUserMerchant(user, id)
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}