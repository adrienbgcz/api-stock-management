/*const { body } = require("express-validator");*/
import validator from 'express-validator'
const { body } = validator

export default {
    validationRules() {
        return [
            body().exists().withMessage("Login is empty"),
            body().isArray().withMessage('Invalid array format'),
            body('*').isNumeric().withMessage('Array elements must be numbers'),
        ]

    }

}





















