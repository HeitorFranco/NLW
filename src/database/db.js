const Sequelize = require("sequelize").Sequelize


const sequelize = new Sequelize('bj58a7x5z8rj8pvtvclt', 'uzlp7o19m5p6fk5b', '3gJdFKbz3tw0BlU2rFy3', {
    host: 'bj58a7x5z8rj8pvtvclt-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});
/*const sequelize = new Sequelize('pontosdecoleta', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});*/
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