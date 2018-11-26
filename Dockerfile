FROM node:11.2.0

# Create app directory
RUN mkdir -p /home/nest-ng-china
WORKDIR /home/nest-ng-china

# Install dependencies
COPY package.json ./
RUN npm install --quiet

# Bundle app source
COPY . /home/nest-ng-china

# Exports
EXPOSE 3000
CMD [ "npm", "run", "start" ]