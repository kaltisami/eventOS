# eventOS

Live show management and production software. A full-stack Node.js + Vue application for managing events, artists, and production logistics.

## Features

- Event and show management
- User authentication with JWT
- RESTful API backend (Express + MongoDB)
- Vue.js frontend client

## Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white)

`express` · `mongoose` · `jsonwebtoken` · `bcrypt` · `vue-router`

## Project Structure

```
eventOS/
├── server.js           # Express entry point
├── routes/             # API routes
├── controllers/        # Route handlers
├── models/             # Mongoose schemas
└── client/             # Vue.js frontend
```

## Getting Started

```bash
git clone https://github.com/kaltisami/eventOS.git
cd eventOS
npm install
```

Create a `.env` file (see `.env.example`):

```env
PORT=5500
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

```bash
npm run dev
```

API runs on `http://localhost:5500`

## License

ISC
