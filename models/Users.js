module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        whatsapp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        country: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Users;
};
