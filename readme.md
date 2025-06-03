# 🎓 School Management System Task (MERN + PostgreSQL)

## 📌 Objective

Build a **School Management System** using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), **but with PostgreSQL** as the primary database instead of MongoDB. This project must **fully utilize PostgreSQL query capabilities**, covering both basic and advanced SQL features.

---

## 🧰 Tech Stack

| Layer           | Technology                                                     |
| --------------- | -------------------------------------------------------------- |
| Frontend        | React.js, Tailwind CSS / Bootstrap, React Hook Form, Zod / Yup |
| Backend         | Node.js, Express.js                                            |
| ORM             | Sequelize / Knex.js                                            |
| Database        | PostgreSQL                                                     |
| Auth (optional) | JWT or OAuth (Google/Facebook)                                 |
| Deployment      | Render / Railway / Vercel                                      |

---

## 📚 PostgreSQL Concepts to Use

Your implementation **must** use:

- `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- `JOINs`: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`
- `GROUP BY`, `HAVING`
- Subqueries
- Common Table Expressions (CTEs)
- Window Functions (`RANK()`, `ROW_NUMBER()`, etc.)
- Indexes
- Transactions (`BEGIN`, `COMMIT`, `ROLLBACK`)
- Views / Materialized Views
- Full-text Search (optional)
- Stored Procedures (optional)

---

## 📦 Modules to Build

### 1. 👩‍🎓 Student Management

- Add, update, delete, and fetch students
- Filter/search by class, age, gender
- Example: `SELECT * FROM students WHERE class = '10' AND age > 15;`

### 2. 👨‍🏫 Teacher Assignment

- Assign teachers to subjects and classes
- Show subject + teacher using JOIN queries

### 3. 📆 Attendance System

- Record daily attendance
- Generate monthly attendance summary using `GROUP BY` and CTEs

### 4. 📝 Result Management

- Add marks, calculate average
- Use window functions to rank students within a class

### 5. 📣 Notice Board

- Create, edit, and delete notices
- Implement full-text search
- Show recent notices using materialized views

### 6. 🔐 User Roles & Permissions

- Role-based access (Admin, Teacher, Student)
- JWT authentication or session-based login

---

## 🧪 Bonus Tasks (Optional)

- Use PostgreSQL stored procedures or triggers for automatic actions
- Add calendar view for attendance using FullCalendar in React
- Add a mobile-friendly UI

---

## 📂 Folder Structure Suggestion

---

## 🚀 Deployment

- Frontend: Vercel / Netlify
- Backend: Render / Railway
- DB: Railway PostgreSQL or Supabase

---

## 🧠 Evaluation Criteria

| Criteria                         | Weight |
| -------------------------------- | ------ |
| PostgreSQL Feature Usage         | 30%    |
| Clean, Modular Code              | 20%    |
| UI/UX & Functionality            | 20%    |
| Project Structure & Code Quality | 15%    |
| Bonus Features                   | 15%    |

---

## 📅 Deadline

- **Start Date:** [Insert Start Date]
- **Deadline:** [Insert Deadline]
- Submit GitHub repo + demo link (if deployed)

---

## 👨‍💻 Developer Notes

- Use meaningful commit messages
- Create a `.env.example` file for environment variables
- Make sure to write proper README and API documentation

Happy coding!
