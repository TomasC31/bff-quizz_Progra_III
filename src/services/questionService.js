const apiClient = require('./apiClient');

const getQuestions = async (amount = 10) => {
    
    //OpenTDB usa el endpoint '/api.php' para las preguntas.
    // Los parámetros (params) se agregan a la URL automáticamente: ?amount=10
    const response = await apiClient.get('/api.php', {
        params: {
            amount: amount, 
            type: 'multiple' //Asegura que traiga 4 opc. 
        }
    });

    //La API de OpenTDB devuelve los datos dentro de una propiedad llamada results
    return response.data.results;
}

module.exports = {getQuestions};