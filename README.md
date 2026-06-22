<!-- ═══════════ ANIMATED HEADER ═══════════ -->
<div align="center">
<!-- ═══════════ TYPING ANIMATION ═══════════ -->

<br/>

<!-- ═══════════ BADGES ═══════════ -->
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
&nbsp;
![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot&logoColor=6DB33F)
&nbsp;
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
&nbsp;
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
&nbsp;
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

<br/>

![Repo Size](https://img.shields.io/github/repo-size/Umangpandey75/FeedBack_Submission_System-main?style=flat-square&color=6AD3F7&label=Repo+Size)
&nbsp;
![Last Commit](https://img.shields.io/github/last-commit/Umangpandey75/FeedBack_Submission_System-main?style=flat-square&color=58A6FF&label=Last+Commit)
&nbsp;
![License](https://img.shields.io/github/license/Umangpandey75/FeedBack_Submission_System-main?style=flat-square&color=27AE60)

</div>

---

## 🌊 What is Feedback Submission System?

The **Feedback Submission System** is a robust, full-stack application designed to streamline the process of collecting, managing, and tracking user feedback. It features a modern, responsive React frontend coupled with a powerful Spring Boot and MySQL backend.

Whether you're managing customer queries, gathering user opinions, or tracking support tickets, this system provides a comprehensive, end-to-end solution.

> *"Listen to your users. Manage with ease. Improve continuously."*

### ✨ Core Philosophy
- 🎯 **Simplicity first** — clean and intuitive user interfaces
- ⚡ **Performance** — fast, optimized data handling with Spring Boot and Vite
- 🛡️ **Reliability** — robust data management using Spring Data JPA and MySQL

---

## 🚀 Features

<div align="center">

| Feature | Description | Status |
|---------|-------------|--------|
| 📝 **Feedback Submission** | Easy-to-use forms for users to submit feedback | ✅ Active |
| 🗂️ **Data Management** | View, organize, and paginate all submissions | ✅ Active |
| 🔍 **Search & Filtering** | Find specific feedback instantly by name or email | ✅ Active |
| 🔄 **Status Tracking** | Update submission statuses (e.g., Pending, Reviewed) | ✅ Active |
| 🗑️ **Entry Deletion** | Remove outdated or irrelevant feedback easily | ✅ Active |
| 📧 **Email Integration** | Built-in support for sending automated notifications | ✅ Active |

</div>

---

## 🛠️ Tech Stack

<div align="center">

### 🧠 Backend (Java & Spring Boot)
![Java](https://img.shields.io/badge/Java_21-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.4-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

### 🌐 Frontend (React & Vite)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### 🔧 Tools & DevOps
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

</div>

---

## 🗂️ Project Structure

```
📦 FeedBack_Submission_System-main/
├── 📂 feedback_form_frontend/      ← React SPA built with Vite
│   └── 📂 feedback-app/            ← Main frontend source code
├── 📂 feedback_form_submission/    ← Spring Boot Backend
│   ├── 📂 src/main/java/           ← Java source files (Controllers, Models, Repositories)
│   ├── 📄 pom.xml                  ← Maven dependencies
│   └── ...                         
└── 📖 README.md                    ← Project documentation
```

---

## ⚙️ Architecture Overview

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "background":         "#0a0e1a",
    "primaryColor":       "#1a1a2e",
    "primaryTextColor":   "#6AD3F7",
    "primaryBorderColor": "#58A6FF",
    "lineColor":          "#58A6FF",
    "secondaryColor":     "#16213e",
    "tertiaryColor":      "#0f3460",
    "fontFamily":         "Fira Code, monospace"
  }
}}%%
flowchart LR
    A["👤 User"] --> B["🌐 React Frontend\n(feedback_form_frontend)"]
    B -- "REST API (JSON)" --> C["⚙️ Spring Boot Backend\n(feedback_form_submission)"]
    C --> D["🗄️ MySQL Database"]
    C --> E["📧 Email Service"]
    
    subgraph Backend Services
    C --> F["Controller Layer"]
    F --> G["Repository Layer (JPA)"]
    G --> D
    end
```

---

## 🚦 Quick Start

### Prerequisites

- **Java 21** or higher
- **Node.js** and **npm**
- **MySQL** Server running locally or remotely

### 🗄️ Database Setup

1. Create a MySQL database for the application (e.g., `feedback_db`).
2. Update the `application.properties` or `application.yml` in the backend to match your database credentials.

### ⚙️ Run the Backend (Spring Boot)

```bash
# 1. Navigate to the backend directory
cd feedback_form_submission

# 2. Run the application using Maven
./mvnw spring-boot:run   # Linux/macOS
mvnw.cmd spring-boot:run # Windows
```
*The backend server will start at `http://localhost:8080`*

### 🖥️ Run the Frontend (React + Vite)

```bash
# 1. Navigate to the frontend directory
cd feedback_form_frontend/feedback-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```
*The Vite frontend will typically start at `http://localhost:5173`*

---

## 🌐 API Endpoints

<div align="center">

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/feedback` | Submit a new feedback entry |
| `GET` | `/feedback` | Retrieve paginated feedback (supports `page`, `size`, `search`) |
| `PUT` | `/feedback/{id}/status` | Update the status of a specific feedback entry |
| `DELETE` | `/feedback/{id}` | Delete a specific feedback entry |

</div>

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Here's how you can help:

```bash
# 1. Fork the repository on GitHub
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m '✨ Add AmazingFeature'

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request 🎉
```

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 👨💻 Author

<div align="center">

### **Umang Pandey**
*Python Developer · Data Analyst · ML Engineer*

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:umangpandey.co@gmail.com)
&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/umang-pandey-01b486273)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Umangpandey75)
&nbsp;
[![Portfolio](https://img.shields.io/badge/Portfolio-6AD3F7?style=for-the-badge&logo=vercel&logoColor=black)](https://umangpandey.vercel.app)

*"Query the data. Build the insight. Ship the WOW. ✨"*

</div>

---

## ⭐ Show Your Support

If **Feedback Submission System** helped you, please give it a ⭐ — it means the world!

<div align="center">

[![Star this repo](https://img.shields.io/badge/⭐_Star_this_repo-FFD700?style=for-the-badge)](https://github.com/Umangpandey75/FeedBack_Submission_System-main/stargazers)
&nbsp;
[![Fork this repo](https://img.shields.io/badge/🍴_Fork_it-58A6FF?style=for-the-badge)](https://github.com/Umangpandey75/FeedBack_Submission_System-main/fork)

</div>
---
<!-- ═══════════ FOOTER WAVE ═══════════ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f3460,40:16213e,70:1a1a2e,100:0d1117&height=120&section=footer" width="100%"/>

<div align="center">

*Made with ❤️ by [Umang Pandey](https://github.com/Umangpandey75) · © 2026 Feedback Submission System*

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=Umangpandey75.FeedBack_Submission_System-main&left_color=1F6FEB&right_color=6AD3F7&left_text=Visitors)
</div>
