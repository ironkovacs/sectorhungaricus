   # Use an official Node.js runtime as the base image
   FROM node:18-alpine

   # Set the working directory in the container
   WORKDIR /usr/src/app

   # Copy package.json and package-lock.json
   COPY package*.json ./

   # Install project dependencies
   RUN npm install

   # Copy the source code and build assets
   COPY . .

   # Build the TypeScript files
   RUN npm run build

   # Expose the application port
   EXPOSE 26117

   # Command to run the application
   CMD ["npm", "start"]