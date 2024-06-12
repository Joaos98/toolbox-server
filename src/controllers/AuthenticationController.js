import db from "../models/index.js"
import jwt from "jsonwebtoken"
import {authConfig} from "../config/config.js"

function jwtSignUser(user) {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, authConfig.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

const AuthenticationController = {
    async register(req, res) {
        try {
            const credentials = {
                email: req.body.email,
                password: req.body.password
            };
            const user = await db.User.create(credentials)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            let errorMessage = ""
            if (err.name === "SequelizeUniqueConstraintError") {
                errorMessage = "This email is already in use!"
            }
            res.status(400).send({
                error: errorMessage
            })
        }
    },
    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await db.User.findOne({
                where: {
                    email: email
                }
            })
            if (!user || await user.comparePassword(password)) {
                return res.status(403).send({
                    error: "Invalid login credentials"
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(403).send({
                error: "Something went wrong!"
            })
        }
    }
}

export default AuthenticationController

