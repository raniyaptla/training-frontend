FROM node:18

# Set environment variables
ENV NODE_ENV=development
ENV PORT=8000

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["npm", "run", "dev"]