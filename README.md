TradeSphere – Import-Export Management Web Application

TradeSphere is a full-stack import–export management system where users can:

Add products for export

Import products with quantity validation

Track personal exports and imports

Update and delete exported products

View product details with stock management

Enjoy modern UI with DaisyUI + Tailwind

Use Firebase authentication

Light/Dark Mode Toggle

This application is built for MERN-style projects with a Node.js backend deployed on Vercel and React frontend deployed on Netlify.

🚀 Live Demo
🔗 Frontend (Netlify)

👉 Add your deployed URL here

🔗 Backend (Vercel)

👉 https://tradesphere-server.vercel.app/

🛠 Tech Stack
Frontend

React (Vite)

React Router (v6)

TailwindCSS + DaisyUI

Firebase Authentication

React Icons

React Toastify

Swiper.js (Banner slider)

Backend

Node.js

Express.js

MongoDB Atlas

Vercel Serverless Deployment

✨ Core Features
🔐 Authentication

Email + Password login & registration

Google Sign-in

Protected routes using PrivateRoute component

📦 Product Management

Add new export product

Each product contains:

Product image

Name

Price

Origin country

Rating

Available quantity

Update product details (modal with prefilled form)

Delete product from DB + UI

🚚 Import Functionality

Import a product from the Product Details page

Validates quantity (cannot exceed available stock)

available_quantity automatically decreases using MongoDB $inc

📊 My Exports

Shows all products added by the logged-in user

Update or delete items

Table layout with actions

📥 My Imports

Shows the user’s own imported products

Remove from imports

“See Details” brings user to Product Details page

🎨 UI/UX

Fully responsive

Light/Dark mode toggle

Modern card layout

Animated Hero Banner (Swiper.js)

Gradient buttons & clean table design

⚙️ Backend Setup (Node + Express)
Install dependencies:
npm install

Environment Variables:

Create .env (if using env file):

MONGO_URI=your-mongo-connection-string

Run locally:
npm start

Deploy to Vercel:
vercel

Vercel automatically builds the serverless Express API.

🌐 Frontend Setup (React + Vite)

Inside /client folder:

npm install
npm run dev

Create .env file
VITE_API_URL=https://tradesphere-server.vercel.app
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
...

Deploy to Netlify
netlify deploy
