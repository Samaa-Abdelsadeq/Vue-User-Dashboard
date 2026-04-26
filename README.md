# User Management System

A robust, responsive dashboard for managing user records. This project focuses on efficient data handling and a clean user interface, allowing for seamless Create, Read, Update, and Delete (CRUD) operations.

## 🚀 Features

* **Full CRUD Functionality:** Add, view, edit, and delete user profiles.
* **Dynamic Search:** Real-time filtering of users by name or attributes.
* **Responsive UI:** Optimized for desktop, tablet, and mobile viewing using Tailwind CSS.
* **Data Persistence:** Uses a local JSON data source combined with LocalStorage to ensure changes persist across browser refreshes.
* **Navigation & Routing:** Implements Vue Router with lazy loading and custom 404 (Not Found) page handling.

## 🛠️ Tech Stack

* **Framework:** Vue.js 3 (Options API)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios
* **Routing:** Vue Router

## 🌐 API & Data Handling

While this project is configured to work with a local `users.json` file for portability and static hosting, it is built using **RESTful principles**. 

The service layer is designed to easily swap between a local data source and a live **REST API**. Currently, the app mimics a backend environment by:
* Fetching data via `GET` requests.
* Handling `POST`, `PUT`, and `DELETE` operations locally to simulate server behavior.

## 📥 Installation & Setup

To get a local copy up and running, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd task-3
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled files will be located in the `dist/` directory, ready to be deployed to any static hosting service (e.g., GitHub Pages, Vercel, or Netlify).

