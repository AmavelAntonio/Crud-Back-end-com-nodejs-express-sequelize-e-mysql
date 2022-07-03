import freelancer from "../models/freelancer.js"
import conect from "../../conect.js"


class FreelancerController{ 
    async store(require, response){
         
       let {nome, Genero, Nascimento, habilidades = -1, contacto, email, password, confirmPassword} = require.body;

        if(!nome) return  response.json({"Mensagem": "O campo nome é obrigatório", error: true});

        if(!password || password.length < 8) return response.json({"Mensagem": "A password muito fraca", error: true});

        if(!habilidades || habilidades.length == -1 ) return response.json({"Mensagemm": "Habilidades não pode ser nula", error: true})
      
        if(!contacto || contacto.length < 9 ) return response.json({"Mensagem": "O contacto inválido, insira correctamento", error: true})

        if(!password || password.length < 6 ) return response.json({"Mensagem": "Palavra-Passe inválida, insira correctamento", error: true})

        if(!confirmPassword || confirmPassword < 10) return response.json({"Mensgaem": "Confirme password inválida"}) 

        if(password !== confirmPassword) return response.json({"Mensagem": "As passwords não conferem"})

        if(!email || email.length < 6) return response.json(({"Mensagem": "Email Inválido"}))


        const existUser = await freelancer.findAll({
          where: {
          Email: email
          }
        })
        
       if(existUser) return response.json({"Mensagem": "Já exite um freelancer com este email, tente outro"})

        const newFreelancer = await freelancer.create({
            Nome: nome, 
            Genero: "F",
            NumeroBI: "drftgyhnujmik",
            DataNascimento: "06/12/2002",
            Email: email,
            Telefone: contacto,
            password: password
        })

        return await response.json({newFreelancer, error: false})


      }

     async index(require, response){
          try{ 
            const {email, password} = require.body;

            if(!email) return await response.json({"Mensgaem": "Email não pode ser inválido", error: true})

            if(!password) return await response.json({"Mensagem": "A password não pode ser inválida", error: true})

            const existEmail = await freelancer.findOne({
              where: {
                Email: email
              }
            })

            if(!existEmail) return await response.json({"Mensagem": "Usuário Inválido", error: true})

            if(existEmail.password !== password)  return await response.json({"Mensagem": "As passwords não conferem", error: true})
            await response.json({"Mensagem": "Login Efectuado", error: false})
        } catch(error){
          const err = error.map((err) => {
              return err.message;
          })

          console.log(err)
        }
     }
   

     async update(require, response) {
      try{
        const { id } = require.body;

        if(!id) return response.status(400).json({"Mensagem": "Id não pode ser inválido"})

        const user = await freelancer.findByPk(id);
        if(!user) return response.status(400).json({"Mensagem": "Usuario não encontrado"});

        const { novasActualizacoes } = require.body;
        const newUser = await freelancer.update(novasActualizacoes)
      }catch(error){
        const erro = error.map((err) => {
          return err.message;
        })

        console.log(erro)
      }
   }
}

export default new FreelancerController();