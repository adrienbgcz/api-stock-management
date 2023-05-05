import express from "express";
const router = express.Router();
import signupServices from '../service/signup-service.js'


router.post('/signup', async (req, res) => {
    let user = {}
    try {
        user = await signupServices.createUser(req.body);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})


export default router