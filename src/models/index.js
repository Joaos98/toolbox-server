import {Sequelize, DataTypes} from "sequelize";
import {dbConfig} from "../config/config.js";
import UserSeq from "./User.js";
import NoteSeq from "./Note.js";
import WorkoutSeq from "./Workout.js";

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
NoteSeq(sequelize, DataTypes)
WorkoutSeq(sequelize, DataTypes)

//Inserting Sequelize Models in our db object
Object.entries(sequelize.models).forEach(model => {
    db[model[0]] = model[1]
})
//Creating associations
db["User"].hasMany(db["Note"], {foreignKey: "userId"})
db["User"].hasMany(db["Workout"], {foreignKey: "userId"})
//db["Note"].belongsTo(db["User"])

export default db