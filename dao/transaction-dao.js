import db from "../utils/db.js";
import format from 'pg-format';
import deviceService from "../service/device-service.js";
import * as http from "http";

export default {
    async findTransactionById(id) {
        let transaction = []
        try {
            const query = await db.query('SELECT * FROM transaction WHERE id = $1', [id])
            transaction = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return transaction;
    },

    async findAllTransactions(){
        let transactions = []
        try{
            const query = await db.query('SELECT * from transaction')
            transactions = query.rows
        } catch(e) {
            console.error(e)
            throw e
        }
        return transactions
    },

    async findAllTransactionsByCustomer(id){
        let transactions = []
        try{
            const query = await db.query('SELECT * from transaction WHERE customer_id = $1', [id])
            transactions = query.rows
        } catch(e) {
            console.error(e)
            throw e
        }
        return transactions
    },

    async postTransaction(transactions) {
        await db.query(format(`INSERT INTO transaction (quantity, device_id, customer_id, bill_id) VALUES %L`, transactions), [])
    },


    async putTransaction(id, quantity, device_id, customer_id, bill_id){
        try{
            const query = await db.query('UPDATE transaction SET quantity = $1, device_id = $2, customer_id = $3, bill_id = $4 WHERE id = $5', [quantity, device_id, customer_id, bill_id, id])
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}