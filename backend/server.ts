const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const app = express();
const cors = require('cors');

const CLIENT_ID = 'Ov23liZtZ9oRofXA6IXI';
const CLIENT_SECRET = 'b5d425c9003cfb5021f1da23ebeff23f72ed53e1';
const REDIRECT_URI = 'http://localhost:5000/auth/github/callback';

app.use(cors({
  origin: 'http://localhost:5173',  // Replace with the correct frontend URL in production
  credentials: true,  // Allow cookies/session to be sent with requests
}));

app.get('/auth/github/login', (req, res) => {
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user`;
  res.redirect(githubAuthUrl);
});

app.get('/auth/github/callback', async (req, res) => {
  const { code } = req.query;
  const data = querystring.stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: REDIRECT_URI,
  });

  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const accessToken = querystring.parse(response.data).access_token;
    const redirectUrl = `http://localhost:5173/dashboard?access_token=${accessToken}`;
    res.redirect(redirectUrl);
  } catch (error) {
    res.send('Error authenticating user');
  }
});

app.get('/api/user/:access_token', async (req, res) => {
  const accessToken = req.params.access_token;

  if (!accessToken) {
    return res.status(400).send('Access token is required');
  }

  try {
    // Use the access token to fetch the user's data from GitHub
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const user = userResponse.data;
    res.json(user);
  } catch (error) {
    res.status(500).send('Error fetching user data');
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
