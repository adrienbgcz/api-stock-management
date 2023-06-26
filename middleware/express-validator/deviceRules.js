/*const { body } = require("express-validator");*/
import validator from 'express-validator'
const { body } = validator

export default {
    validationRules() {
        return [
            body("name")
                .exists().withMessage("Name is empty")
                .isLength({min: 2, max: 20}).withMessage("Name must contain between 2 and 20 characters")
                .matches(/^[a-zA-Z0-9éèàêïî ]{2,20}$/).withMessage("Invalid name format"),
            body("serial_number")
                .exists().withMessage("Serial number is empty")
                .isLength({min: 2, max: 20}).withMessage("Serial number must contain between 2 and 20 characters")
                .matches(/^[a-zA-Z0-9éèàêïî ]{2,20}$/)
                .withMessage("Invalid serial number format"),
            body("price")
                .exists().withMessage("Price is empty")
                .isLength({min: 1, max: 20}).withMessage("Price must contain between 1 and 13 characters")
                .matches(/^[0-9]{1,10}(\.[0-9]{0,2})?$/)
                .withMessage("Invalid price format"),
            body("stock_quantity")
                .exists().withMessage("Stock quantity is empty")
                .isLength({min: 1, max: 10}).withMessage("Stock quantity must contain between 1 and 10 characters")
                .matches(/^[0-9]{1,10}$/)
                .withMessage("Stock quantity must be a number"),
            body("user_id")
                .exists().withMessage("User id is empty")
                .matches(/^[0-9]{1,8}$/)
                .withMessage("User id must be a number"),
        ]

    }

}





















