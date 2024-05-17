import express from "express"

const authRoutes = express.Router()

authRoutes.post("/", (req, res) => {
    res.send(`The user ${req.body.email._value} was registered!`)
})


export default authRoutes