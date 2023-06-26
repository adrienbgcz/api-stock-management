import signupDao from "../dao/signup-dao.js"

export default {

    async createUser(user) {
        try {
            await signupDao.postUser(user)
        } catch (e) {
            console.error(e)
            throw e
        }
    },
}