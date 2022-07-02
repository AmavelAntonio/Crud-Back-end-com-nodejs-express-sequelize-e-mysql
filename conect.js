import dotenv from 'dotenv'
dotenv.config()
import Sequelize from 'sequelize'

/*const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USERNAME, process.env.DATABASEPASSWORD, {
    dialect: 'mysql', 
    host: 'localhost'
})*/

const sequelize = new Sequelize("freelancer_db", "root", "123456789", {
    dialect: 'mysql', 
    host: 'localhost'
})


sequelize.authenticate().then( ()=>{
    console.log("Conexão realizada com sucesso")
}).catch( (error)=>{
    console.log("Não foipossível realizar a conexão" + error)
})

export default sequelize;


