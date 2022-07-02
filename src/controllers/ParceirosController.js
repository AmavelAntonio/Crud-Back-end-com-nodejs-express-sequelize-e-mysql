import empresa from "../models/empresa.js"

class empresas{
    async index(require, response){
        let {Nome_Empresa, Nif, Email, Telefone, password, confirmPassword} = require.body;

        if(!Nome_Empresa) return  response.json({"Mensagem": "O campo nome é obrigatório", error: true});

        if(!Nif) return  response.json({"Mensagem": "O campo Nif é obrigatório", error: true});

        if(!password || password.length < 8) return response.json({"Mensagem": "A password muito fraca", error: true});

        if(!Email || Email.length < 6) return response.json(({"Mensagem": "Email Inválido"}))

        if(!Telefone || Telefone.length < 9 ) return response.json({"Mensagem": "O contacto inválido, insira correctamento", error: true})

        if(!password || password.length < 6 ) return response.json({"Mensagem": "Palavra-Passe inválida, insira correctamento", error: true})

        if(!confirmPassword || confirmPassword < 10) return response.json({"Mensgaem": "Confirme password inválida"}) 

        if(password !== confirmPassword) return response.json({"Mensagem": "As passwords não conferem"})

        const existUser = await empresa.findOne({
          where: {
            Nif: Nif
          }
        })

       if(existUser) return response.json({"Mensagem": "Já exite uma empresa com este Nif"})

        const newFreelancer = await freelancer.create({
            Nome_Empresa,
            Nif,
            Email, 
            Telefone,
            password, 
            confirmPassword
        })

        return await response.json({newFreelancer, error: false})

    }

    async login(require, response){

      const {Nif, password} = require.body;

      if(!email) return await response.json({"Mensgaem": "Email não pode ser inválido", error: true})

      if(!password) return await response.json({"Mensagem": "A password não pode ser inválida", error: true})

      const existNif = await freelancer.findOne({
        where: {
         Nif: Nif
        }
      })

      if(Nif) return await response.json({"Mensagem": "Empresa Inválida", error: true})

      if(existNif.password !== password)  return await response.json({"Mensagem": "As passawords não conferem", error: true})
      await response.json({"Mensagem": "Login Efectuado", error: false})
     }

}









export default new empresas();