function UserMeasurementParametersSeq(sequelize, DataTypes) {
    sequelize.define('UserMeasurementParameters', {
        lowerBodyWeight: {type: DataTypes.DECIMAL, defaultValue: 0},
        higherBodyWeight: {type: DataTypes.DECIMAL, defaultValue: 0},
        lowerBodyWater: {type: DataTypes.DECIMAL, defaultValue: 0},
        higherBodyWater: {type: DataTypes.DECIMAL, defaultValue: 0},
        lowerBodyFat: {type: DataTypes.DECIMAL, defaultValue: 0},
        higherBodyFat: {type: DataTypes.DECIMAL, defaultValue: 0},
        lowerMuscleMass: {type: DataTypes.DECIMAL, defaultValue: 0},
        higherMuscleMass: {type: DataTypes.DECIMAL, defaultValue: 0},
    })
}

export default UserMeasurementParametersSeq