
function UserSeq(sequelize, DataTypes) {
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })
}

export default UserSeq