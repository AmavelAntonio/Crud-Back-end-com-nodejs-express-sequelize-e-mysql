import conect from '../../conect.js'
import Sequelize from 'sequelize'


const HabilidadesFreelancer = conect.define("HabilidadesFreelancer", {
   idPost:{
         type:Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false, 
         autoIncrement: true
    },
    Conteudo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
   id_freelancer: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   data: {
    type: Sequelize.DATE, 
    allowNull: false
   }
    
})

//HabilidadesFreelancer.sync({force: true})