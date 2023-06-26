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


    async getDeviceByIdOrSerialNumber(isScan, idOrSerialNumber, userId) {
        try {
            let device = await deviceDao.findDeviceByIdOrSerialNumber(isScan, idOrSerialNumber, userId)
            return device
        } catch (e) {
            console.error(e)
            throw e
        }
    },

    async getDeviceById(id) {
        try {
            let device = await deviceDao.findDeviceById(id)
            return device
        } catch (e) {
            console.error(e)
            throw e
        }

    },

    async createDevice(device) {
        try {
            return await deviceDao.postDevice(device)
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
    },

    async updateDeviceQuantity(id, quantity) {
        try {
            await deviceDao.updateQuantity(id, quantity)
        } catch (e) {
            console.error(e)
            throw e
        }
    }
}