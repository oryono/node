import Sequelize from "sequelize";
import configJson from "../../config/config.json";
const env = process.env.NODE_ENV || "development";
const config = (<any>configJson)[env];

const sequelize = new Sequelize.Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

export default sequelize;
