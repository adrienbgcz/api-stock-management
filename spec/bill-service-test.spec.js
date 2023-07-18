import BillDao from "../dao/bill-dao.js";
import BillService from "../service/bill-service.js";

const id = 1
const billDate = {date: new Date(Date.now())}

function mockPostBill(postBillCallback) {
    spyOn(BillDao, "postBill").and.callFake(() => postBillCallback())
}
function mockSendBillInDb(sendBillInDbCallback) {
    return sendBillInDbCallback
}

describe("Bill service", function () {

    it("should return a bill id after bill creation", async () => {
        mockPostBill(() => mockSendBillInDb(id))

        const idNewBill = await BillService.createBill(billDate)

        expect(BillDao.postBill).toHaveBeenCalled()
        expect(idNewBill).toEqual(1)
    })
})

