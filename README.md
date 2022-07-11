# Social-Network-API

## Table of Contents
- [User Story](https://github.com/MaameSekyere/Social-Network-API#user-story)
- [Acceptance Criteria](https://github.com/MaameSekyere/Social-Network-API#acceptance-criteria)
- [Description](https://github.com/MaameSekyere/Social-Network-API#description)
- [Installation](https://github.com/MaameSekyere/Social-Network-API#installation)
- [Video Link](https://github.com/MaameSekyere/Social-Network-API#video-link)
- [Created By](https://github.com/MaameSekyere/Social-Network-API#created-by)

### User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

### Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

### Description

This application demonstrates using Express.js with Mongoose. It allows a user to create a backend which saves information into a MongoDB database. MongoDB is a NoSQL database structure. With this project, a user will be able to create a connection between the MongoDB and API routes. The user will be able to perform CRUD (Create, Read, Update, and Delete) data from the database. Testing the API routes will be done using Insomnia.

### Installation

$ npm install

### Application

$ npm start
Connected on localhost:8080

### Video Link

### Created By

[Maame Sekyere](https://github.com/MaameSekyere/Social-Network-API#Maame-Sekyere)
