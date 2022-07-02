import conect from '../../conect.js'
import Sequelize from 'sequelize'


const Admin = conect.define("Admin", {
    idAdmin:{
         type:Sequelize.STRING,
         allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
})

//Admin.sync({force: true})

export default Admin;
