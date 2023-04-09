import express from "express";
const router = express.Router();
import loginServices from '../service/login-service.js'
import jwt from 'jsonwebtoken'



router.post('/login', async (req, res) => {
    try {
        let user = await loginServices.login(req.body.email, req.body.password);
        if(user === false) res.status(401).json({ message: 'Identifiants incorrects' })
        res.status(200).json({
            user,
            token: jwt.sign(
                { userId : user.id },
                process.env.ACCESS_TOKEN_SECRET || 'sqJm1mSnOI',
                { expiresIn: '1h' }
            )
        })
    } catch (e) {
        console.error(e)
        res.status(401).json({ message: 'Identifiants incorrects' })
    }

})

export default router