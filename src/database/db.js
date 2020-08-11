const Sequelize = require("sequelize").Sequelize


const sequelize = new Sequelize('db_ecoleta', 'heitormaf@187.84.225.36', 'y9#qjjS4KF3sSD2', {
    host: 'mysql669.umbler.com',
    dialect: 'mysql'
});
async function testConection() {
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConection()

module.exports = sequelize