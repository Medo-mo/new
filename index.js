const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const db = require('./models');
const port = 3001;

app.use(cors());

// Routers
const userRouter = require('./routes/Users.js');
app.use('/user', userRouter);


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`server is running on port: ${port}`);
    });
});