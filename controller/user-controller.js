import express from "express";
const router = express.Router();
import userServices from '../service/user-service.js'


router.get('/users/:id', async (req, res) => {
    let user = {}
    try {
        user = await userServices.getUser(req.params.id);
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(user);
})

router.post('/users', async (req, res) => {
    let user = {}
    try {
        user = await userServices.createUser(req.body);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})

/*router.put('/merchantsUsers/:id', async (req, res) => {
    let user = {}
    try {
        user = await userMerchantServices.updateUserMerchant(req.body, req.params.id);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})*/

export default router