import express from "express";
const router = express.Router();
import signupServices from '../service/signup-service.js'
import loginService from "../service/login-service.js";
import jwt from "jsonwebtoken";
import GcpSecrets from "../utils/gcp-secrets.js";
import signUpRules from "../middleware/express-validator/signUpRules.js";
import validator from "../middleware/express-validator/validator.js";


router.post('/signup', signUpRules.validationRules(), validator.validate, async (req, res) => {
    let userToCreate = req.body
    try {
        await signupServices.createUser(userToCreate);
        const user = await loginService.login(userToCreate.email, userToCreate.password)
        res.status(200).json({
            user,
            token: jwt.sign(
                { userId : user.userId },
                await GcpSecrets.getSecretValue(process.env.SECRET_ACCESS_TOKEN),
                { expiresIn: '12h' }
            )
        })
    } catch (e) {
        console.error(e)
        res.status(500).send('An error occurred during user sign up')
    }

})


export default router