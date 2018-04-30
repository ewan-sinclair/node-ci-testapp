FROM  node:8.1.1
WORKDIR /opt/hello_world
COPY package*.json ./
RUN npm install
COPY . ./
CMD node index.js
EXPOSE 5667
