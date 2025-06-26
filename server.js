// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define a schema and model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', UserSchema);

// Route: GET /
app.get('/', (req, res) => {
  res.send('Backend is running at http://localhost:8080/');
});

// Route: GET /users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Route: POST /users
app.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.json(savedUser);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
