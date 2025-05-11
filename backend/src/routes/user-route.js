import  {Router} from 'express';

const router = Router();

router.get("/api/users", (req, res) => {
    res.send("User get route")
})

export default router;