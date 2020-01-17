const express = require('express');
const app = express();

//import Routes
const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(5000, () => console.log('Server is Up and running'));