/*const { body } = require("express-validator");*/
import validator from 'express-validator'
const { body } = validator

export default {
    validationRules() {
        return [
            body("date")
                .exists().withMessage("Date is empty")
                .isISO8601().withMessage("Date must be a string ISO 8601 date")
        ]
    }
}





















