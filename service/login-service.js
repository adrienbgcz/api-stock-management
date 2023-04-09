import loginDao from "../dao/login-dao.js";

export default {
    async login(email, password) {
        try {
            const user =  await loginDao.findUser(email, password)
            return {
                userId: user.id,
                email: user.email,
                pseudo: user.pseudo,
            }
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}