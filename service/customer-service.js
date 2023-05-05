import customerDao from "../dao/customer-dao.js";

export default {

    async getCustomers() {
        try {
            let customers = await customerDao.findAllCustomers()
            return customers
        } catch (e) {
            console.error(e)
            throw e
        }

    },

    async getCustomer(id) {
        try {
            let customer = await customerDao.findCustomerById(id)
            return customer
        } catch (e) {
            console.error(e)
            throw e
        }

    },


    async createCustomer(customer) {
        try {
            await customerDao.postCustomer(customer)
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async updateCustomer(customer, id) {
        try {
            let customerToUpdate = await customerDao.putCustomer(customer, id)
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async getAllBillsByCustomer(id) {
        try {
            let bills = await customerDao.getAllBillsByCustomer(id)
            return bills
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async getAllTransactionsByBillAndCustomer(customerId, billId) {
        try {
            let bills = await customerDao.getAllTransactionsByBillAndCustomer(customerId, billId)
            return bills
        } catch (e) {
            console.error(e)
            throw e
        }

    }
}