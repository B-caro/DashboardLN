const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//initialitations
const app=express();

//midlewares
app.use(cors({origin:'http://localhost:8080'}));

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//variables
app.set('port', process.env.PORT || 3000);

//router 
app.use('/api',require('./routers/getMethods'));

//start server
const server = app.listen(app.get('port'),()=>{
    console.log('Server on port ', app.get('port'));
});
