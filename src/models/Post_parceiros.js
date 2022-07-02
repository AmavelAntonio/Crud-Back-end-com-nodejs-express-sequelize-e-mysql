import conect from '../../conect.js'
import Sequelize from 'sequelize'


const Post_Parceiros = conect.define("Post_Parceiros", {
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
   id_Parceiro: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   data: {
    type: Sequelize.DATE, 
    allowNull: false
   }
    
})

//Post_Parceiros.sync({force: true})