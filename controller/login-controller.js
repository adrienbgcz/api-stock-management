import express from "express";
const router = express.Router();
import loginServices from '../service/login-service.js'
import jwt from 'jsonwebtoken'
import loginRules from "../middleware/express-validator/loginRules.js";
import validator from "../middleware/express-validator/validator.js";
import GcpSecrets from "../utils/gcp-secrets.js";
import userDao from "../dao/user-dao.js";
import userService from "../service/user-service.js";



/*router.post('/login', loginRules.validationRules(), validator.validate, async (req, res) => {
    try {
        let user = await loginServices.login(req.body.email, req.body.password);
        if(user === false) res.status(401).json({ message: 'Identifiants incorrects' })


        res.status(200).json({
            user,
            token: jwt.sign(
                { userId : user.id },
                await GcpSecrets.getSecretValue(process.env.SECRET_ACCESS_TOKEN),
                { expiresIn: '12h' }
            )
        })
    } catch (e) {
        console.error(e)
        res.status(401).json({ message: 'Identifiants incorrects' })
    }

})*/

router.post('/login', loginRules.validationRules(), validator.validate, async (req, res) => {
    try {
        let user = await loginServices.login(req.body.email, req.body.password);
        if(user === false) res.status(401).json({ message: 'Identifiants incorrects' })

        const token = jwt.sign(
            { userId : user.userId},
            await GcpSecrets.getSecretValue(process.env.SECRET_ACCESS_TOKEN),
            { expiresIn: '12h' }
        )
        /*await userService.saveToken(user.userId, token)*/
        res.status(200).json({ user,token })
    } catch (e) {
        console.error(e)
        res.status(401).json({ message: 'Identifiants incorrects' })
    }

})

export default router