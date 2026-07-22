# Simple Calculator - Complete Guide

A modern, interactive calculator built with HTML, CSS, and JavaScript. Includes optional backend implementations with Node.js/Express and Python/Flask. **Now with Docker containerization!**

## 🌟 Features

- ✨ Clean and modern UI with dark theme
- 🧮 Basic arithmetic operations (add, subtract, multiply, divide)
- 📱 Responsive design (mobile-friendly)
- ⌨️ Full keyboard support
- 📊 Calculation history tracking
- 🔄 Clear and reset functions
- 🐳 Docker containerization
- 🌐 REST API backends (optional)

## 📁 Project Structure

```
simple-calculator/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── backend-nodejs/
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
├── backend-python/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── README.md
├── Dockerfile.frontend
├── Dockerfile.nodejs
├── Dockerfile.python
├── docker-compose.yml
├── nginx.conf
├── .dockerignore
└── README.md
```

## 🚀 Quick Start

### Option 1: Frontend Only (No Installation)

1. Clone the repository:
   ```bash
   git clone https://github.com/jacobgodsave66-code/simple-calculator.git
   cd simple-calculator
   ```

2. Open the calculator in your browser:
   - Open `frontend/index.html` directly in your browser
   - OR use Live Server in VS Code

**That's it! The calculator works immediately!** ✅

---

### Option 2: Run Locally Without Docker

#### **Node.js Backend**

**Requirements:** Node.js v14+ installed

```bash
# Navigate to backend directory
cd backend-nodejs

# Install dependencies
npm install

# Start the server
npm start

# Server runs on http://localhost:3000
```

#### **Python Backend**

**Requirements:** Python 3.7+ installed

```bash
# Navigate to backend directory
cd backend-python

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the server
python app.py

# Server runs on http://localhost:5000
```

---

## 🐳 Docker Setup (Recommended)

### Prerequisites

