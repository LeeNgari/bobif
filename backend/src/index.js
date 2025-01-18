import express from 'express';
import {configDotenv} from "dotenv";
import userRoutes from "./routes/user-route.js"

const app = express()

configDotenv()

const PORT = process.env.PORT || 5000

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/songs", songRoutes)
app.use("/api/albums", albumRoutes)
app.use("/api/stats", albumRoutes)

app.listen(PORT, ()=>{
    console.log("listening on port " + PORT)
})