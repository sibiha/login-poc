// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const GitHubStrategy = require('passport-github2').Strategy;
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // GitHub OAuth credentials
// const CLIENT_ID = 'Ov23liZtZ9oRofXA6IXI';
// // const CLIENT_SECRET = '0c05a560ebbbf0eb295ad272030741f30e17bb88';
// // const CLIENT_SECRET = '94806b9eed8abf175f47c26bcd43bff1179510c3'
// const CLIENT_SECRET = '392b8cf1e0d4a257d2f4ae9f82d9b48189a0b9e8'
// const CALLBACK_URL = 'http://localhost:5000/auth/github/callback';

// app.use(cors({
//   origin: 'http://localhost:5173',  // Replace with the correct frontend URL in production
//   credentials: true,  // Allow cookies/session to be sent with requests
// }));

// // Set up session middleware
// app.use(
//   session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// // Initialize passport
// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: CLIENT_ID,
//       clientSecret: CLIENT_SECRET,
//       callbackURL: CALLBACK_URL,
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       // Save user profile information in session
//       return done(null, { profile, accessToken });
//     }
//   )
// );

// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));

// app.use(passport.initialize());
// app.use(passport.session());

// // GitHub OAuth route
// app.get('/auth/github/login', passport.authenticate('github', { scope: ['user'] }));

// // GitHub callback route
// app.get('/auth/github/callback',
//   passport.authenticate('github', { failureRedirect: '/' }),
//   (req, res) => {
//     // On successful login, redirect to the dashboard
//     res.redirect('http://localhost:5173/dashboard');
//   }
// );

// // Get user info (from GitHub API)
// app.get('/api/user', (req, res) => {
//   if (req.isAuthenticated()) {
//     const user = req.user.profile;
//     res.json(user);
//   } else {
//     res.status(401).json({ message: 'Not authenticated' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
