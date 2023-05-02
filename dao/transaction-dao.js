import db from "../utils/db.js";
import format from 'pg-format';

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

    //GET A ARRAY OF ARRAY => [[1,true,1,1],[2,true,2,1]]
    async postTransaction(transactions){
        try{
            const query = await db.query(format(`INSERT INTO transaction (quantity, buying, device_id, customer_id, bill_id) VALUES %L`, transactions), [])
            // return query.rows[0].id
        } catch(e) {
            console.error(e)
            throw e
        }
    },

    async putTransaction(id, quantity, buying, device_id, customer_id, bill_id){
        try{
            const query = await db.query('UPDATE transaction SET quantity = $1, buying = $2, device_id = $3, customer_id = $4, bill_id = $5 WHERE id = $6', [quantity, buying, device_id, customer_id, bill_id, id])
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}