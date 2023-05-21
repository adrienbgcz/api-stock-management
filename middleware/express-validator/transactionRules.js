import validator from 'express-validator'
const { body } = validator

export default {
    validationRules() {
        console.log(body())
        return [
            body().isArray().withMessage('Invalid array format'),
        ]

    }

}





















