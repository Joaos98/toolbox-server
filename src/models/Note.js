
function NoteSeq(sequelize, DataTypes) {
    sequelize.define('Note', {
        title: DataTypes.STRING,
        content: DataTypes.STRING
    })
}

export default NoteSeq