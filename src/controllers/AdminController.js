import Admin from "../models/admin.js"
import freelancer from "../models/freelancer.js"
class AdminController{
    async index(require, response){
        const {id, senha} = require.body;

        if(!id || id.length < 3) return response.json({"Mensagem": "Campo deve ser correctamente preenchido", error: true});
        if(!senha || senha.length < 6 ) return response.json({"Mensagem": "Campo senha é deve ser coorectamente preenchido", error: true});

        const newAdmin = Admin.create({
            idAdmin: id, 
            password: senha
        })

        return response.json({"Mensagem": "Admin criado com sucesso", error: false})

    }

    async login(require, response){
        const {id, senha} = require.body;

        if(!id || id.length < 3 )   return response.json({"Mensagem": "Id inválido", error: true})

        const existAdmin = await Admin.findOne({where: 
           { idAdmin: id}
        })

        if(!existAdmin) return response.json({"Mensagem": "Id inválido. Admin inexistente", error: true})

        if(existAdmin.password !== senha) return response.json({"Mensagem": "As senhas não conferem", error: true})

        return response.json({"Mensagem": "Admin logado com sucesso", error: false, id})
    }

    async delete(require, response) {
        const { id } = require.body;

        if(!id) return response.json({"Mensagem": "Campo ide não ppode ser nulo"})


        const delete_Freealncer = await freelancer.destroy({
            where: {
              id : id
            }
          });
        } 
}

export default new AdminController();