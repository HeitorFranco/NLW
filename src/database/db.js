const Sequelize = require("sequelize").Sequelize


const sequelize = new Sequelize('pontosdecoleta', 'root', '123456', {
    host: 'localhost',
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