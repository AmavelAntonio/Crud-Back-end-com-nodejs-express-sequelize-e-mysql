import conect from '../../conect.js'
import Sequelize from 'sequelize'


const Freelancer_Free = conect.define("Freelancer_Free", {
   id:{
         type:Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false, 
         autoIncrement: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    id_FreelancerFree: {
        type: Sequelize.INTEGER,
        allowNull: false
    }  
})

//Freelancer_Free.sync({force: true})
//export default router;
export default Freelancer_Free;