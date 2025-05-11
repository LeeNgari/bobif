import {Router } from 'express'
import {protectRoute, requireAdmin} from "../middleware/authMiddleware.js"
import { createSong , deleteSong} from "../controllers/admin-controller.js"

const router = Router()

router.delete("/songs/:id", protectRoute, requireAdmin, deleteSong);
router.post("/songs", protectRoute, requireAdmin, createSong)
export default router