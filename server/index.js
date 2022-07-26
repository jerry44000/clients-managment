require('dotenv').config();
const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

// Connect to MongoDB Database from config/db.js
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server listening on port ${port}!`));
