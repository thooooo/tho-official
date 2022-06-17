const { createClient } = require('@supabase/supabase-js');
const formattedReturn = require('./formattedReturn');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Add Data

module.exports = async (event) => {
  const params = new URLSearchParams(event.body);
  const parsedParams = Object.fromEntries(params);
  const {name, by, dif, cos, rec} = parsedParams;

  const recipeData = {
    name, 
    by, 
    dif, 
    cos, 
    rec
  };

  try{
    const { data, error } = await supabase
      .from("Recipes")
      .insert([
      {recipe: recipeData},
    ]);
    return formattedReturn(200, data)
  }catch(error){
    console.error(error);
    return formattedReturn(500, {})
  }
};