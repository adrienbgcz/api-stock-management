import express from 'express'
const app = express()
const port = 3000
import cors from  'cors'

import customerEndpoint from './controller/customer-controller.js'
import deviceEndpoint from './controller/device-controller.js'

var corsOptions = {
    origin: "https://flutter-stock-management.herokuapp.com:3000"
};

app.use(cors(corsOptions));

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.use('/', customerEndpoint)
app.use('/', deviceEndpoint)


app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});


