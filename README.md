## Simple rest api to apply watermarks to videos
This service is a simple rest api that allows you to upload a video and a watermark image to apply the watermark to the video. The service uses ffmpeg to apply the watermark to the video.

## Usage
The body should be a form-data with two fields:\n
1. video=file.mp4
2. watermark=file.png

```
api/videos/upload
```

## Installation
1. Clone the repository
2. Install the dependencies
```
npm install
```
3. Start the server
```
npm start
```

## Docker Installation
1. Clone the repository
2. Build the docker image
```
docker build -t watermark-api .
```
1. Run the docker container
```
docker run -p 3000:3000 watermark-api
```
The project contanis a docker-compose file that will build the image and run the container, but you can also build the image manually if you want.