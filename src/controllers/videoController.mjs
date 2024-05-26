import { addWatermark } from "../services/videoService.mjs"
import path from "path"

export const processVideo = async (req, res) => {
  try {
    const videoPath = req.files.video[0].path
    const watermarkPath = req.files.watermark[0].path
    const outputPath = path.join(
      process.env.UPLOAD_DIR,
      `${Date.now()}-output.mp4`,
    )
    console.log("Processing video...")
    console.log("Video path:", videoPath)
    console.log("Watermark path:", watermarkPath)
    console.log("Output path:", outputPath)

    await addWatermark(videoPath, watermarkPath, outputPath)

    res.download(outputPath, (err) => {
      if (err) {
        console.error(err)
        res.status(500).send("Something went wrong")
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).send("Something went wrong")
  }
}
