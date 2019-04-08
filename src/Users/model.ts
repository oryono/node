import sequelize from "../Database";
import Sequelize from "sequelize";
const Model = Sequelize.Model;

class User extends Model {}

User.init(
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [6, 128],
                    msg:
                        "Email address must be between 6 and 128 characters in length"
                },
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
        },

        name: {
            type: Sequelize.STRING,
            unique: true
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    { sequelize }
);

export default User;
