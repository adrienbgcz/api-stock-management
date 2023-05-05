import express from "express";
import deviceService from "../service/device-service.js";
import jwt from "jsonwebtoken";
import GcpSecrets from "../utils/gcp-secrets.js";
const router = express.Router();


router.get('/devices/user/:userId', async (req, res) => {

    let devices = []
    try {
        if(req.auth.userId.toString() === req.params.userId.toString()) {
            devices = await deviceService.getDevicesByUser(req.params.userId);
            res.json(devices);
        } else {
            res.status(401).json("Unauthorized")
        }
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})


router.get('/devices/:idOrSerialNumber/user/:userId', async (req, res) => {
    let device = {}

    try {
        if(req.auth.userId.toString() === req.params.userId.toString()) {
            const isScan = req.query.scan;
            device = await deviceService.getDeviceByIdOrSerialNumber(isScan, req.params.idOrSerialNumber, req.params.userId);
            res.json(device);
        } else {
            res.status(401).json("Unauthorized")
        }
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
})


router.post('/devices', async (req, res) => {
    const device = req.body
    try {
        const id = await deviceService.createDevice(device);
        res.status(200).json(id)
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
})

router.put('/devices/:id', async (req, res) => {
    let device = {}
    try {
        device = await deviceService.updateDevice(req.body, req.params.id);
        res.status(200).send()
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }

})

router.delete("/:id", async (req, res) => {
    try {
        await deviceService.delete(parseInt(req.params.id))
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
    res.status(200);
});

export default router