# Task Management API

A robust and scalable Task Management REST API built with Node.js, Express, and MongoDB. This API supports CRUD operations, input validation, pagination, filtering, and sorting.

## Features
- Create a new task.
- Retrieve all tasks
- Retrieve a specific task by ID
- Update an existing task(title, description, status)
- Create an endpoint to update only the task status.
- Delete a task by ID
- Input validation using Joi
- Pagination, filtering, and sorting of tasks

## Technologies Used
- Node.js
- Express.js
- MongoDB (For data store)
- Joi (for validation)
- Dotenv
- Nodemon 

## Getting Started

1. **Clone the repository**
    git@github.com:himalkarkee000/Task.git
    cd task

2. Install dependencies
    - npm install

3. Configure environment variables
    Create a .env file in the root directory and add the environment variables as shown in .env.example. Replace himalkarkee000 with your MongoDB username, and replace <password> with your MongoDB password.

## Running the server
    - npm start

The server will run on http://localhost:9006 by default.

# API Documentation
You can explore and test all the API endpoints using Postman:
🔗 Postman Collection (Published):

https://documenter.getpostman.com/view/30188594/2sB2cYdgJp
This collection includes all available routes with example requests and responses for easy testing and integration.

## Base URL
    - http://localhost:9006/api/task

### Endpoints

1. Create a new task.
    - POST- /api/task
        - http://localhost:9006/api/task

2. Retrieve all tasks (with pagination, sorting, and filtering).
    - GET- /api/task
        - http://localhost:9006/api/task?page=1&limit=2

        Query Parameters:
        page - Page number (default: 1)
        limit - Number of tasks per page (default: 5)
        sortBy - Field to sort by ( createdAt)

3. Retrieve a specific task by ID.
    - GET - /api/task/:id
        - http://localhost:9006/api/task/67fa0a53b3a884daeea4ad5e

4. Update an existing task (title, description, status).
    - PUT - PUT /api/tasks/:id
        - http://localhost:9006/api/task/67fa0a53b3a884daeea4ad5e 

5. Delete a task by ID.
    - DELETE- /api/tasks/:id
        - http://localhost:9006/api/task/67f7d4a69e27278bc91091a4

6. Update only the task status.
    - PATCH- /api/tasks/:id/status
        - http://localhost:9006/api/task/67fa0a53b3a884daeea4ad5e/status

 ## Contact
   Name: Himal Karki
   GitHub: https://github.com/himalkarkee000
   Email: himalkarkee000@gmail.com