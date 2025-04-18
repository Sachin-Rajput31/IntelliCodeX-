require('dotenv').config();
const express = require('express');
const aiRoutes = require('./src/routes/ai.routes.js');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/auth.js')
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Middleware for JSON parsing
app.use('/ai', aiRoutes); // Mount AI routes
app.use('/api/auth',authRoutes);


mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('mongodb connected'))
.catch(err=>console.log('mongo not connected',err)
);




app.get('/',(req, res)=>{
    res.send('Hello World');
})

console.log("✅ Routes loaded"); // Debugging log

module.exports = app;
