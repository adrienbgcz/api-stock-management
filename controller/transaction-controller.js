import express from "express";
import transactionService from "../service/transaction-service.js";
import transactionRules from "../middleware/express-validator/transactionRules.js";
import validator from "../middleware/express-validator/validator.js";
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

router.post('/transactions', transactionRules.validationRules(), validator.validate, async (req, res) => {
    const transactions = req.body;
    transactions.forEach(transaction => {
        transaction.forEach(element => {
            if(isNaN(parseInt(element))) res.status(400).json({ error: 'Invalid transaction format.' })
        })
    })

    try {
        await transactionService.createTransaction(req.body);
        res.status(200).send()
    } catch(e) {
        console.error(e)
        res.status(400).json({ error: e.message || 'Internal server error.' })
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