import conect from '../../conect.js'
import Sequelize from 'sequelize'


const Post_Freelancer = conect.define("Post_Freelancer", {
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

//Post_Freelancer.sync({force: true})