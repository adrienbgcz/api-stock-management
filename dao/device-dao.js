import { query } from "express";
import db from "../utils/db.js";


export default {


    async findAllDevicesByUser(userId) {
        let devices = []
        try {
            const query = await db.query('SELECT * FROM device WHERE user_id = $1', [userId])
            devices = query.rows;
        } catch(e) {
            console.error(e)
            throw e
        }
        return devices;
    },

    async findDeviceByIdOrSerialNumber(isScan, idOrSerialNumber, userId) {
        let device = []
        try {
            if(isScan === "true") {
                const query = await db.query('SELECT * FROM device WHERE serial_number = $1 AND user_id = $2', [idOrSerialNumber, userId])
                device = query.rows;
            } else {
                const query = await db.query('SELECT * FROM device WHERE id = $1 AND user_id = $2', [parseInt(idOrSerialNumber), userId])
                device = query.rows;
            }
        } catch(e) {
            console.error(e)
            throw e
        }
        return device;
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
        const userId = device.user_id

        try {
            const idNewProduct = await db.query('INSERT INTO device (name, price, stock_quantity, serial_number, picture, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id"', [name, price, stockQuantity, serialNumber, picture, userId])
            return {...device, id: idNewProduct.rows[0].id}
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
    },

    async updateQuantity(id, quantity) {
        const idDevice = id
        const stockQuantity = quantity

        console.log(quantity)
        console.log(id)
        try {
            await db.query('UPDATE device SET stock_quantity = $1  WHERE id = $2', [stockQuantity, idDevice])
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}