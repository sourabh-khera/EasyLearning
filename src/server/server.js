const express = require('express');
const path = require("path");
const app = express();
const routes = require("./routes/routes");
app.use(express.static(path.join(__dirname, "public")));

routes(app);
app.get("/*", (req, res) => {
    res.sendFile(path.resolve('src/client', './index.html'));
});

app.listen(3000, () => {
    console.log("server is listening at 3000");
});





