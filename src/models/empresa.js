import conect from '../../conect.js'
import Sequelize from 'sequelize'


const Parceiros = conect.define("Parceiros", {
   id:{
         type:Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false, 
         autoIncrement: true
    },
    Nome_Empresa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Nif: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
})

//Parceiros.sync({force: true})
