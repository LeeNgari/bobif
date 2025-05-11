import {Router} from 'express'
import {callback} from "../controllers/auth-controller.js"

const router = Router()

router.get("/callback", callback)

export default router