module.exports = (Sequelize) => {
    const sequelize = new Sequelize("RIS46", "ConnectionUser", "ConnectionUser", 
{
    dialect: "mssql",
    host: "localhost",
    port: 1433,
    
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
        acquire: 100000
    }
});

    const Model = require('./model')(Sequelize, sequelize);
    sequelize.sync({force:true});
    return {
        model: Model,
        sequelize,
        Sequelize
    }
};