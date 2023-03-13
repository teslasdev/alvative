
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require("dotenv");
const path = require("path");
const connect = require('./database/conn')

const router = require('./router/routes.js');

const PORT = process.env.PORT || 5000;
// const publicPath = path.resolve(__dirname, "client", "build");

// // Load environment variables via config.env if in development
// if (process.env.NODE_ENV === "development") {
//   dotenv.config({ path: "./config/config.env" });
// }

const app = express()

// if (process.env.NODE_ENV === "production") {
//     app.use(morgan("dev"));
//   }
  
//   app.use(express.json({ limit: "5mb" }));
//   app.use(express.urlencoded({ extended: true, limit: "5mb" }));


// Middlewares
app.use(express.json())
app.use(cors());
app.use(morgan());
app.disable('x-powered-by'); //less hackers know about our stack

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(publicPath));
  
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(publicPath, "index.html"));
//     });
// }

app.get('/',(req,res) => {
    res.status(201).json("Home Get Request")
})


    

// Api routes

app.use('/api', router);

// Start server only when we have valid connection

connect().then(() => {
    try {
        app.listen(PORT,() => {
            console.log(`server connected to https://localhost:${PORT}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
})




