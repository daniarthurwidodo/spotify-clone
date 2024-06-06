FROM node:alpine AS builder  
# Use Node.js Alpine image for base (lightweight)

WORKDIR /app

COPY package*.json ./        
# Copy package.json and package-lock.json
RUN npm install              
# Install dependencies

FROM node:alpine  
# Create a new stage from Node.js Alpine image

WORKDIR /app

COPY nextjs-app/ .            
# Copy Next.js application directory
COPY express-app/ .          
# Copy Express.js application directory
RUN npm install --only=production  
# Install production dependencies (optional)

EXPOSE 3000 
# (or your app port)  # Expose the port your app listens on

# Choose either CMD or ENTRYPOINT based on your preference:

# Option 1: Using CMD (simpler)
CMD [ "npm", "start" ]         
# Command to start the app on container run

# Option 2: Using ENTRYPOINT (more flexible)
# ENTRYPOINT [ "npm", "start" ]
