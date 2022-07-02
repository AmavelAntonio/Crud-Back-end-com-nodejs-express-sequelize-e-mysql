import { Router } from "express";
import homeController from '../controllers/FreelancerController.js'
import Admin from "../controllers/AdminController.js"

const router = new Router();

router.post('/CadastroFreelancer', homeController.index)
router.post("/cadastro-Admin", Admin.index)
router.get("/login-Admin", Admin.login)
router.get("/login-freelancer", homeController.login)


export default router;