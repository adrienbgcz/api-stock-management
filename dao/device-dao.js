import db from "../connectionDb/db.js";


export default {


    async findAllDevices() {
        let devices = []
        try {
            const query = await db.query('SELECT * FROM device')
            devices = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return devices;
    },

    async findDeviceById(id) {
        let device = []
        try {
            const query = await db.query('SELECT * FROM device WHERE id = $1', [id])
            device = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return device;
    },

    async postDevice(device) {
        const name = device.name
        const price = device.price
        const stockQuantity = device.stock_quantity
        const serialNumber = device.serial_number
        const picture = device.picture

        try {
            const query = await db.query('INSERT INTO device (name, price, stock_quantity, serial_number, picture) VALUES ($1, $2, $3, $4, $5)', [name, price, stockQuantity, serialNumber, picture])
        } catch(e) {
            console.error(e)
            throw e
        }
    },
    async putDevice(device, idDevice) {
        const name = device.name
        const price = device.price
        const stockQuantity = device.stock_quantity
        const serialNumber = device.serial_number
        const picture = device.picture

        try {
            const query = await db.query('UPDATE device SET name = $1, price = $2, stock_quantity = $3, serial_number = $4, picture = $5 WHERE id = $6', [name, price, stockQuantity, serialNumber, picture, idDevice])
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}