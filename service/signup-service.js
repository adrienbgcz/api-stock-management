import signupDao from "../dao/signup-dao.js"

export default {

    async createUser(user) {
        try {
            let userToCreate = await signupDao.postUser(user)
        } catch (e) {
            console.error(e)
            throw e
        }
    },
}