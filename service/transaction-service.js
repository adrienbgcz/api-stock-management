import transactionDao from "../dao/transaction-dao.js"
import deviceService from "./device-service.js";

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

    // transaction = [quantity, device_id, customer_id, bill_id]
    // transactions : Array of transactions => [[1,1,1,1],[2,2,1,2]]
    async createTransaction(transactions) {
        await Promise.all(transactions.map(async transaction => {
            const device = await deviceService.getDeviceById(transaction[1]);
            const quantityUpdated = device[0].stock_quantity - transaction[0];
            if(quantityUpdated >= 0) {
                await deviceService.updateDeviceQuantity(transaction[1], quantityUpdated)
            } else {
                throw new Error(`The stock quantity for the device ${transaction[1]} is ${device[0].stock_quantity}. Please choose an available quantity`);
            }
        }));
        return await transactionDao.postTransaction(transactions)
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








