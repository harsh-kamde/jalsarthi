require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
// const cron = require('./scheduler/auto_alumni_transition')

// lets solve cors policy 
const corsOptions = {
    origin:"*",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

const authRoute = require('./router/auth');
const householdRoutes = require('./router/household-routes');
const waterUsageRoutes = require('./router/water-usage-routes');
const wardRoutes = require('./router/ward-routes');
const reportRoutes = require('./router/report-routes');

app.use(cors(corsOptions)); 

app.use(express.json());//express middleware it will make server handle json files

app.use("/api/v1/auth",authRoute);
app.use('/api/v1/households', householdRoutes);
app.use('/api/v1/water-usage', waterUsageRoutes);
app.use('/api/v1/wards', wardRoutes);
app.use('/api/v1/reports', reportRoutes);

app.use(errorMiddleware);


const PORT = process.env.PORT;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT}`);
    });
});