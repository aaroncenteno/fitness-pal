// the Buddy model is for the through table required to link a User to another User as a Buddy

// import Model class and DataTypes object from Sequelize to create our models from 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Buddy extends Model { }

Buddy.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        buddy_id: {
            type: DataTypes.STRING,
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
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'buddy'
    }

)

// export the newly created model so we can use it in other parts of the app
module.exports = Buddy;