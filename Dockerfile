# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular project
RUN npm run build --prod

# Expose the port the Angular app runs on
EXPOSE 4200

# Start the Angular app
CMD [ "npm", "run", "start" ]
