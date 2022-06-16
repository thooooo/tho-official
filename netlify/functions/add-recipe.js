const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Save Data

handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
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

// Transfer To Database

  try{
    const { data, error } = await supabase
      .from("Recipes")
      .insert([
        {recipe: recipeData},
      ]);
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }catch(error){
    console.log(error);
  }
};

module.exports = {handler};