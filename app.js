import express from "express";
const app = express();
const port = process.env.PORT || 3003;
import cors from "cors";

import customerEndpoint from "./controller/customer-controller.js";
import deviceEndpoint from "./controller/device-controller.js";
import billEndpoint from "./controller/bill-controller.js";
import transactionEndpoint from "./controller/transaction-controller.js";
import userEndpoint from "./controller/user-controller.js";
import loginEndpoint from "./controller/login-controller.js"
import auth from "./middleware/auth.js"


app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", loginEndpoint)
app.use("/", userEndpoint)
app.use('/', auth.authenticateToken)
app.use("/", customerEndpoint);
app.use("/", deviceEndpoint);
app.use("/", billEndpoint);
app.use("/", transactionEndpoint);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
