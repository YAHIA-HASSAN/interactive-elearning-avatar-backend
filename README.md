<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&color=7C3AED&center=true&vCenter=true&width=600&lines=ELLIE+%F0%9F%A4%96;Interactive+E-Learning+Avatar;AI-Powered+Education+Companion" alt="Typing SVG" />

<br/>

![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)

<br/>

> **ELLIE** is an AI-powered interactive e-learning mobile avatar that detects learner concentration in real-time and dynamically adapts its teaching responses — making education smarter, more engaging, and personalized.

<br/>

[![GitHub](https://img.shields.io/badge/Backend_Repo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YAHIA-HASSAN/interactive-elearning-avatar-backend)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [AI Models & Accuracy](#-ai-models--accuracy)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Team](#-team)

---

## 🎯 About

In the modern educational landscape, attention spans are challenged and engagement is critical. **ELLIE** addresses this by combining:

- 🧠 **Real-time concentration detection** via computer vision
- 🗣️ **Interactive AI avatar** that explains content and answers questions
- 📄 **PDF summarization** powered by Chat PDF API + Gemini AI
- 🎭 **Adaptive responses** — ELLIE changes behavior based on whether you're focused or distracted

> Built as a **Graduation Project** at Minia University, Faculty of Computers & Information — Computer Science (Sep 2023 – Jun 2024)
>
> Supervised by: **Dr. Eman Mamdouh** & **Eng. Amir Mustafa**

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎯 **Focus Detection** | Real-time concentration analysis using 3 CNN models |
| 📄 **PDF Summarization** | Upload any PDF — ELLIE summarizes and explains it interactively |
| 💬 **AI Conversations** | Ask ELLIE any question; powered by Gemini AI |
| 🗣️ **Speech Interaction** | Full speech-to-text and text-to-speech support |
| 🎭 **3D Animated Avatar** | Custom avatar built with Playme, Blender & DeepMotion |
| 📱 **Cross-Platform** | Runs on both Android (9+) and iOS (12+) |
| 🔒 **Secure Auth** | Encrypted signup, JWT authentication, hashed passwords |
| 📋 **Export Conversations** | Copy any conversation as a PDF |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Flutter Mobile App                   │
│         (iOS & Android — Dart/Flutter Framework)        │
└──────────────┬──────────────────────────┬───────────────┘
               │                          │
               ▼                          ▼
┌──────────────────────┐    ┌─────────────────────────────┐
│   Node.js/Express    │    │     Python AI Service       │
│     REST API Layer   │    │   (Concentration Detection) │
│                      │    │                             │
│  • User Management   │    │  • Eye Closure CNN (98.4%)  │
│  • Conversations     │    │  • Yawn Detection CNN(98.7%)│
│  • Messages          │    │  • Gaze Direction CNN(83.5%)│
│  • PDF Files         │    │  • EyeTracker Processing    │
└──────────┬───────────┘    └─────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────────────────────┐
│                    External APIs                         │
│   Chat PDF API  •  Gemini AI  •  Speech APIs             │
└──────────────────────────────────────────────────────────┘
           │
           ▼
┌──────────────────────┐
│       MongoDB        │
│  Users • Messages    │
│  Conversations • PDFs│
└──────────────────────┘
```

The system uses **Event-Driven Architecture (EDA)** — components communicate asynchronously via events, enabling decoupling, scalability, and flexibility.

---

## 🤖 AI Models & Accuracy

ELLIE uses **3 CNN models** trained on a Kaggle dataset of **84,898 images** to classify learner concentration state as `Focused` or `Distracted`:

| Model | Task | Dataset | Accuracy |
|---|---|---|---|
| `sequential` | 👁️ Eye Closure Detection | 84,898 images, 37 subjects | **98.4%** |
| `sequential` | 😮 Yawn Detection | 322+ videos, in-car camera | **98.7%** |
| `sequential_3` | 👀 Gaze Direction | Multi-sensor eye images | **83.5%** |

**Model Architecture (all 3 models):**
```
Conv2D (32 filters, 3×3) → Flatten → Dense (128) → Dense (2)
Total params: 15,746,306 (60.07 MB)
```

**GazeFollowing Model:**
Based on MPIIGaze & Gaze360 — predicts gaze direction using a 2-stage pipeline:
- Stage I: Predict gaze direction from head image + position
- Stage II: Estimate heatmap along gaze direction

---

## 🛠️ Tech Stack

### Mobile
| Technology | Purpose |
|---|---|
| **Flutter / Dart** | Cross-platform mobile app (iOS & Android) |
| **Playme** | Avatar customization |
| **Blender** | 3D avatar modeling & rigging |
| **DeepMotion** | AI-driven avatar animation |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express.js** | REST API layer |
| **Python + TensorFlow** | CNN models & AI processing |
| **MongoDB + Mongoose** | Database |
| **JWT** | Authentication |
| **Crypto (SHA-265)** | Password & data encryption |

### External APIs
| API | Purpose |
|---|---|
| **Chat PDF API** | PDF summarization |
| **Gemini AI** | Conversational AI & Q&A |
| **Speech-to-Text** | Voice input processing |
| **Text-to-Speech** | Avatar voice output |

### Deployment
| Service | Purpose |
|---|---|
| **Render** | Backend deployment |
| **MongoDB Atlas** | Cloud database |

---

## 📁 Project Structure

```
interactive-elearning-avatar-backend/
│
├── 📁 models/                  # Mongoose schemas
│   ├── user.model.js           # User schema (name, email, password, age)
│   ├── conversation.model.js   # Conversation schema
│   ├── message.model.js        # Message schema
│   └── pdf_file.model.js       # PDF file paths schema
│
├── 📁 controllers/             # Business logic
│   ├── user.controller.js      # CRUD for users
│   ├── conversation.controller.js
│   └── message.controller.js
│
├── 📁 middlewares/             # Request validation
│
├── 📁 routes/                  # API routes
│
├── 📁 ml_models/               # Python AI service
│   ├── core/
│   │   ├── eye_tracker.py      # Main concentration detection
│   │   ├── landmark_detection.py
│   │   ├── blink_ratio.py
│   │   └── eye_position.py
│   └── api/
│       └── image_view.py       # Django REST endpoint
│
└── server.js                   # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 16
Python >= 3.8
Flutter >= 3.0
MongoDB
```

### Backend Setup (Node.js)
```bash
# Clone the repo
git clone https://github.com/YAHIA-HASSAN/interactive-elearning-avatar-backend.git
cd interactive-elearning-avatar-backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Fill in: MONGO_URI, JWT_SECRET, CHATPDF_API_KEY, GEMINI_API_KEY

# Start the server
npm start
```

### Python AI Service
```bash
cd ml_models

# Install dependencies
pip install -r requirements.txt
# (tensorflow, opencv-python, django, djangorestframework)

# Run the AI API
python manage.py runserver
```

### Flutter App
```bash
cd flutter_app

# Install dependencies
flutter pub get

# Update API base URL in lib/core/constants.dart

# Run on device/emulator
flutter run
```

---

## 📡 API Endpoints

### Auth & Users
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/users/signup` | Register new user |
| `POST` | `/api/users/login` | Login & get JWT |
| `GET` | `/api/users/:email` | Get user by email |
| `PUT` | `/api/users/:email` | Update user |
| `DELETE` | `/api/users/:email` | Delete user |

### Conversations
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/conversations/:userId` | Get all conversations |
| `POST` | `/api/conversations` | Create new conversation |
| `PUT` | `/api/conversations/:id` | Update conversation |
| `DELETE` | `/api/conversations/:id` | Delete conversation |

### Messages
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/messages` | Add user + avatar message |
| `GET` | `/api/messages/:conversationId` | Get all messages |
| `DELETE` | `/api/messages/:id` | Delete message |

### AI / Concentration
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/concentration/analyze` | Send frame → get `Focused` or `Distracted` |

---

## 👥 Team

| Name | Role |
|---|---|
| **Yahia Hassan** | 🔧 Backend Development (Node.js/Express.js) · System Architecture · ERD |
| **Fatma Mansour** | 🤖 AI Models Integration · System Requirements · Work Planning |
| **Aliaa Salah** | 📊 Data Analysis · Datasets Gathering · Feasibility Study · Functional Requirements |
| **Nermin Mohammed** | 🎨 UI/UX Design · System Architecture · Domain Model |
| **Yara Abdelanser** | 🔒 Security Implementation · Use Cases · Sequence Diagrams · Risk Management |
| **Moaz Ragab** | 🧑‍🎨 Avatar Modeling & Creation · Business Model · Database Script |
| **Mostafa Abdelraziq** | 📱 Flutter Mobile App Development |

> 🎓 **Minia University** — Faculty of Computers & Information, Computer Science
> Supervised by **Dr. Eman Mamdouh** & **Eng. Amir Mustafa**

---

## 📊 Economic Highlights

| Metric | Value |
|---|---|
| ROI | **32.03%** |
| Break-even Point | **2.23 years** |
| Projected Users (Year 2) | **2,000 subscribers** |

---

<p align="center">

**Made with ❤️ at Minia University**

⭐ Star this repo if you found it useful!

</p>
