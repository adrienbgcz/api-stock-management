import deviceDao from "../dao/device-dao.js";

export default {

    async getDevices() {
        try {
            let devices = await deviceDao.findAllDevices()
            return devices
        } catch (e) {
            console.error(e)
            throw e
        }

    },

    async getDevice(id) {
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