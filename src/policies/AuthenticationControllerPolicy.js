import Joi from "joi";

const AuthenticationControllerPolicy = {
    register(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^(?=.*[A-Z])(?=.*[!@#$%&*])[A-Za-z\\d!@#$%&*]{8,32}')
            )
        })

        const {error, value} = schema.validate(req.body)
        if (error) {
            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'Please make sure the password provided matches the specified rules'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration credentials'
                    })
            }
        } else {
            next()
        }
    }
}

export default AuthenticationControllerPolicy