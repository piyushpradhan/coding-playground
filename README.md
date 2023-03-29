# Minimal Coding Playground
## Demo
https://user-images.githubusercontent.com/54734029/195680500-364a7337-73f2-4a29-9aa8-d45a286f6e88.mp4

https://user-images.githubusercontent.com/54734029/195680633-037a9aec-8059-481f-b680-7fefa4cdf6d5.mp4

# Getting started
### Setting it up locally 
- Create a new React application to use as a template
```bash
npx create-react-app template
```
- Build the "playground" image using the following Dockerfile
```Dockerfile
# pull official base image
FROM node:16.17.0

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]
```
- put the Dockerfile inside root directory of the newly created (template) React app 
- build the image with the name "playground"
```bash
mv Dockerfile template/
docker build -t playground .
```

- Clone the [backend repo](https://github.com/piyushpradhan/coding-playground-backend)
```bash
git clone https://github.com/piyushpradhan/coding-playground-backend.git
yarn
yarn start:dev
```

- Clone this repo and setup the .env file
```bash
git clone https://github.com/piyushpradhan/coding-playground.git
```
- .env file
```bash
# running locally 
# URL of the backend server
REACT_APP_BASE_URL='http://localhost:4000/api'
REACT_APP_BASE_ADDRESS='http://localhost:4000'
```
- Install dependencies and run the app
```bash
yarn
yarn start
```

# How it works
![coding_playground_design](https://user-images.githubusercontent.com/54734029/195780312-a96d20a5-8d75-4ea2-8e3f-3fc5d970fb11.svg)

# Things to improve
- Assign some of the heavy tasks, like creating containers to background threads
- Implement a custom and better terminal interface
- Better overall UI
- Authentication and dashboard with existing playgrounds (containers) allowing users to load or delete their existing playgrounds
- Better file tree
- Multiple tabs in editor
