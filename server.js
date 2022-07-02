
import express from 'express'
import routes from './src/routes/homeRoutes.js'
import Sequelize from  'sequelize'
import conect from './conect.js'
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))   

app.listen(port, async()=>{
    console.log("Servidor Rodando na porta padrão")
    console.log("http://localhost:3000")
})

app.use(routes)


