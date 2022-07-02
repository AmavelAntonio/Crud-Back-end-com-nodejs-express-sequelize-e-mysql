import conect from '../../conect.js'
import Sequelize from 'sequelize'


const Localizacao = conect.define("Localizacao", {
   id:{
         type:Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false, 
         autoIncrement: true
    },
    Pais: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Provincia: {
        type: Sequelize.STRING,
        allowNull: false
    },
   Municipio: {
        type: Sequelize.STRING,
        allowNull: false
    },
   Municipio: {
        type: Sequelize.DATE,
        allowNull: false
    },
   Numero_Casa: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
})

//Localizacao.sync({force: true})