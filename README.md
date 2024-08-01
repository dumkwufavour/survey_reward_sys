# Survey System Documentation

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Services](#services)
   - [Auth Service](#auth-service)
   - [User Service](#user-service)
   - [Survey Service](#survey-service)
   - [API Gateway](#api-gateway)
   - [Frontend](#frontend)
4. [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Running the Project](#running-the-project)
7. [Endpoints](#endpoints)
8. [Frontend Pages](#frontend-pages)
9. [Technologies Used](#technologies-used)
10. [Contributing](#contributing)

## Overview
The Survey System is a microservices-based application designed to create and manage surveys. It includes services for authentication, user management, survey management, and an API gateway to unify the microservices. The frontend is built using Next.js for a modern, responsive user interface.

## Project Structure
```plaintext
survey-system/
├── auth-service/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
├── user-service/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
├── survey-service/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
├── api-gateway/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── node_modules/
    ├── .env
    ├── package.json
    ├── next.config.js
    ├── pages/
    │   ├── _app.js
    │   ├── index.js
    │   ├── dashboard.js
    │   └── surveys.js
    └── public/
```

## Services

### Auth Service
- **Path:** `auth-service/`
- **Description:** Handles authentication and authorization.
- **Main File:** `server.js`

### User Service
- **Path:** `user-service/`
- **Description:** Manages user information and operations.
- **Main File:** `server.js`

### Survey Service
- **Path:** `survey-service/`
- **Description:** Manages survey creation, updates, and responses.
- **Main File:** `server.js`

### API Gateway
- **Path:** `api-gateway/`
- **Description:** Acts as a single entry point to unify the microservices.
- **Main File:** `server.js`

### Frontend
- **Path:** `frontend/`
- **Description:** Next.js application providing the user interface.
- **Main Files:** `next.config.js`, `pages/`

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd survey-system
   ```

2. Install dependencies for each service:
   ```bash
   cd auth-service && npm install
   cd ../user-service && npm install
   cd ../survey-service && npm install
   cd ../api-gateway && npm install
   cd ../frontend && npm install
   ```

## Environment Variables
Each service requires environment variables defined in a `.env` file. Below are examples for each service:

### Auth Service
```plaintext
PORT=4000
AUTH_SECRET=<your_auth_secret>
```

### User Service
```plaintext
PORT=4001
DATABASE_URL=<your_database_url>
```

### Survey Service
```plaintext
PORT=4002
DATABASE_URL=<your_database_url>
```

### API Gateway
```plaintext
PORT=4003
AUTH_SERVICE_URL=http://localhost:4000
USER_SERVICE_URL=http://localhost:4001
SURVEY_SERVICE_URL=http://localhost:4002
```

### Frontend
```plaintext
NEXT_PUBLIC_API_URL=http://localhost:4003
```

## Running the Project
Start each service and the frontend application in separate terminal windows:

1. Start Auth Service:
   ```bash
   cd auth-service
   npm start
   ```

2. Start User Service:
   ```bash
   cd user-service
   npm start
   ```

3. Start Survey Service:
   ```bash
   cd survey-service
   npm start
   ```

4. Start API Gateway:
   ```bash
   cd api-gateway
   npm start
   ```

5. Start Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## Endpoints
### Auth Service
- `POST /login` - Authenticate user
- `POST /register` - Register new user

### User Service
- `GET /users` - Retrieve all users
- `GET /users/:id` - Retrieve user by ID

### Survey Service
- `POST /surveys` - Create a new survey
- `GET /surveys` - Retrieve all surveys
- `GET /surveys/:id` - Retrieve survey by ID

### API Gateway
- Unified endpoints to access all the above services

## Frontend Pages
### `_app.js`
- Custom App component for global styles and providers.

### `index.js`
- Home page.

### `dashboard.js`
- User dashboard.

### `surveys.js`
- Survey management page.

## Technologies Used
- **Backend:** Node.js, Express
- **Frontend:** Next.js, React
- **Database:** (Specify your database, e.g., MongoDB, PostgreSQL)
- **Authentication:** JWT, Auth0
- **API Gateway:** Express Gateway

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

