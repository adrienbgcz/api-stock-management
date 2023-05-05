import express from "express";
import customerService from "../service/customer-service.js";
const router = express.Router();


router.get('/customers/:userId', async (req, res) => {
    let customers = []
    try {
        customers = await customerService.getCustomersByUser(req.params.userId);

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
    let customer = req.body
    try {
        await customerService.createCustomer(customer)
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