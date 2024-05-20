import db from "../models/index.js"

const AuthenticationController = {
    async register(req, res) {
        try {
            const credentials = {
                email: req.body.email,
                password: req.body.password
            };
            const user = await db.User.create(credentials)
            res.status(200).send(user.toJSON())
        } catch (err) {
            let errorMessage = ""
            if (err.name === "SequelizeUniqueConstraintError") {
                errorMessage = "This email is already in use!"
            }
            res.status(400).send({
                error: errorMessage
            })
        }
    }
}

export default AuthenticationController

