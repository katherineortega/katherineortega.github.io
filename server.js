const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json);

app.use((req, res) => {

});

router.get('/', (req, res) => {
    res.json(api);
});

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Iniciando en puerto 3000");
});