const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // Covierte en json todo lo que se envie en el navegador
app.use(cors({origin: 'http://localhost:4200'})); //Configura los headers Access-Control-Allow-Origin

// Routes
app.use('/api/posts',require('./routes/posts.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});