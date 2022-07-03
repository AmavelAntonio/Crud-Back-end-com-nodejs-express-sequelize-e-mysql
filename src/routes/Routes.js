import { Router } from "express";
import freelancer from '../controllers/FreelancerController.js'
import Admin from "../controllers/AdminController.js"

const router = new Router();

//Rotas Administrador
router.post("/cadastro-Admin", Admin.store)
router.get("/login-Admin", Admin.index)
router.delete("delete-freelancer", Admin.delete)


//Rotas para Freelancers
router.post('/CadastroFreelancer', freelancer.store)
router.get("/login-freelancer", freelancer.index)
router.put("/update-freelancer", freelancer.update)


//Routas para Empresas ou parceiros 



export default router;