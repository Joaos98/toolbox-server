import {Sequelize, DataTypes} from "sequelize";
import {dbConfig} from "../config/config.js";
import UserSeq from "./User.js";

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    dbConfig.options
)

const db = {
    sequelize: sequelize,
    Sequelize: Sequelize
}

//Initializing Sequelize Models
UserSeq(sequelize, DataTypes)

//Inserting Sequelize Models in our db object
Object.entries(sequelize.models).forEach(model => {
    db[model[0]] = model[1]
})

export default db