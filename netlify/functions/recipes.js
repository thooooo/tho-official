const formattedReturn = require('./formattedReturn');
const getRecipe = require('./get-recipe');
const addRecipe = require('./add-recipe');

exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
        return await getRecipe(event);
    } else if (event.httpMethod === 'GET') {
        return await addRecipe(event);
    } else {
        return formattedReturn(405, {});
    }
};