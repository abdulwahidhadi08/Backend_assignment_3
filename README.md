# Backend Assignment #3 – MongoDB Connection + User Schema

## Project Structure

```
project-folder
│
├── config
│   └── db.js            ← MongoDB connection
│
├── models
│   └── User.js          ← Mongoose User schema
│
├── routes
│   └── userRoutes.js    ← API routes
│
├── .env                 ← Environment variables (do NOT upload to GitHub)
├── .env.example         ← Example env file (safe to upload)
├── .gitignore
├── server.js            ← Main entry point
└── package.json
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create `.env` File
Copy `.env.example` to `.env` and fill in your values:
```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/myDatabase
```

### 3. Run the Server
```bash
# Development (with nodemon auto-restart)
npm run dev

# Production
npm start
```

---

## API Endpoints

### POST /users — Create a new user
**Request Body:**
```json
{
  "name": "Ali",
  "email": "ali@gmail.com",
  "age": 22
}
```
**Response:**
```json
{
  "message": "User created successfully",
  "user": { ... }
}
```

---

### GET /users — Get all users
**Response:**
```json
[
  { "_id": "...", "name": "Ali", "email": "ali@gmail.com", "age": 22, "createdAt": "..." },
  ...
]
```

---

### GET /users/:id — Get single user by ID
**Response:**
```json
{ "_id": "...", "name": "Ali", "email": "ali@gmail.com", "age": 22, "createdAt": "..." }
```

---

## Validation
- `name` → required
- `email` → required, must be unique
- Missing fields return a `Validation Error` response
