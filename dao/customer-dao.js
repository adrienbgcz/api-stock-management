import db from "../connectionDb/db.js";


export default {
    async findCustomerById(id) {
        let user = []
        try {
            const query = await db.query('SELECT * FROM customer WHERE id = $1', [id])
            user = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return user;
    },

    async findAllCustomers() {
        let customers = []
        try {
            const query = await db.query('SELECT * FROM customer')
            customers = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return customers;
    },
    async postCustomer(customer) {
        const companyName = customer.company_name
        const siret = customer.siret
        const phoneNumber = customer.phone_number

        try {
            const query = await db.query('INSERT INTO customer (company_name, siret, phone_number) VALUES ($1, $2, $3)', [companyName, siret, phoneNumber])
        } catch(e) {
            console.error(e)
            throw e
        }
    },
    async putCustomer(customer, idCustomer) {
        const companyName = customer.company_name
        const siret = customer.siret
        const phoneNumber = customer.phone_number

        try {
            const query = await db.query('UPDATE customer SET company_name = $1, siret = $2, phone_number = $3 WHERE id = $4', [companyName, siret, phoneNumber, idCustomer])
        } catch(e) {
            console.error(e)
            throw e
        }
    },

    async getAllBillsByCustomer(id) {
        let bills = []
        try {
            const query = await db.query('SELECT DISTINCT bill.id, bill.bill_date FROM transaction JOIN customer ON transaction.customer_id = customer.id JOIN bill ON bill.id = transaction.bill_id WHERE customer.id = $1', [id])
            bills = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return bills;
    },

    async getAllTransactionsByBillAndCustomer(customerId, billId) {
        let transactions = []

        try {
            const query = await db.query('SELECT device.name, device.price, transaction.quantity FROM transaction JOIN customer ON transaction.customer_id = customer.id JOIN bill ON bill.id = transaction.bill_id JOIN device ON device.id = transaction.device_id WHERE customer.id = $1 AND bill.id = $2', [customerId, billId])
            transactions = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return transactions;
    },
}