import validator from 'express-validator'
const { body } = validator

export default {
    validationRules() {
        return [
            body().isArray().withMessage('Invalid array format')
        ]
    }
}























