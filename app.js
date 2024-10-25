const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    let usersHTML = '<h1>User List</h1>';
    users.forEach(user => {
      usersHTML += `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <hr>
      `;
    });

    res.send(usersHTML);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

module.exports = app;
