import express from "express";
import customerService from "../service/customer-service.js";
const router = express.Router();
import customerRules from "../middleware/express-validator/customerRules.js";
import validator from "../middleware/express-validator/validator.js";


router.get('/customers/user/:userId', async (req, res) => {
    let customers = []
    if(req.auth.userId.toString() !== req.params.userId.toString()) { res.status(401).json("Unauthorized") }

    try {
        customers = await customerService.getCustomersByUser(req.params.userId);
        res.json(customers);
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

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

router.post('/customers', customerRules.validationRules(), validator.validate, async (req, res) => {
    let customer = req.body
    if(req.auth.userId.toString() !== req.body.user_id.toString()) { res.status(401).json("Unauthorized") }
    try {
        const customerCreated = await customerService.createCustomer(customer)
        res.status(200).json({customerCreated})
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


router.get('/customers/:id/bills', async (req, res) => {
    let bills = []
    try {
        bills = await customerService.getAllBillsByCustomer(req.params.id);

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(bills);
})

router.get('/customers/:customerId/bills/:billId/transactions', async (req, res) => {
    let transactions = {}
    try {
        transactions = await customerService.getAllTransactionsByBillAndCustomer(req.params.customerId, req.params.billId);

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(transactions);
})

export default router