import transactionDao from "../dao/transaction-dao.js"

export default {

    async getTransactions() {
        try {
            let transactions = await transactionDao.findAllTransactions()
            return transactions
        } catch (e) {
            console.error(e)
            throw e
        }

    },

    async getTransaction(id) {
        try {
            let transaction = await transactionDao.findTransactionById(id)
            return transaction
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async getTransactionByCustomerId(id){
        try{
            let transactions = await transactionDao.findAllTransactionsByCustomer(id)
            return transactions
        } catch(e) {
            console.error(e)
            throw e
        }
    },

    async createTransaction(transactions) {
        try {
            let id = await transactionDao.postTransaction(transactions)
            return id;
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async updateTransaction(transaction, id) {
        try {
            let transactionToUpdate = await transactionDao.putTransaction(id,transaction.quantity,transaction.device_id,transaction.customer_id,transaction.bill_id)
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}