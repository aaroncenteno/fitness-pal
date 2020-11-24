// import Model class and DataTypes object from Sequelize to create our models from 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weight extends Model { }

Weight.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: true,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'weight'
    }
)

// export the newly created model so we can use it in other parts of the app
module.exports = Weight;