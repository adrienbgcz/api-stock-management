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
            return user
        } catch (e) {
            console.error(e)
            throw e
        }

    },


    async createCustomer(customer) {
        try {
            let customerToCreate = await customerDao.postCustomer(customer)
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
    }
}