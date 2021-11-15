const path = require('path');
const router = require('express').Router();

router.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', function (request, response) {
    response.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', function (request, response) {
    response.sendStatus(404);
});

module.exports = router;