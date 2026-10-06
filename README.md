# 🔗 Shortify — URL Shortener

A full-stack URL Shortener that converts long URLs into short, shareable links.

🌐 **Live Demo:** https://url-shortener-rosy-alpha.vercel.app/

---

## 📌 Overview

Shortify is a full-stack URL shortening application built with React and FastAPI.

Users can:
- Create short URLs from long URLs
- Open short URLs and get redirected to the original URL
- View previously created URLs
- Copy shortened URLs
- Delete shortened URLs

The application uses a React frontend deployed on Vercel, a FastAPI backend deployed on Railway, and MySQL for persistent data storage.

---

## 🚀 Features

- 🔗 Generate unique 6-character short URLs
- ⚡ Fast URL shortening
- 🔄 Automatic redirection to original URLs
- 📋 Copy shortened URLs
- 🗂️ View URL history
- 🗑️ Delete shortened URLs
- 💾 Persistent storage using MySQL
- 🌐 Fully deployed and accessible online
- 🔒 CORS-enabled API
- ♻️ Existing URLs return their previously generated short URL

---

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │      User / Browser  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React Frontend     │
                    │      Vercel          │
                    └──────────┬───────────┘
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │   FastAPI Backend    │
                    │      Railway         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      MySQL DB        │
                    │      Railway         │
                    └──────────────────────┘
