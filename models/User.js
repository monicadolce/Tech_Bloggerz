const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { canTreatArrayAsAnd } = require('sequelize/types/utils');

class User extends Model {
    checkPassword(loginPass) {
        return bcrypt.compareSync(loginPass, this.password);
    }
};

User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len:[8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
            beforeUpdate: async (updateUser) => {
                updateUser.password = await bcrypt.hash(updateUser.password, 10);
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;