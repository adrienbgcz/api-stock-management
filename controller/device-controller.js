import express from "express";
import deviceService from "../service/device-service.js";
const router = express.Router();


router.get('/devices', async (req, res) => {
    let devices = []
    try {
        devices = await deviceService.getDevices();

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(devices);
})


router.get('/devices/:idOrSerialNumber', async (req, res) => {
    let device = {}
    try {
        const isScan = req.query.scan;
        device = await deviceService.getDeviceByIdOrSerialNumber(isScan, req.params.idOrSerialNumber);

    } catch (e) {
        console.error(e)
        res.status(500).send('Internal server error')
    }
    res.json(device);
})







router.post('/devices', async (req, res) => {
    try {
        const id = await deviceService.createDevice(req.body);
        res.json(id)
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

export default router