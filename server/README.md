# Tokopedia Play Clone - Backend

This repository contains the backend code for the Tokopedia Play Clone web application. The backend is built using Node.js, Express.js, MongoDB, and Mongoose to provide API endpoints for managing products, comments, and videos.

## Table of Contents

- [Database Structure](#database-structure)
- [API Structure](#api-structure)
- [API Request and Response](#api-request-and-response)
- [How to Run Locally](#how-to-run-locally)
- [Technologies Used](#technologies-used)

## Database Structure

The backend utilizes a MongoDB database with the following schema structure for each collection:

### Video Schema

- `videoID`: String (required) - The title of the video.
- `urlImageThumbnail`: String - A brief description of the video.
- `titleImageThumbnail`: String (required) - The URL of the YouTube video.

### Comment Schema

- `username`: String (required) - The ID of the video the comment is associated with.
- `comment`: String (required) - The username of the commenter.
- `timestamp`: String (required) - The content of the comment.

### Product Schema

- `productID`: String (required) - The ID of the product.
- `urlProduct`: String - The URL of the product.
- `titleProduct`: String - The title of the product.
- `priceProduct`: Number - The price of the product.
- `videoID`: String - The ID of the associated video for the product.

## API Structure

The backend provides the following API endpoints:

### Videos

- **GET** `/api/videos`: Retrieve all videos from the database.
- **GET** `/api/videos/:id`: Retrieve a single video by ID.
- **POST** `/api/videos`: Create a new video.

### Comments

- **GET** `/api/comments`: Retrieve all comments from the database.
- **POST** `/api/comments`: Create a new comment.

### Products

- **GET** `/api/products`: Retrieve all products from the database.

## API Request and Response

### Videos

- **GET** `/api/videos`

  **Response:**

  ```
  Status: 200 OK
  Content-Type: application/json

  [
    {
      "_id": "video_id_1",
      "title": "Video Title 1",
      "description": "Video description 1",
      "youtubeUrl": "https://www.youtube.com/watch?v=video_id_1"
    },
    {
      "_id": "video_id_2",
      "title": "Video Title 2",
      "description": "Video description 2",
      "youtubeUrl": "https://www.youtube.com/watch?v=video_id_2"
    },
    // More videos...
  ]
  ```

- **GET** `/api/videos/:id`

  **Response:**

  ```
  Status: 200 OK
  Content-Type: application/json

  {
    "_id": "video_id",
    "title": "Video Title",
    "description": "Video description",
    "youtubeUrl": "https://www.youtube.com/watch?v=video_id"
  }
  ```

- **POST** `/api/videos`

  **Request:**

  ```
  Content-Type: application/json

  {
    "title": "New Video Title",
    "description": "New Video description",
    "youtubeUrl": "https://www.youtube.com/watch?v=new_video_id"
  }
  ```

  **Response:**

  ```
  Status: 201 Created
  Content-Type: application/json

  {
    "_id": "new_video_id",
    "title": "New Video Title",
    "description": "New Video description",
    "youtubeUrl": "https://www.youtube.com/watch?v=new_video_id"
  }
  ```

- **PUT** `/api/videos/:id`

  **Request:**

  ```
  Content-Type: application/json

  {
    "title": "Updated Video Title",
    "description": "Updated Video description",
    "youtubeUrl": "https://www.youtube.com/watch?v=updated_video_id"
  }
  ```

  **Response:**

  ```
  Status: 200 OK
  Content-Type: application/json

  {
    "_id": "updated_video_id",
    "title": "Updated Video Title",
    "description": "Updated Video description",
    "youtubeUrl": "https://www.youtube.com/watch?v=updated_video_id"
  }
  ```

- **DELETE** `/api/videos/:id`

  **Response:**

  ```


  Status: 200 OK
  Content-Type: application/json

  {
    "_id": "deleted_video_id",
    "title": "Deleted Video Title",
    "description": "Deleted Video description",
    "youtubeUrl": "https://www.youtube.com/watch?v=deleted_video_id"
  }
  ```

### Comments

- **GET** `/api/comments`

  **Response:**

  ```
  Status: 200 OK
  Content-Type: application/json

  [
    {
      "_id": "comment_id_1",
      "videoId": "video_id_1",
      "username": "User123",
      "comment": "This is a comment for video_id_1"
    },
    {
      "_id": "comment_id_2",
      "videoId": "video_id_2",
      "username": "User456",
      "comment": "This is a comment for video_id_2"
    },
    // More comments...
  ]
  ```

- **POST** `/api/comments`

  **Request:**

  ```
  Content-Type: application/json

  {
    "videoId": "video_id",
    "username": "User789",
    "comment": "This is a new comment for video_id"
  }
  ```

  **Response:**

  ```
  Status: 201 Created
  Content-Type: application/json

  {
    "_id": "new_comment_id",
    "videoId": "video_id",
    "username": "User789",
    "comment": "This is a new comment for video_id"
  }
  ```

- **PUT** `/api/comments/:id`

  **Request:**

  ```
  Content-Type: application/json

  {
    "username": "UpdatedUser",
    "comment": "This is an updated comment"
  }
  ```

  **Response:**

  ```
  Status: 200 OK
  Content-Type: application/json

  {
    "_id": "updated_comment_id",
    "videoId": "video_id",
    "username": "UpdatedUser",
    "comment": "This is an updated comment"
  }
  ```

- **DELETE** `/api/comments/:id`

  **Response:**

  ```
  Status: 200 OK
  Content-Type: application/json

  {
    "_id": "deleted_comment_id",
    "videoId": "video_id",
    "username": "User789",
    "comment": "This is a deleted comment for video_id"
  }
  ```

### Products

- **GET** `/api/products`

  **Response:**

  ```
  Status: 200 OK
  Content-Type: application/json

  [
    {
      "_id": "product_id_1",
      "productID": "product_001",
      "urlProduct": "https://example.com/product_001",
      "titleProduct": "Product 001",
      "priceProduct": 100,
      "videoID": "video_id_1"
    },
    {
      "_id": "product_id_2",
      "productID": "product_002",
      "urlProduct": "https://example.com/product_002",
      "titleProduct": "Product 002",
      "priceProduct": 200,
      "videoID": "video_id_2"
    },
    // More products...
  ]
  ```

## How to Run Locally

To run the backend locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory in your terminal.

3. Install the dependencies by running the following command:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and set the following environment variables:

   ```
   PORT=5000
   MONGODB_URI=YOUR_MONGODB_CONNECTION_URI
   ```

   Replace `YOUR_MONGODB_CONNECTION_URI` with your actual MongoDB connection URI.

5. Start the server by running the following command:

   ```
   npm start
   ```

   The backend server will be running on `http://localhost:5000`.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

---
