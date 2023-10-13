const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { dbConnect } = require('./util/dbConnection.js');
const studRoute = require('./route/stud.route.js');
const adminRoute = require('./route/admin.route.js')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/student', studRoute);
app.use('/admin', adminRoute);

app.listen(process.env.portNo, () => {
    console.log(`Server Running On ${process.env.portNo}`);
    dbConnect(process.env.dbURL).then(() => {
        console.log("Database Connected Successfully.");
    }).catch((err) => {
        console.log({ err }, "Database Connection Error.");
    });
});