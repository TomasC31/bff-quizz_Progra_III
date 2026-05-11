const { Router } = require('express');
const {getQuestions} = require('../controllers/questionController')

const router = Router();

// GET /api/questions

//Cuando alguien haga un GET a la raiz de este archivo, se ejecute la fun. getQuestions del controlador
router.get('/', getQuestions);

module.exports = router;