import BillDao from "../dao/bill-dao.js";
import BillService from "../service/bill-service.js";
const id = 1
const billDate = {date: new Date(Date.now())}

describe("Bill service", function () {

    it("should return a bill id after bill creation", async () => {
        mockPostBill(() => mockSendBillInDb(id))

        const idNewBill = await BillService.createBill(billDate)

        expect(BillDao.postBill).toHaveBeenCalled()
        expect(idNewBill).toEqual(1)
    })


})

function mockPostBill(postBillCallback) {
    spyOn(BillDao, "postBill").and.callFake(() => postBillCallback())
}

function mockSendBillInDb(sendBillInDbCallback = id) {
    return sendBillInDbCallback
}

/*function mockGetSecretValue() {
    spyOn(GcpSecrets, "getSecretValue").and.callFake(() => {})
}*/

/*
function mockCreateTrack(createEditIdCallback: any,
                         getServicesTrack: any,
                         commitEdit:any,
                         uploadApk:any = () => {},
                         updateTrack:any = () => {},
                         sendCloudTask:any = () => {},
                         sendEventStatusCallback:any = () => {}
) {
    spyOn(EditService, "create").and.callFake(() => createEditIdCallback());
    spyOn(AamTrackService, "getServicesTrack").and.callFake(() => getServicesTrack());
    spyOn(ApkService, "upload").and.callFake(() => uploadApk);
    spyOn(AamTrackService, "update").and.callFake(() => updateTrack);
    spyOn(EditService, "commit").and.callFake(() => commitEdit);
    spyOn(CloudTaskService, "sendTask").and.callFake(() => sendCloudTask);
    spyOn(PubsubPublisherService, "sendEventStatus").and.callFake(sendEventStatusCallback);
}
*/
