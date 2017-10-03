/**
 * Created by sourabh on 29/9/17.
 */
const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
    console.log("server is listening at 3000")
});


