import express from "express";
import customerService from "../service/customer-service.js";
const router = express.Router();


router.get('/customers', async (req, res) => {
    let customers = []
    try {
        customers = await customerService.getCustomers();

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(customers);
})


router.get('/customers/:id', async (req, res) => {
    let customer = {}
    try {
        customer = await customerService.getCustomer(req.params.id);

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(customer);
})

router.post('/customers', async (req, res) => {
    let customer = {}
    try {
        customer = await customerService.createCustomer(req.body);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})

router.put('/customers/:id', async (req, res) => {
    let customer = {}
    try {
        customer = await customerService.updateCustomer(req.body, req.params.id);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})

export default router