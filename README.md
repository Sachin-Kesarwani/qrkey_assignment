My Project

Overview

This project is a React-based web application that manages users and posts. It follows a structured folder architecture and utilizes dynamic routing for individual user and post details.

Folder Structure

app/
  ├── users/
  │   ├── page.jsx
  │   ├── [id]/
  │   │   ├── page.jsx
  │   │   ├── loading.jsx
  │
  ├── posts/
  │   ├── page.jsx
  │   ├── [id]/
  │   │   ├── page.jsx
  │   │   ├── loading.jsx
  │
src/
  ├── components/
  │   ├── Navbar.jsx
  │   ├── UserCard.jsx
  │   ├── PostCard.jsx
  │   ├── UserDetails.jsx
  │   ├── PostDetails.jsx

Installation & Setup

Prerequisites

Node.js (>=16)

npm or yarn

Steps

Clone the Repository

git clone https://github.com/Sachin-Kesarwani/qrkey_assignment.git
cd <project-folder>

Install Dependencies

```npm install  ```

Run the Development Server

```npm run dev```

Open the App
The application will be available at:

http://localhost:3000

Features

User Management: ```View all users and their details.```

Post Management: ```View all posts and their details.```

Dynamic Routing: ```Users and posts have their own unique pages.```

Loading States: ```Separate loading.jsx files handle skeleton loaders.```

Approach

This project follows a modular approach:

Component Reusability: Created reusable components ```(UserCard, PostCard, UserDetails, PostDetails, Navbar)```.

Dynamic Routing: ```Used folder-based routing for users and posts.```

Efficient Data Fetching: ```Implemented loading states to enhance UX.```

Screenshots

Homepage
User Page
Post Page