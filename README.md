NAME- ESHIKA KULHADE

COMPANY- CODTECH IT SOLUTIONS

ID- CT08DS10360

DOMAIN- FULL STACK WEB DEVELOPMENT

DURATION- NOVEMBER TO DECEMBER 2024

Project Overview: Recipe Sharing Platform
The Recipe Sharing Platform is a full-stack web application that allows users to share, view, and manage recipes. This project uses React.js for the front end and Express.js for the back end, with MongoDB as the database. The platform enables user authentication, CRUD operations for recipes, and secure access to user-specific data.

Core Features
User Registration and Login:

New users can register with their name, email, and password.
Authentication is managed using JWT (JSON Web Token) for secure access.
Recipe Management (CRUD):

Create: Users can add new recipes by providing the title, ingredients, and instructions.
Read: Users can view all their saved recipes.
Update: Users can update their existing recipes.
Delete: Users can delete recipes they no longer want to keep.
Secure Routes:

Routes for managing recipes are protected and only accessible to authenticated users.
State Management:

React Context API is used for managing user authentication state across components.
Clean API Integration:

Axios is used for HTTP requests to interact with the back-end RESTful API.

Key Functionalities
User Authentication:

Registration and Login with encrypted passwords using bcrypt.
Token-based authentication ensures secure access.
Recipe Management:

Users can create, view, update, and delete their recipes.
Recipes include a title, ingredients, and instructions.
Persistent Storage:

Recipes and user details are stored securely in the MongoDB database.
User-Specific Access:

Recipes are private to each user and cannot be accessed by others.
How It Works
Registration and Login:

Users register or log in to their accounts.
A JWT token is issued upon successful login, enabling secure communication.
Recipe Operations:

Authenticated users can manage their recipes using intuitive UI components.
Data is fetched and updated using RESTful APIs via Axios.
Navigation:

The React Router handles navigation between different pages, such as Login, Registration, and the Recipe Dashboard.
Project Folder Structure
The project is divided into two main folders:

Backend: Manages the server, routes, database, and authentication logic.
Frontend: Contains React components, context management, and API integration.
Future Enhancements
Add support for image uploads for recipes.
Implement a public recipe feed where users can share recipes with the community.
Include search and filter functionalities to improve user experience.
Ideal Use Cases
Users who want to organize and manage their favorite recipes.
Aspiring chefs looking for a platform to share their creations.
A community-driven recipe-sharing hub for food lovers.
