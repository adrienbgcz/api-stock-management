import express from "express";
const router = express.Router();
import loginServices from '../service/login-service.js'
import jwt from 'jsonwebtoken'
import loginRules from "../middleware/express-validator/loginRules.js";
import validator from "../middleware/express-validator/validator.js";



router.post('/login', loginRules.validationRules(), validator.validate, async (req, res) => {
    console.log("DB USER", process.env.DB_USER)
        console.log("DB HOST", process.env.DB_HOST)
        console.log("DB NAME", process.env.DB_NAME)
        console.log("DB PASSWORD", process.env.DB_PASSWORD)
        console.log("DB PORT", process.env.DB_PORT)
    try {
        let user = await loginServices.login(req.body.email, req.body.password);
        if(user === false) res.status(401).json({ message: 'Identifiants incorrects' })

        res.status(200).json({
            user,
            token: jwt.sign(
                { userId : user.id },
                process.env.ACCESS_TOKEN_SECRET || 'sqJm1mSnOI',
                { expiresIn: '12h' }
            )
        })
    } catch (e) {
        console.error(e)
        res.status(401).json({ message: 'Identifiants incorrects' })
    }

})

export default router