- Docker installed ([Download Docker Desktop](https://www.docker.com/products/docker-desktop))
- Docker running on your system
- Verify installation: `docker --version`

### Option 1: Docker Compose (Easiest) ⭐

**Run all services with a single command:**

```bash
# Clone the repository
git clone https://github.com/jacobgodsave66-code/simple-calculator.git
cd simple-calculator

# Start all containers
docker-compose up

# Access the applications:
# Frontend: http://localhost:8080
# Node.js Backend: http://localhost:3000
# Python Backend: http://localhost:5000
```

**Stop all containers:**
```bash
docker-compose down
```

---

### Option 2: Build and Run Individually

#### **Frontend Container**

```bash
# Build the image
docker build -f Dockerfile.frontend -t calculator-frontend:latest .

# Run the container
docker run -p 8080:80 calculator-frontend:latest

# Access at http://localhost:8080
```

#### **Node.js Backend Container**

```bash
# Build the image
docker build -f Dockerfile.nodejs -t calculator-nodejs:latest .

# Run the container
docker run -p 3000:3000 calculator-nodejs:latest

# API available at http://localhost:3000
```

#### **Python Backend Container**

```bash
# Build the image
docker build -f Dockerfile.python -t calculator-python:latest .

# Run the container
docker run -p 5000:5000 calculator-python:latest

# API available at http://localhost:5000
```

---

## 📚 API Endpoints

### POST `/api/calculate`
Perform a calculation.

**Request:**
```json
{
  "operand1": 10,
  "operation": "+",
  "operand2": 5
}
```

**Response:**
```json
{
  "result": 15,
  "calculation": "10 + 5 = 15"
}
```

### GET `/api/history`
Retrieve all calculations.

**Response:**
```json
{
  "count": 2,
  "history": [...]
}
```

### DELETE `/api/history`
Clear calculation history.

### GET `/api/stats`
Get calculation statistics.

---

## 🐳 Docker Hub Push (Complete Guide)

### Step 1: Create Docker Hub Account

1. Go to [Docker Hub](https://hub.docker.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Login to Docker Hub

```bash
# Login to Docker Hub
docker login

# Enter your Docker Hub username
# Enter your Docker Hub password

# You should see "Login Succeeded"
```

### Step 3: Tag Your Images

```bash
# Tag the frontend image
docker tag calculator-frontend:latest <your-username>/calculator-frontend:latest

# Tag the Node.js image
docker tag calculator-nodejs:latest <your-username>/calculator-nodejs:latest

# Tag the Python image
docker tag calculator-python:latest <your-username>/calculator-python:latest

# Example (replace jacobgodsave66 with your username):
# docker tag calculator-frontend:latest jacobgodsave66/calculator-frontend:latest
```

### Step 4: Push Images to Docker Hub

```bash
# Push frontend image
docker push <your-username>/calculator-frontend:latest

# Push Node.js image
docker push <your-username>/calculator-nodejs:latest

# Push Python image
docker push <your-username>/calculator-python:latest
```

### Step 5: Make Images Public

1. Go to [Docker Hub](https://hub.docker.com/repositories)
2. Click on each repository
3. Go to **Settings**
4. Set **Visibility** to **Public**
5. Click **Save**

### Step 6: Verify Your Images

```bash
# View all your images on Docker Hub
https://hub.docker.com/u/<your-username>

# Pull and run from Docker Hub
docker pull <your-username>/calculator-frontend:latest
docker run -p 8080:80 <your-username>/calculator-frontend:latest
```

---

## 🐳 Docker Concepts Explained

### **Image vs Container**
- **Image**: Blueprint/template (like a class in programming)
- **Container**: Running instance of an image (like an object)

### **Dockerfile**
- Set of instructions to build a Docker image
- Specifies base image, dependencies, ports, commands

### **Ports**
- `-p 8080:80` means:
  - `8080` = Port on your computer
  - `80` = Port inside the container

### **Volumes**
- Persistent storage that survives container restarts
- Data shared between host and container

### **docker-compose**
- Orchestrate multiple containers
- Define services, networks, volumes in one file
- Easy startup/shutdown of entire stack

---

## 🔧 Useful Docker Commands

```bash
# View all images
docker images

# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# Stop a container
docker stop <container-id>

# Remove a container
docker rm <container-id>

# Remove an image
docker rmi <image-id>

# View container logs
docker logs <container-id>

# Execute command in running container
docker exec -it <container-id> bash

# Clean up unused images/containers
docker system prune
```

---

## 📋 Troubleshooting

### **Port Already in Use**
```bash
# Change the port mapping
docker run -p 8081:80 calculator-frontend:latest
```

### **Permission Denied (Linux)**
```bash
# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

### **Image Not Found**
```bash
# Rebuild the image
docker build -t calculator-frontend:latest .
```

### **Container Won't Start**
```bash
# Check logs
docker logs <container-id>

# Run in interactive mode for debugging
docker run -it calculator-frontend:latest /bin/bash
```

---

## 📖 Learning Resources

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Hub Repository](https://hub.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)

---

## ✅ Project Completion Checklist

- [x] Frontend calculator (HTML, CSS, JavaScript)
- [x] Node.js backend with Express
- [x] Python backend with Flask
- [x] Dockerfile for frontend (Nginx)
- [x] Dockerfile for Node.js backend
- [x] Dockerfile for Python backend
- [x] docker-compose.yml for orchestration
- [x] .dockerignore for optimization
- [x] nginx.conf for frontend optimization
- [x] Comprehensive README with Docker guide
- [ ] Push images to Docker Hub (Your next step!)
- [ ] Make images public on Docker Hub

---

## 🚀 Next Steps

1. **Build Docker images**: `docker build` commands above
2. **Test locally**: `docker run` or `docker-compose up`
3. **Create Docker Hub account**: https://hub.docker.com/
4. **Login to Docker Hub**: `docker login`
5. **Tag images**: `docker tag` commands above
6. **Push to Docker Hub**: `docker push` commands above
7. **Make images public**: Settings on Docker Hub
8. **Share your repository**: Send link to Docker Hub profile

---

## 📝 Assignment Completion Summary

✅ **Step 1:** Application Files - DONE
✅ **Step 2:** Docker Containerization - DONE
✅ **Step 3:** Public Repository & README - DONE
⏳ **Step 4:** Docker Hub Push - YOUR TURN!

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Docker documentation
3. Check container logs: `docker logs <container-id>`

---

**Made with ❤️ for learning Docker and containerization!**
