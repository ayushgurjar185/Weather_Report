# Use a lightweight Base Image of Node.js
FROM node:16-alpine
# Set the working directory
WORKDIR /app

# Copy weather-application files into the container
COPY index.html Main.js ./
COPY package.json ./

# Install the npm 
RUN npm install

# Expose port 3000
EXPOSE 3000

# Command to run the server
CMD ["npm","start"]
