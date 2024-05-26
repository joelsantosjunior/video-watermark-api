import Ffmpeg from "fluent-ffmpeg"

// Calculate the overlay position (centered at the bottom)
const overlayPosition = "x=(main_w-overlay_w)/2:y=main_h-(overlay_h * 2)"

export const addWatermark = async (videoPath, watermarkPath, outputPath) => {
  return new Promise((resolve, reject) => {
    Ffmpeg(videoPath)
      .input(watermarkPath)
      .complexFilter([`[0][1]overlay=${overlayPosition}`])
      .on("end", () => {
        console.log("Watermark added to video")
        resolve(outputPath)
      })
      .on("error", (err) => reject(err))
      .save(outputPath)
  })
}
