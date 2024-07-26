function WorkoutSeq(sequelize, DataTypes) {
    sequelize.define('Workout', {
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        type: DataTypes.SMALLINT
    })
}

export default WorkoutSeq