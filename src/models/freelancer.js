import conect from '../../conect.js'
import Sequelize from 'sequelize'


const Freelancer = conect.define("Freelancer", {
   id:{
         type:Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false, 
         autoIncrement: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    NumeroBI: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DataNascimento: {
        type: Sequelize.DATE,
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
    C: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
})

//Freelancer.sync({force: true})
export default Freelancer;
