import { Router } from "express"
import { processVideo } from "../controllers/videoController.mjs"
import { upload } from "../middlewares/uploadMiddleware.mjs"

const router = Router()

router.post(
  "/upload",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "watermark", maxCount: 1 },
  ]),
  processVideo,
)

export default router
