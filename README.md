# Weather App
## _A simple weather application fetches and displays city weather data. This project uses HTML, JavaScript, and a lightweight HTTP server to serve the application._

### Features
- Displays weather information for cities.
- Lightweight and easy to deploy.
- Runs on port 3000.
---
### Prerequisites
1. Node.js installed on your system.
2. Docker installed if you want to containerize the application.
---
## Installation and Usage
1. ### Clone the Repository
```sh
 git clone <repository-url>
 cd weather-app
 ```
2. ### Install Dependencies
Run the following command to install the required dependencies:
```sh
   npm install
```
3. ### Start the Application
Start the application using the following command:
``` sh
   npm start 
```
#### The Application will be available at http://localhost:3000

---
# 1. Docker Setup
- For node base image need above ```node14```
- Copy all the file into the container
- Run the ```npm install```
- Expose the port ```3000```
- start the application with ```npm start ```
# 2. Build the Docker images
- With the help of ```docker build -t <Image_name>``` we create a image

# 3. Run the Docker container
- Run the container and map the port ```3000```
- Run the Docker with the help of ```docker run -p 3000:3000 <image_name>:latest```
---
# Project Structure
```
weather-app/
├── index.html
├── Main.js
├── package.json
├── Dockerfile
├── Readme.md
```
---
# Author
### Ayush Gurjar
---
## Happy Learning
