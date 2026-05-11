const questionService = require('../services/questionService');

const getQuestions = async (req, res, next) => {
    try{
        //llamo al servicio para obtener las preguntas
        const questions = await questionService.getQuestions();

        //Si sale bien, respondo con Ok y devuelvo el objeto.
        res.status(200).json({
            sucess: true, 
            total: questions.length,
            data: questions,
        });

    } catch (error){
        //Si hay un error, lo mando al middleware de manejo de errores
        next(error);
    }
}

module.exports = {getQuestions};