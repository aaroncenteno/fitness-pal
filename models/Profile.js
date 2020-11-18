// the Profile model is for the through table required to link a User to their Profile

// import Model class and DataTypes object from Sequelize to create our models from 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model { }

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        height_ft: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true
            }
        },
        height_in: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true
            }
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true
            }
        },
        fitness_level: {
            type: DataTypes.STRING,
            allowNull: true
        },
        goal: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // goal_consistency: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
        // goal_getinshape: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
        // goal_health: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
        // goal_strength: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
        // goal_weightloss: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
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
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'profile'
    }
)

// export the newly created model so we can use it in other parts of the app
module.exports = Profile;