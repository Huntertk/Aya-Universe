import {Router} from 'express'
import { getAdminData, loginAdmin, logoutAdmin, registerAdmin } from '../controllers/adminController.js'
import { authAdmin } from '../middlewares/authMiddleware.js'


const router  = Router()

// router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
router.get('/logout', logoutAdmin)
router.get('/admin-data', authAdmin, getAdminData)

export default router