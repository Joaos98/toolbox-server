import Promise from "bluebird"
import Bcryptjs from "bcryptjs"

const bcrypt = Promise.promisifyAll(Bcryptjs)

function hashPassword(user) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return;
    }
    return bcrypt.genSalt(SALT_FACTOR)
        .then(salt => bcrypt.hash(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}
function UserSeq(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })
    User.prototype.comparePassword = function (password) {
        return bcrypt.compare(password, this.password)
    }
    return User
}

export default UserSeq