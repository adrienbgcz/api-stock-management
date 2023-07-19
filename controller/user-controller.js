import express from "express";
const router = express.Router();
import userServices from '../service/user-service.js'


router.get('/users/:id', async (req, res) => {
    if(!req.params.id || (req.auth.userId?.toString() !== req.params.id.toString())) { res.status(401).json("Unauthorized") }
    let user = {}
    try {
        user = await userServices.getUser(req.params.id);
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(user);
})

export default router