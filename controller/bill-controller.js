import express from "express";
import billService from "../service/bill-service.js";
import billRules from "../middleware/express-validator/billRules.js";
import validator from "../middleware/express-validator/validator.js";
const router = express.Router();


router.get('/bills', async (req, res) => {
    let bills = []
    try {
        bills = await billService.getBills();

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(bills);
})


router.get('/bills/:id', async (req, res) => {
    let bill = {}
    try {
        bill = await billService.getBill(req.params.id);
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(bill);
})



router.post('/bills', billRules.validationRules(), validator.validate, async (req, res) => {
    try {
        const id = await billService.createBill(req.body);
        res.json(id)
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
})




router.put('/bills/:id', async (req, res) => {
    let bill = {}
    try {
        bill = await billService.updateBill(req.body, req.params.id);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})

export default router