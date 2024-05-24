import express from "express"
import videoRoutes from "./routes/videoRoutes.mjs"

const app = express()

app.use(express.json())
app.use("/api/videos", videoRoutes)

export default app
