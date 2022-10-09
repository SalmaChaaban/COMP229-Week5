import { Router } from "express";
import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessRegisterPage, 
    ProcessloginPage,
    ProcessLogoutPage} 
    from "../controllers/auth.controller.server.js";

const router = Router();

// Display Login Router
router.get('/login', DisplayLoginPage);
// Process Login Router
router.post('/login', ProcessloginPage);

// Display Register Router
router.get('/register', DisplayRegisterPage);
// Process Registration Router
router.post('/register', ProcessRegisterPage);

// Process Logout
router.get('/logout', ProcessLogoutPage);

export default router;