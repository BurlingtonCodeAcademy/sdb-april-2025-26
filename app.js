// module sytax
// import express from 'express';

// commonjs syntax
const express = require('express');

// Create an instance of an Express application
const app = express()

// Define the port number
const PORT = 8080;

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"))

// GET - /welcome - Responds with a welcome message
app.get("/welcome", (req, res) => {
    res.send('Happy Wednesday! No class tomorrow!')
})

// POST - /submit-form - Handles form submission and response with a message
// expects a form with "username" and "email" values
app.post("/submit-form", (req, res) => {
    const { username, email } = req.body

    console.log(`Username: ${username}, Email: ${email}`)
    res.send(`Form submitted successfully! Username: ${username}, Email: ${email}`)
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})