# 🔗 Shortify – URL Shortener

A full-stack URL Shortener built using React and FastAPI that converts long URLs into short, shareable links.

🌐 **Live Demo:** https://url-shortener-rosy-alpha.vercel.app/

## ✨ Features

- Generate unique 6-character short URLs
- Redirect short URLs to original URLs
- Copy shortened URLs with one click
- View URL history
- Delete shortened URLs
- Store URLs persistently in PostgreSQL
- REST API powered by FastAPI

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, Vite, CSS |
| Backend | Python, FastAPI |
| ORM | SQLAlchemy |
| Database | Neon PostgreSQL |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

## 🏗️ Architecture

Browser → React Frontend (Vercel) → FastAPI Backend (Render) → Neon PostgreSQL Database

## 🔗 API Documentation

https://url-shortener-hcy8.onrender.com/docs

## 🚀 Live Application

https://url-shortener-rosy-alpha.vercel.app/

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/priyankasandal1910-gif/url-shortener.git
cd url-shortener
```

### 2. Backend Setup

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run locally using Vite.

## 👩‍💻 Author

**Priyanka Sandal**
