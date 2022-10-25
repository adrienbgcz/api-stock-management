import express from 'express'
const app = express()
const port = 5000
import cors from  'cors'

import customerEndpoint from './controller/customer-controller.js'


app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.use('/', customerEndpoint)


app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});


