const { createClient } = require('@supabase/supabase-js');
const formattedReturn = require('./formattedReturn');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Get Data

module.exports = async (event) => {
    try{
        let { data, error } = await supabase
            .from('Recipes')
            .select('*')
        return formattedReturn(200, data);
    }catch(error){
        return formattedReturn(500, {});
    }
};