import express from 'express';
import {configDotenv} from "dotenv";
import {connectDB} from "./lib/db.js"


import userRoutes from "./routes/user-route.js"
import authRoutes from "./routes/auth-route.js"
import adminRoutes from "./routes/admin-route.js"
import songRoutes from "./routes/song-route.js"
import albumRoutes from "./routes/album-route.js"
import statsRoutes from "./routes/stat-route.js"

const app = express()
const PORT = process.env.PORT || 5000

configDotenv()

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/songs", songRoutes)
app.use("/api/albums", albumRoutes)
app.use("/api/stats", statsRoutes)

app.listen(PORT, ()=>{
    console.log("listening on port " + PORT)
    connectDB();
})