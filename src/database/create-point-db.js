const Sequelize = require("sequelize")
const sequelize = require("./db");

const point = sequelize.define("pontos", {
    nome: {
        type: Sequelize.STRING
    },
    endereço: {
        type: Sequelize.STRING
    },
    numero: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    itensdecoleta: {
        type: Sequelize.STRING
    }

})

//point.sync({force:true})

module.exports = point