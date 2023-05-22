import db from "../utils/db.js";


export default {
    async findBillById(id) {
        let bill = []
        try {
            const query = await db.query('SELECT * FROM bill WHERE id = $1', [id])
            bill = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return bill;
    },

    async findAllBills(){
        let bills = []
        try{
            const query = await db.query('SELECT * from bill')
            bills = query.rows
        } catch(e) {
            console.error(e)
            throw e
        }
        return bills
    },

    async postBill(date){
        const query = await db.query('INSERT INTO bill (bill_date) VALUES ($1) RETURNING "id"', [date])
        return query.rows[0].id
    },



    async putBill(id,date){
        try{
            const query = await db.query('UPDATE bill SET bill_date = $1 WHERE id = $2', [date, id])
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}

