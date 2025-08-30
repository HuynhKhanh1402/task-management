# Task Management System

[![GitHub License](https://img.shields.io/github/license/HuynhKhanh1402/task-management?style=for-the-badge)](https://github.com/HuynhKhanh1402/task-management/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/HuynhKhanh1402/task-management?style=for-the-badge)](https://github.com/HuynhKhanh1402/task-management/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/HuynhKhanh1402/task-management?style=for-the-badge)](https://github.com/HuynhKhanh1402/task-management/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/HuynhKhanh1402/task-management?style=for-the-badge)](https://github.com/HuynhKhanh1402/task-management/issues)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/HuynhKhanh1402/task-management?style=for-the-badge)](https://github.com/HuynhKhanh1402/task-management/commits/main)

[![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.16.4-47A248?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white&style=for-the-badge)](https://www.docker.com/)

A comprehensive full-stack task management application built with React, Node.js, Express, and MongoDB. This system provides role-based access control with separate interfaces for administrators and team members to efficiently manage tasks and track progress.

## 🚀 Features

### For Administrators
- **Dashboard Analytics**: View comprehensive statistics including total tasks, pending tasks, completed tasks, and overdue tasks
- **Task Management**: Create, update, delete, and assign tasks to team members
- **User Management**: View all team members and their task statistics
- **Task Filtering**: Filter tasks by status (All, Pending, In Progress, Completed)
- **Progress Tracking**: Monitor task completion rates and team productivity
- **Excel Reports**: Export task and user data to Excel files for reporting
- **File Attachments**: Add attachments to tasks for additional context

### For Team Members
- **Personal Dashboard**: View personal task statistics and recent assignments
- **My Tasks**: View all assigned tasks with filtering capabilities
- **Task Details**: View detailed task information including description, due dates, and attachments
- **Todo Checklist**: Mark checklist items as complete and track progress
- **Status Updates**: Automatic status updates based on checklist completion
- **Profile Management**: Update personal profile information and avatar

### Core Features
- **Authentication & Authorization**: Secure login/signup with JWT tokens
- **Role-based Access Control**: Admin and member roles with appropriate permissions
- **Real-time Progress Tracking**: Automatic task status updates based on checklist completion
- **File Upload**: Support for profile images and task attachments
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Data Visualization**: Charts and graphs for task analytics using Recharts

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests
- **React Hot Toast**: Toast notifications
- **React Icons**: Icon library
- **Recharts**: Data visualization library
- **Moment.js**: Date manipulation and formatting

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **Multer**: File upload handling
- **ExcelJS**: Excel file generation
- **CORS**: Cross-origin resource sharing

### DevOps & Tools
- **Docker**: Containerization
- **Docker Compose**: Multi-container orchestration
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Nodemon**: Development auto-restart

## 📁 Project Structure

```
task-management/
├── backend/                    # Node.js/Express backend
│   ├── config/                # Database configuration
│   ├── controllers/           # Route controllers
│   ├── middlewares/           # Custom middlewares
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API routes
│   ├── uploads/              # File uploads directory
│   ├── server.js             # Main server file
│   └── package.json          # Backend dependencies
├── frontend/                  # React frontend
│   ├── public/               # Static assets
│   ├── src/                  # Source code
│   │   ├── components/       # Reusable components
│   │   ├── context/          # React context providers
│   │   ├── hooks/            # Custom hooks
│   │   ├── pages/            # Page components
│   │   ├── routes/           # Route configurations
│   │   └── utils/            # Utility functions
│   └── package.json          # Frontend dependencies
├── mongodb-data/             # MongoDB data directory
├── uploads/                  # Shared uploads directory
└── docker-compose.yml        # Docker configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HuynhKhanh1402/task-management.git
   cd task-management
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/task-management
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=your_jwt_secret_here
   NODE_ENV=development
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   ```
   
   Update the `.env` file:
   ```env
   VITE_API_URL=http://localhost:8000
   VITE_ENV=development
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system or use Docker:
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

5. **Run the Application**
   
   **Backend** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   **Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

### Using Docker (Recommended)

1. **Run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

This will start:
- Frontend on `http://localhost:5173`
- Backend on `http://localhost:8000`
- MongoDB on `http://localhost:27017`

## 📱 Usage

### Creating Admin Account
1. Register a new account at `/signup`
2. Use the admin invite token (set in environment variables) to create an admin account
3. Login with admin credentials to access administrative features

### For Administrators
1. **Dashboard**: View system-wide statistics and charts
2. **Manage Tasks**: Create new tasks, assign to team members, set priorities and due dates
3. **Manage Users**: View all team members and their task progress
4. **Reports**: Export data to Excel for external analysis

### For Team Members
1. **Dashboard**: View personal task statistics
2. **My Tasks**: View assigned tasks and update progress
3. **Task Details**: Complete checklist items and track progress
4. **Profile**: Update personal information and profile image

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Tasks
- `GET /api/tasks` - Get tasks (filtered by role)
- `POST /api/tasks` - Create new task (Admin only)
- `GET /api/tasks/:id` - Get task by ID
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task (Admin only)
- `PUT /api/tasks/:id/status` - Update task status
- `PUT /api/tasks/:id/todo` - Update task checklist

### Users
- `GET /api/users` - Get all users (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Reports
- `GET /api/reports/export/tasks` - Export tasks to Excel
- `GET /api/reports/export/users` - Export users to Excel

## 🎨 Screenshots

*Screenshots will be added here*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **HuynhKhanh1402** - *Initial work* - [HuynhKhanh1402](https://github.com/HuynhKhanh1402)

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB team for the excellent database
- All contributors who helped make this project better

---

**⭐ Star this repository if you find it helpful!**

For more information or support, please open an issue on [GitHub](https://github.com/HuynhKhanh1402/task-management/issues).
