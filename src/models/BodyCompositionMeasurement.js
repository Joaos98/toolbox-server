function BodyCompositionMeasurementsSeq(sequelize, DataTypes) {
    sequelize.define('BodyCompositionMeasurements', {
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        bodyWeight: DataTypes.DECIMAL,
        bodyWater: DataTypes.DECIMAL,
        bodyFat: DataTypes.DECIMAL,
        muscleMass: DataTypes.DECIMAL
    })
}

export default BodyCompositionMeasurementsSeq