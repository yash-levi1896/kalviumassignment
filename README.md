# kalviumassignment

This is the explaination for the authentication using jwt token.
## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
  - [User Routes](#user-routes)
  - [Category Routes](#category-routes)


  ## Getting Started

### Prerequisites

Before setting up the project, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yash-levi1896/kalviumassignment.git


2. Navigate to the project directory:

   ```bash
   cd E-commerce-API


3. Install dependencies:

   ```bash
   npm install


4. Create a .env file in the project root and configure your environment variables:

   ```bash
   PORT = any port number
   MongoURL=your-mongodb-connection-uri
   Secret_key=your-secret-key


5. Start the server:

   ```bash
   npm run server


## API Documentation

### User Routes

- **POST /user/register**: Register a new user.
- **POST /user/login**: Authenticate and log in a user.


### Category Routes

- **GET /category/getcategory**: Retrieve a list of all categories.
- **POST /category/addcategory**: Create a new category.
