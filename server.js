const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log('API server now on port ' + PORT);
});