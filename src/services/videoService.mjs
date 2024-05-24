import Ffmpeg from "fluent-ffmpeg"
import { createReadStream, createWriteStream } from "fs"
import path from "path"

export const addWatermark = async (videoPath, watermarkPath, outputPath) => {
  return new Promise((resolve, reject) => {
    Ffmpeg(videoPath)
      .input(watermarkPath)
      .complexFilter([
        {
          filter: "overlay",
          options: { x: 10, y: 10 },
        },
      ])
      .on("end", resolve(outputPath))
      .on("error", (err) => reject(err))
      .save(outputPath)
  })
}
