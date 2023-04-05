import express from "express";
const router = express.Router();
import userMerchantServices from '../service/user-merchant-service.js'
import jwt from 'jsonwebtoken'

router.get('/merchantsUsers', async (req, res) => {
    let users = []
    try {
        users = await userMerchantServices.getUsersMerchants();

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(users);
})


router.get('/merchantsUsers/:id', async (req, res) => {
    let user = {}
    try {
        user = await userMerchantServices.getUserMerchant(req.params.id);

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(user);
})

router.post('/merchantsUsers', async (req, res) => {
    let user = {}
    try {
        user = await userMerchantServices.createUserMerchant(req.body);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})

router.put('/merchantsUsers/:id', async (req, res) => {
    let user = {}
    try {
        user = await userMerchantServices.updateUserMerchant(req.body, req.params.id);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})

export default router