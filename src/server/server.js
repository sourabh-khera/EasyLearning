const express = require('express');
const path = require("path");
const app = express();
const webpack = require("webpack");
const routes = require("./routes/routes");
const webpackconfig = require("../../webpack.config");
const webpackMiddleware = require("webpack-dev-middleware");
const compiler = webpack(webpackconfig);
require('./config/connection');
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: '/',
    stats: {
        color: true,
    },
    historyApiFallback: true,
}));

app.use(express.static(path.join(__dirname, "public")));
routes(app);



app.get("/*", (req, res) => {
    res.sendfile(path.resolve('src/client', './index.html'));
});

app.listen(3000, () => {
    console.log("server is listening at 3000");
});





