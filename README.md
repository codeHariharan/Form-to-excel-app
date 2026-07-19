# 📋 Form-to-Excel App

> A lightweight web application that collects user information through an HTML form and automatically stores each submission in an Excel spreadsheet (.xlsx) without requiring a database.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Frontend-orange?logo=html5)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📖 Overview

**Form-to-Excel App** is a simple full-stack web application designed to demonstrate how user-submitted form data can be stored directly into an Excel spreadsheet using Node.js.

Instead of using a traditional database, the application appends every new submission to an Excel workbook, making it ideal for:

- Student admission forms
- Registration systems
- Surveys
- Contact forms
- Event registrations
- Small-scale data collection

---

## ✨ Features

- 📄 Simple and responsive admission form
- 📤 Sends data using Fetch API (POST request)
- 📊 Automatically creates an Excel workbook if it doesn't exist
- ➕ Appends every submission as a new row
- ✅ Client-side form validation
- 🔔 Success & error toast notifications
- 🌐 CORS enabled for frontend-backend communication
- ⚡ Lightweight backend without Express.js

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- JavaScript (Fetch API)

### Backend

- Node.js
- Native HTTP Module

### Libraries

- XLSX (SheetJS)
- File System (fs)

---

## 📂 Project Structure

```
Form-to-excel-app/
│
├── index.html              # Frontend admission form
├── server.js               # Node.js backend server
├── package.json            # Project configuration
├── package-lock.json
├── admissions.xlsx         # Auto-generated Excel file
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/codeHariharan/Form-to-excel-app.git
```

### 2. Navigate into the project

```bash
cd Form-to-excel-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

or

```bash
node server.js
```

The backend will start on

```
http://localhost:3000
```

### 5. Launch the frontend

Open

```
index.html
```

in your browser.

---

## 🚀 How It Works

```text
User
   │
   ▼
Admission Form
   │
   ▼
POST Request
   │
   ▼
Node.js HTTP Server
   │
   ▼
Read/Create Excel Workbook
   │
   ▼
Append New Row
   │
   ▼
Save admissions.xlsx
   │
   ▼
Success Response
```

---

## 📊 Excel Output

Each form submission is stored with the following columns:

| Name | Email | Course |
|------|-------|---------|
| John | john@gmail.com | B.Tech |
| Hari | hari@gmail.com | CSE |

---

## 📷 Screenshots

### Admission Form

> *(Add screenshot here)*

```
screenshots/form.png
```

### Excel Output

> *(Add screenshot here)*

```
screenshots/excel-output.png
```

---

## 🔧 API Endpoint

### Submit Form

**POST**

```
/submit
```

### Request Body

```json
{
  "name": "Hari",
  "email": "hari@gmail.com",
  "course": "Computer Science"
}
```

### Success Response

```json
{
  "message": "Data received successfully"
}
```

---

## 💡 Future Improvements

- Express.js integration
- Bootstrap or Tailwind UI
- Excel download button
- Search records
- Edit/Delete entries
- Authentication
- CSV Export
- MongoDB/MySQL support
- Docker deployment

---

## 🎯 Learning Outcomes

This project demonstrates:

- HTML Form Handling
- JavaScript Fetch API
- REST API Communication
- Node.js HTTP Server
- File System Operations
- Reading & Writing Excel Files
- JSON Data Processing
- Client-Server Architecture

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Hariharan M**

- GitHub: https://github.com/codeHariharan
- LinkedIn: https://www.linkedin.com/in/hariharan-m

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the MIT License.
