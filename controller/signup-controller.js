import express from "express";
const router = express.Router();
import signupServices from '../service/signup-service.js'
import loginService from "../service/login-service.js";


router.post('/signup', async (req, res) => {
    let user = req.body
    try {
        await signupServices.createUser(user);
        await loginService.login(user.email, user.password)
        /*res.status(200).send()*/
    } catch (e) {
        console.error(e)
        res.status(500).send('An error occurred during user sign up')
    }

})


export default router