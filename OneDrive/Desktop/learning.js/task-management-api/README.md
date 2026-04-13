# 🚀 Task Management API

A secure and scalable RESTful API built using Node.js and Express.js that allows users to register, authenticate, and manage their tasks. This project demonstrates integration with both SQL (PostgreSQL) and NoSQL (MongoDB) databases along with JWT-based authentication.

---

## 📌 Features

### 🔐 User Management
- User Registration (Unique Email + Hashed Password)
- User Login with JWT Authentication
- Get Authenticated User Profile

### 📋 Task Management
- Create Task
- Get All Tasks (Only logged-in user)
- Get Task by ID
- Update Task (Partial update supported)
- Delete Task
- Task ownership protection (users cannot access others' tasks)

### 🗄️ Database Integration
- PostgreSQL → User Data
- MongoDB → Task Data

### ⚠️ Error Handling
- Global error handling middleware
- Standard HTTP status codes:
  - 400 Bad Request
  - 401 Unauthorized
  - 403 Forbidden
  - 404 Not Found
  - 500 Internal Server Error

### ✅ Data Validation
- Email format validation
- Required field validation
- Password constraints
- Task field validation (title, due date, status)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL (pg)
- MongoDB (mongoose)
- JWT (jsonwebtoken)
- bcrypt.js
- dotenv
- express-validator / joi

---

## 📂 Folder Structure
task-management-api/
│
├── src/
│ ├── config/ # Database connections
│ ├── controllers/ # Business logic
│ ├── middlewares/ # Auth & error handling
│ ├── models/ # MongoDB models (Task)
│ ├── routes/ # API routes
│ ├── validators/ # Input validation
│ └── app.js # Express app setup
│
├── server.js # Entry point
├── .env # Environment variables
├── .gitignore
├── package.json
└── README.md

This structure follows a modular and scalable architecture where:
- Controllers handle business logic
- Routes define API endpoints
- Middlewares manage authentication and errors
- Validators ensure data integrity