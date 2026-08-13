# Full-Stack AMOLED Blog Application

A responsive, full-stack blog application featuring secure JWT authentication, private dashboard routes, a user profile system, category filters, and search functionality. The UI is designed with a premium skeuomorphic AMOLED black style.

---

## 🌟 Acknowledgement & Appreciation

This project was built as part of the software engineering internship program. Special thanks to **[Codomax Digital Solutions](https://www.codomaxdigital.in)** for providing this enriching internship opportunity, structural guidance, and design specifications.

---

## 🚀 Key Features

* **Secure Authentication**: Register and Login features using secure hashed passwords (via `bcryptjs`) and secure session tracking via JSON Web Tokens (JWT).
* **Guarded Routing**: Private routes (`/dashboard`, `/profile`, `/create`, `/edit/:id`) protected by a client-side React Router guard, redirecting unauthorized users to `/login`.
* **Public Feed**: Accessible to all guests; displays published blogs with category tags, authorship, and formatted creation timestamps. Guests cannot create, edit, or delete articles.
* **Personal Dashboard**: Authorized area displaying profile statistics (e.g., total articles authored) and a listing of the user's *own* blog posts with options to edit or delete them.
* **User Profile**: A dedicated profile view loading metadata retrieved securely from the backend API.
* **Server-side Search**: Instantly query titles and contents matching search keywords.
* **Category Filters**: Filter posts by categories such as *Technology*, *Lifestyle*, *Travel*, *Business*, *Food*, or *General*.
* **Deployment Blueprints**: Included config structures ready for deployment on **Render** (backend) and **Vercel** (frontend).

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite), React Router v6, Lucide Icons, Vanilla CSS (with custom AMOLED skeuomorphic variables).
* **Backend**: Node.js, Express.js (v5), Mongoose (MongoDB).
* **Security**: JWT (JsonWebToken) and bcryptjs.