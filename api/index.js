const express = require('express');
const connectDB = require('./db.js');
const cors = require('cors');
const path = require('path');
const jwt = require("jsonwebtoken");

const defalutroute = require('./routes/default');
const scraper = require('./routes/scraper');


const app = express();

//Connect Database
connectDB();

// allow cross-origin requests
app.use(cors());

//Bodyparser Middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
 
// Set up JWT authentication middleware
// app.use(async (req, res, next) => {
//   console.log("test middleware Jwt") 
//   console.log(req.body)
// //   const authHeader =  req.headers["authorization"];
// //   // if(!authHeader){
// //   //   req.isAuth = false;
   
// //   //   return next();
// //   // }
// //   if( authHeader){
// //   const token = authHeader.split(" ")[1];

// //   console.log("-----------------------------> Token : "+token)
// //   if (token !== "null" || token == undefined) {
// //     try {
// //       const currentUser = await jwt.verify(token, "process.env.SECRET");
// //       req.currentUser = currentUser;
// //       req.isAuth=true;
      
// //       req.isAdmin = (currentUser.role === "admin") ? true : false
// //       console.log("current User -----------------|")
// //       console.log (currentUser)
// //     } catch (err) {
// //       console.log("-----------auth error generated---------------")
// //        console.error(err);
       
// //       req.isAuth = false;
// //     }
   
// //   }
// //   else {
// //     // console.log("-09090909090909---")
// //     req.isAuth = false;
// //   }
// // }

//   next();
// });

app.use('/api/v1/auth', defalutroute);
app.use('/api/v1/scraper', scraper);


app.use(express.static('../build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    console.log(path.join(__dirname, '../build/index.html'))
//   }

const port = process.env.PORT || 4006;

app.listen(port, ()=>console.log(`Server started on port ${port}`))