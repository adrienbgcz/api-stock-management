import deviceDao from "../dao/device-dao.js";

export default {

    async getDevicesByUser(userId) {
        try {
            let devices = await deviceDao.findAllDevicesByUser(userId)
            return devices
        } catch (e) {
            console.error(e)
            throw e
        }

    },


    async getDeviceByIdOrSerialNumber(isScan, idOrSerialNumber) {
        try {
            let device = await deviceDao.findDeviceByIdOrSerialNumber(isScan, idOrSerialNumber)
            return device
        } catch (e) {
            console.error(e)
            throw e
        }

    },

    async createDevice(device) {
        try {
            let id = await deviceDao.postDevice(device)
            return id;
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async updateDevice(device, id) {
        try {
            let deviceToUpdate = await deviceDao.putDevice(device, id)
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}