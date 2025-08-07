FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=development
ENV PORT=8000

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Install a static file server
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "5173"]