import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage } from "../controllers/auth.controller.server.js";

const router = Router();

// Display login route
router.get('/login', DisplayLoginPage);

// Display register router
router.get('/register', DisplayRegisterPage);

export default router;