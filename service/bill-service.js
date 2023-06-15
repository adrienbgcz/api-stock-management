import billDao from "../dao/bill-dao.js"

export default {

    async getBills() {
        try {
            let bill = await billDao.findAllBills()
            return bill
        } catch (e) {
            console.error(e)
            throw e
        }

    },

    async getBill(id) {
        try {
            let bill = await billDao.findBillById(id)
            return bill
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async createBill(bill) {
        let id = await billDao.postBill(bill.date)
        return id;
    },

    async updateBill(bill, id) {
        try {
            let billToUpdate = await billDao.putBill(id,bill.date)
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}










