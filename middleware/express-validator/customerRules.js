/*const { body } = require("express-validator");*/
import validator from 'express-validator'
const { body } = validator

export default {
    validationRules() {
        return [
            body("company_name")
                .exists().withMessage("Company name is empty")
                .isLength({min: 2, max: 20}).withMessage("Company name contain between 2 and 20 characters")
                .matches(/^[a-zA-Z0-9éèàêïî ]{2,20}$/).withMessage("Invalid company name format"),
            body("siret")
                .exists().withMessage("Siret is empty")
                .isLength({min: 2, max: 20}).withMessage("Siret must contain between 2 and 20 characters")
                .matches(/^[a-zA-Z0-9éèàêïî ]{2,20}$/)
                .withMessage("Invalid serial number format"),
            body("phone_number")
                .exists().withMessage("Phone number is empty")
                .isLength({min: 10, max: 10}).withMessage("Phone number must contain 10 characters")
                .matches(/^[0-9]{10}$/)
                .withMessage("Invalid phone number format"),
            body("user_id")
                .exists().withMessage("User id is empty")
                .matches(/^[0-9]{1,8}$/)
                .withMessage("User id must be a number"),
        ]

    }

}





















