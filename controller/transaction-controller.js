import express from "express";
import transactionService from "../service/transaction-service.js";
const router = express.Router();


router.get('/transactions', async (req, res) => {
    let transactions = []
    try {
        transactions = await transactionService.getTransactions();

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(transactions);
})


router.get('/transactions/:id', async (req, res) => {
    let transaction = {}
    try {
        transaction = await transactionService.getTransaction(req.params.id);
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(transaction);
})

router.get('/transactions/customer/:id', async (req, res) => {
    let transactions = []
    try{
        transactions = await transactionService.getTransactionByCustomerId(req.params.id);
    } catch (e) {
        console.error(e)
        throw e
    }
    res.json(transactions)
})

router.post('/transactions', async (req, res) => {
    try {
        console.log(req.body)
        const id = await transactionService.createTransaction(req.body);
        res.json(id)
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
})

router.put('/transactions/:id', async (req, res) => {
    let transaction = {}
    try {
        transaction = await transactionService.updateTransaction(req.body, req.params.id);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})

export default router