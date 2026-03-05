# Dockerise-Make-My-Trip

To “Dockerise” a MakeMyTrip-like app (a travel booking web app) you package the application and its dependencies into Docker containers so it can run anywhere consistently. Below is a simple example using a typical stack:

A full-stack travel booking web application containerised using Docker and orchestrated with Docker Compose.
The project demonstrates how to build and deploy a modern MERN-style application using containerisation.


Tech Stack
Frontend

React

JavaScript

HTML/CSS

Backend

Node.js

Express.js

Database

MongoDB

DevOps

Docker

Docker Compose


Project Structure


travel-booking-app
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── bookingController.js
│   │   └── userController.js
│   ├── Dockerfile
│   ├── models
│   │   ├── booking.js
│   │   └── user.js
│   ├── package.json
│   ├── routes
│   │   ├── bookingRoutes.js
│   │   └── userRoutes.js
│   └── server.js
│
├── docker-compose.yml
│
└── frontend
    ├── Dockerfile
    ├── package.json
    ├── public
    │   └── index.html
    └── src
        ├── App.js
        ├── index.js
        └── pages
            ├── booking.js
            └── home.js




Prerequisites

Make sure the following are installed:

Docker

Docker Compose

Git

Check installation:

docker --version
docker compose version



Installation

Clone the repository:

git clone https://github.com/yourusername/travel-booking-app.git

Navigate to the project directory:

cd travel-booking-app




Running the Application

Build and start all containers:

docker compose up --build

This command will:

Build frontend and backend images

Start the backend API

Start the frontend server

Connect services using Docker networking



Application URLs

Frontend

http://localhost:3000

Backend API

http://localhost:5000
Docker Services

The project runs the following services:

Frontend

React application served from the frontend container.

Backend

Node.js + Express REST API that handles:

user management

booking operations

Database

MongoDB container used for persistent data storage.

Stopping the Application

Stop containers:

docker compose down

Remove containers and volumes:

docker compose down -v
