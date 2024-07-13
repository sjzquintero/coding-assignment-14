# Use the official Node.js image as a base image
FROM node:14 AS build

# Set the working directory
WORKDIR /jimenez_santiago_final_site

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Use the official Nginx image to serve the React application
FROM nginx:alpine

# Copy the build files from the previous stage to the Nginx html directory
COPY --from=build /jimenez_santiago_final_site/build /usr/share/nginx/html

# Expose the port that Nginx will use
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
