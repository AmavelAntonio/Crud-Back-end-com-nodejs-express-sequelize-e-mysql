import express from 'express'
import routes from './src/routes/homeRoutes.js'
const app = express();
const port = 3000;

app.listen(port, async()=>{
    console.log("Servidor Rodando na porta padrão")
    console.log("http://localhost:3000")
})

app.use(routes)


