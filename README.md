## Contacts API

This is a backend project for managing contacts using Node.js and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/SOliyhan/contacts-api.git
   ```

2. Navigate to the project directory:
   ```sh
   cd contacts-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the server (for locall):
   ```sh
   npm start
   ```
2. The API will be running at `http://localhost:5001`.
3. The API is also deployed on `https://contacts-api-bcv1.onrender.com`
4. Use tools like Postman, Thunder Client, etc to access the endpoints.

## API Endpoints

### Users

- **POST api/users/register**: Register a user.
- **POST api/users/login**: login user.
- **GET api/users/current**: current user details.

### Contacts

- **GET api/contacts**: Retrieve a list of contacts.
- **POST api/contacts**: Create a new contact.
- **GET api/contacts/:id**: Retrieve a specific contact by ID.
- **PUT api/contacts/:id**: Update a specific contact by ID.
- **DELETE api/contacts/:id**: Delete a specific contact by ID.

## Configuration

The application can be configured using environment variables. Create a `.env` file in the root directory and add the necessary variables.

Example:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/contacts
```
