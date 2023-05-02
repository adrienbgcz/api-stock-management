/*const { body } = require("express-validator");*/
import validator from 'express-validator'
const { body } = validator

export default {
    validationRules() {
        return [
            body("email")
                .exists().withMessage("Login is empty")
                .isLength({min: 2, max: 65}).withMessage("Login must contain between 2 and 65 characters")
                .matches(/^[a-z0-9._\-]{2,30}@[a-z0-9]{2,30}\.[a-z]{2,4}$/).withMessage("Invalid adress format"),
            body("password")
                .exists().withMessage("Password is empty")
                .isLength({min: 2, max: 20}).withMessage("Password must contain between 8 and 20 characters")
                .matches(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&]).{8,20})$/)
                .withMessage("Password must contain between 8 and 20 characters, including 1 lowcase letter, 1 capital letter et 1 special character"),
        ]

    }

}





















