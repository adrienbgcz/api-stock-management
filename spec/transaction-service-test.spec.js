import DeviceService from "../service/device-service.js";

const mockDevice = [{
    stock_quantity: 3
}]

function mockUpdateDeviceQuantity(updateDeviceQuantityCallback) {
    spyOn(DeviceService, "updateDeviceQuantity").and.callFake(() => updateDeviceQuantityCallback())
}

function mockUpdateQuantity(updateQuantityCallback) {
    return updateQuantityCallback
}

describe("Transaction service", function () {

    it("should update device quantity if quantity asked is more important than quantity in stock", async () => {
        const transactions = [["1", "4", "62", "220"], ["1", "5", "62", "220"]]

        mockUpdateDeviceQuantity(() => mockUpdateQuantity())

        await Promise.all(transactions.map(async transaction => {
            const device = mockDevice
            const quantityUpdated = device[0].stock_quantity - transaction[0]
            if(quantityUpdated >= 0) {
                await DeviceService.updateDeviceQuantity(transaction[1], quantityUpdated)
                expect(DeviceService.updateDeviceQuantity).toHaveBeenCalled()
            } else {
                throw new Error(`The stock quantity for the device ${transaction[1]} is ${device[0].stock_quantity}. Please choose an available quantity`)
            }
        }))
    })

    it("should not update device quantity if quantity asked is less important than quantity in stock", async () => {
        const transactions = [["4", "4", "62", "220"], ["4", "5", "62", "220"]]

        mockUpdateDeviceQuantity(() => mockUpdateQuantity())

        await Promise.all(transactions.map(async transaction => {
            const device = mockDevice
            const quantityUpdated = device[0].stock_quantity - transaction[0];
            if(quantityUpdated >= 0) {
                await DeviceService.updateDeviceQuantity(transaction[1], quantityUpdated)
                expect(DeviceService.updateDeviceQuantity).not.toHaveBeenCalled()
            } else {
                console.error(`The stock quantity for the device ${transaction[1]} is ${device[0].stock_quantity}. Please choose an available quantity`)
            }
        }));
    })
})

