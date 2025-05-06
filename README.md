# Online React Playground

Coding Playground Backend: https://github.com/piyushpradhan/coding-playground-backend.git

A web-based development environment that lets you write, edit, and run React code directly in your browser. This playground provides a complete development setup with a code editor, terminal, and live preview - all running in isolated Docker containers for security.

## 🌟 Key Features

- **Code Editor**: Monaco Editor (VS Code's editor) with syntax highlighting and auto-completion
- **Live Preview**: Real-time preview of your React application
- **Terminal Access**: Built-in terminal for running commands and managing dependencies
- **File Management**: File tree interface for organizing your project structure
- **Containerized Environment**: Each playground runs in its own Docker container
- **TypeScript Support**: Built with TypeScript for better development experience
- **State Management**: Redux for managing application state
- **Modern UI**: Clean interface built with React and Tailwind CSS

## 🛠️ Technology Stack

### Frontend

- React 18 with TypeScript
- Redux Toolkit for state management
- Monaco Editor for code editing
- Tailwind CSS for styling
- React Router for navigation
- Various terminal emulation libraries

### Backend

- Node.js
- Docker for containerization
- RESTful API architecture

## 🚀 Live Demo

Had to take it down due to AWS cost

## 💻 Getting Started

### Prerequisites

- Node.js (v16.17.0 or later)
- Docker
- Yarn package manager

### Local Development Setup

1. **Clone the Repository**

```bash
git clone https://github.com/piyushpradhan/coding-playground.git
cd coding-playground
```

2. **Set Up Environment Variables**
   Create a `.env` file in the root directory:

```bash
REACT_APP_BASE_URL='http://localhost:4000/api'
REACT_APP_BASE_ADDRESS='http://localhost:4000'
```

3. **Install Dependencies**

```bash
yarn install
```

4. **Start the Development Server**

```bash
yarn start
```

### Docker Setup

1. **Build the Docker Image**

```bash
docker build -t playground .
```

2. **Run the Container**

```bash
docker run -p 3000:3000 playground
```

## 🏗️ Architecture

The application follows a modern microservices architecture:

- Frontend: React-based SPA with Redux state management
- Backend: Node.js API server
- Execution Environment: Docker containers for code isolation
- File System: Virtual file system for managing code files

## 🔒 Security Features

- Isolated code execution in Docker containers
- Secure file system operations
- Protected API endpoints
- Environment variable management

## 🎯 Future Enhancements

- [ ] Implement WebSocket for real-time collaboration
- [ ] Add user authentication and dashboard
- [ ] Support for multiple programming languages/frameworks
- [ ] Enhanced terminal interface
- [ ] Code sharing capabilities
- [ ] Performance optimizations for container management
- [ ] Advanced file tree features
- [ ] Multi-tab editor support
- [ ] UI improvements
